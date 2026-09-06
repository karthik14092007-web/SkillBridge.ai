'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { StudentProfile, Opportunity, ApplicationRecord, SkillGapItem } from '@/types';
import { MOCK_STUDENTS } from '@/lib/mockData/students';
import { MOCK_OPPORTUNITIES } from '@/lib/mockData/opportunities';
import { MOCK_STANDARDIZED_SKILLS } from '@/lib/mockData/skills';
import { calculateOpportunityMatch } from '@/lib/services/matchEngine';

interface StudentContextType {
  student: StudentProfile;
  opportunities: Opportunity[];
  applications: ApplicationRecord[];
  savedOpportunityIds: string[];
  submitAssessment: (answers: Record<string, number>) => void;
  applyForOpportunity: (opportunityId: string, notes?: string) => boolean;
  toggleSaveOpportunity: (opportunityId: string) => void;
  updateTargetRole: (role: string) => void;
  getOpportunityById: (id: string) => Opportunity | undefined;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [student, setStudent] = useState<StudentProfile>(MOCK_STUDENTS[0]);
  const [savedOpportunityIds, setSavedOpportunityIds] = useState<string[]>(['opp-1', 'opp-3']);
  const [applications, setApplications] = useState<ApplicationRecord[]>([
    {
      id: 'app-1',
      opportunityId: 'opp-2',
      opportunityTitle: 'Full Stack Web Developer Intern',
      company: 'NextGen Systems',
      appliedDate: '2026-08-30',
      status: 'Interview Scheduled',
      matchScoreAtApplication: 84,
      notes: 'Submitted customized GitHub portfolio link.',
      timeline: [
        { step: 'Application Submitted', date: '2026-08-30', completed: true },
        { step: 'Resume Screening', date: '2026-09-01', completed: true },
        { step: 'Technical Round 1', date: '2026-09-04', completed: true },
        { step: 'Final Interview', date: '2026-09-08', completed: false },
      ]
    },
    {
      id: 'app-2',
      opportunityId: 'opp-10',
      opportunityTitle: 'Product Management Intern',
      company: 'InnoVenture Labs',
      appliedDate: '2026-08-20',
      status: 'Under Review',
      matchScoreAtApplication: 76,
      notes: 'Attached case study design doc.',
      timeline: [
        { step: 'Application Submitted', date: '2026-08-20', completed: true },
        { step: 'Profile Verification', date: '2026-08-25', completed: true },
        { step: 'Recruiter Review', date: '2026-09-02', completed: true }
      ]
    }
  ]);

