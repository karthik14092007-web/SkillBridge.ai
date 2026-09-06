export type SkillCategory = 'Technical' | 'Soft Skills' | 'Problem Solving' | 'Digital Skills' | 'Domain Knowledge' | 'Career Interests';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: number; // 0 to 100
  verified: boolean;
  demandLevel: 'High' | 'Medium' | 'Critical';
}

export interface SkillGapItem {
  skillId: string;
  skillName: string;
  category: SkillCategory;
  currentLevel: number;
  requiredLevel: number;
  gapPercentage: number;
  priority: 'Critical' | 'High' | 'Medium';
  recommendedAction: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  email: string;
  avatar: string;
  institution: string;
  degree: string;
  branch: string;
  semester: number;
  cgpa: number;
  readinessScore: number; // 0 to 100
  targetRole: string;
  careerInterests: string[];
  skills: Skill[];
  topGaps: SkillGapItem[];
  assessmentCompleted: boolean;
  lastAssessmentDate?: string;
  certifications: {
    id: string;
    title: string;
    issuer: string;
    issueDate: string;
    verified: boolean;
  }[];
}

export interface Opportunity {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  type: 'Internship' | 'Full-time' | 'Remote Internship';
  stipend: string;
  duration: string;
  deadline: string;
  domain: string;
  requiredSkills: string[];
  minimumCGPA: number;
  eligibleBranches: string[];
  description: string;
  responsibilities: string[];
  perks: string[];
  matchScore?: number; // Calculated dynamically
  matchDetails?: {
    finalMatchScore?: number;
    skillMatchPercentage: number;
    eligibilityMatchPercentage: number;
    careerInterestPercentage: number;
    matchedSkills: string[];
    missingSkills: string[];
    isEligible: boolean;
    whyRecommended: string;
  };
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  category: SkillCategory;
  relatedSkill: string;
  options: {
    label: string;
    score: number; // 1 to 5 scale
  }[];
}

export interface LearningResource {
  id: string;
  title: string;
  provider: string;
  type: 'Course' | 'Certification' | 'Project' | 'Bootcamp';
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  skillAddressed: string;
  rating: number;
  enrollUrl: string;
  image: string;
  isFree: boolean;
}

export interface ApplicationRecord {
  id: string;
  opportunityId: string;
  opportunityTitle: string;
  company: string;
  appliedDate: string;
  status: 'Submitted' | 'Under Review' | 'Interview Scheduled' | 'Shortlisted' | 'Offered' | 'Rejected';
  matchScoreAtApplication: number;
  notes?: string;
  timeline: {
    step: string;
    date: string;
    completed: boolean;
  }[];
}