  // Compute matched opportunities with live student profile data
  const opportunities = MOCK_OPPORTUNITIES.map(opp => {
    const matchDetails = calculateOpportunityMatch(student, opp);
    return {
      ...opp,
      matchScore: matchDetails.finalMatchScore,
      matchDetails: {
        finalMatchScore: matchDetails.finalMatchScore,
        skillMatchPercentage: matchDetails.skillMatchScore,
        eligibilityMatchPercentage: matchDetails.eligibilityScore,
        careerInterestPercentage: matchDetails.careerInterestScore,
        matchedSkills: matchDetails.matchedSkills,
        missingSkills: matchDetails.missingSkills,
        isEligible: matchDetails.isEligible,
        whyRecommended: matchDetails.whyRecommended
      }
    };
  }).sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));

  const getOpportunityById = (id: string) => {
    return opportunities.find(o => o.id === id);
  };

  const toggleSaveOpportunity = (id: string) => {
    setSavedOpportunityIds(prev => 
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const updateTargetRole = (newRole: string) => {
    setStudent(prev => ({
      ...prev,
      targetRole: newRole
    }));
  };

  const submitAssessment = (answers: Record<string, number>) => {
    const scores = Object.values(answers);
    if (scores.length === 0) return;

    // Calculate dynamic readiness score
    const avgScore = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
    const newReadinessScore = Math.max(40, Math.min(98, Math.round(avgScore * 0.95 + 10)));

    // Dynamic skill profile adjustments based on assessment
    const updatedSkills = student.skills.map(skill => {
      // Elevate level for answered skills
      let levelBoost = 0;
      if (skill.name.toLowerCase().includes('python') && answers['q-1']) levelBoost = Math.round(answers['q-1'] * 0.1);
      if (skill.name.toLowerCase().includes('sql') && answers['q-3']) levelBoost = Math.round(answers['q-3'] * 0.1);
      if (skill.name.toLowerCase().includes('tensorflow') && answers['q-4']) levelBoost = Math.round(answers['q-4'] * 0.15);
      
      const newLevel = Math.min(100, skill.level + levelBoost);
      return {
        ...skill,
        level: newLevel,
        verified: newLevel > 70 ? true : skill.verified
      };
    });

    // Recompute gaps
    const newGaps: SkillGapItem[] = [
      {
        skillId: 'sk-4',
        skillName: 'TensorFlow / PyTorch',
        category: 'Technical',
        currentLevel: Math.round(answers['q-4'] || 40),
        requiredLevel: 80,
        gapPercentage: Math.max(0, 80 - Math.round(answers['q-4'] || 40)),
        priority: 'Critical',
        recommendedAction: 'Complete Deep Learning Specialization on Coursera.'
      },
      {
        skillId: 'sk-24',
        skillName: 'Cloud Computing (AWS)',
        category: 'Digital Skills',
        currentLevel: Math.round(answers['q-11'] || 55),
        requiredLevel: 75,
        gapPercentage: Math.max(0, 75 - Math.round(answers['q-11'] || 55)),
        priority: 'High',
        recommendedAction: 'Practice AWS deployment labs & S3 bucket security.'
      },
      {
        skillId: 'sk-8',
        skillName: 'Docker & Containerization',
        category: 'Digital Skills',
        currentLevel: Math.round(answers['q-7'] || 45),
        requiredLevel: 70,
        gapPercentage: Math.max(0, 70 - Math.round(answers['q-7'] || 45)),
        priority: 'Medium',
        recommendedAction: 'Containerize FastAPI app using Docker Compose.'
      }
    ];

    setStudent(prev => ({
      ...prev,
      readinessScore: newReadinessScore,
      assessmentCompleted: true,
      lastAssessmentDate: new Date().toISOString().split('T')[0],
      skills: updatedSkills,
      topGaps: newGaps
    }));
  };

  const applyForOpportunity = (opportunityId: string, notes?: string): boolean => {
    const opp = getOpportunityById(opportunityId);
    if (!opp) return false;

    // Check if already applied
    if (applications.some(a => a.opportunityId === opportunityId)) {
      return false;
    }

    const newApp: ApplicationRecord = {
      id: `app-${Date.now()}`,
      opportunityId: opp.id,
      opportunityTitle: opp.title,
      company: opp.company,
      appliedDate: new Date().toISOString().split('T')[0],
      status: 'Submitted',
      matchScoreAtApplication: opp.matchScore || 85,
      notes: notes || 'Applied via SkillBridge.ai automated portal',
      timeline: [
        { step: 'Application Submitted', date: new Date().toISOString().split('T')[0], completed: true },
        { step: 'Resume & Skill Profile Sent', date: new Date().toISOString().split('T')[0], completed: true },
        { step: 'Recruiter Screening', date: 'Pending', completed: false },
        { step: 'Technical Evaluation', date: 'Pending', completed: false }
      ]
    };

    setApplications(prev => [newApp, ...prev]);
    return true;
  };

  return (
    <StudentContext.Provider
      value={{
        student,
        opportunities,
        applications,
        savedOpportunityIds,
        submitAssessment,
        applyForOpportunity,
        toggleSaveOpportunity,
        updateTargetRole,
        getOpportunityById
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudent = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }
  return context;
};
