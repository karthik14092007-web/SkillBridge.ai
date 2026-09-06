'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { AppLayout } from '@/components/layout/AppLayout';
import { useStudent } from '@/lib/context/StudentContext';
import { ReadinessGauge } from '@/components/dashboard/ReadinessGauge';
import { OpportunityCard } from '@/components/opportunities/OpportunityCard';
import { ApplyModal } from '@/components/opportunities/ApplyModal';
import { Opportunity } from '@/types';
import { 
  Sparkles, 
  BrainCircuit, 
  CheckCircle2, 
  AlertTriangle, 
  ArrowRight, 
  Briefcase, 
  Send, 
  BookOpenCheck,
  Zap,
  TrendingUp,
  Target,
  ShieldCheck
} from 'lucide-react';

export default function StudentDashboard() {
  const { student, opportunities, applications, toggleSaveOpportunity, savedOpportunityIds } = useStudent();
  const [selectedOpportunity, setSelectedOpportunity] = useState<Opportunity | null>(null);

  // Group Technical vs Soft Skills
  const technicalSkills = student.skills.filter(s => s.category === 'Technical' || s.category === 'Digital Skills');
  const softSkills = student.skills.filter(s => s.category === 'Soft Skills');

  // Top 3 recommended opportunities
  const topRecommended = opportunities.slice(0, 3);

  return (
    <AppLayout>
      
      {/* Top Banner / Welcome Header */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 relative overflow-hidden shadow-xl">
        <div className="space-y-2 max-w-xl z-10">
          <div className="inline-flex items-center gap-2 bg-indigo-950 border border-indigo-800 px-3 py-1 rounded-full text-xs font-bold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
            <span>SIH 2026 Student Portal</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Welcome back, {student.name}! 👋
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Targeting role: <span className="font-bold text-indigo-300">{student.targetRole}</span> at {student.institution}.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 z-10">
          <Link
            href="/assessment"
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-lg shadow-indigo-600/30 transition hover:scale-105 flex items-center gap-2"
          >
            <BrainCircuit className="w-4 h-4" />
            <span>Take Skill Assessment</span>
          </Link>

          <Link
            href="/skill-gap"
            className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 px-4 py-2.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
          >
            <Target className="w-4 h-4 text-indigo-400" />
            <span>Skill Gap Matrix</span>
          </Link>
        </div>
      </div>

      {/* Grid Row 1: Readiness Score Gauge & Top Skill Gaps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* 1. Readiness Score Gauge Card */}
        <ReadinessGauge score={student.readinessScore} targetRole={student.targetRole} />

        {/* 2. Top Skill Gaps Card */}
        <div className="lg:col-span-2 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-xl">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Top Skill Gaps Identified</h3>
              </div>
              <Link href="/skill-gap" className="text-xs text-indigo-400 hover:underline font-semibold flex items-center gap-1">
                <span>View Full Analysis</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="space-y-3">
              {student.topGaps.map((gap) => (
                <div key={gap.skillId} className="bg-slate-950/80 border border-slate-800 rounded-xl p-3.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-white">{gap.skillName}</span>
                      <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded-full border ${
                        gap.priority === 'Critical' 
                          ? 'bg-rose-950/80 text-rose-300 border-rose-800' 
                          : 'bg-amber-950/80 text-amber-300 border-amber-800'
                      }`}>
                        {gap.priority} Gap
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{gap.recommendedAction}</p>
                  </div>

                  <div className="shrink-0 text-right">
                    <span className="text-xs font-bold text-rose-400 block">{gap.currentLevel}% Current</span>
                    <span className="text-[10px] text-slate-500">Target: {gap.requiredLevel}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
            <span>Bridge gaps to unlock 4+ additional high-match internships</span>
            <Link href="/learning" className="text-indigo-400 font-bold hover:underline">Browse Courses →</Link>
          </div>
        </div>

      </div>

      {/* Grid Row 2: Technical Skills & Soft Skills Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Technical Skills Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <BrainCircuit className="w-4 h-4 text-indigo-400" />
              <span>Technical Skills ({technicalSkills.length})</span>
            </h3>
            <Link href="/profile" className="text-xs text-indigo-400 hover:underline font-semibold">
              Manage Profile
            </Link>
          </div>

          <div className="space-y-3">
            {technicalSkills.slice(0, 5).map(skill => (
              <div key={skill.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                    {skill.name}
                    {skill.verified && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 inline" />}
                  </span>
                  <span className="font-bold text-indigo-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-full transition-all duration-700" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills & Problem Solving Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Zap className="w-4 h-4 text-amber-400" />
              <span>Soft Skills & Competencies ({softSkills.length})</span>
            </h3>
            <span className="text-xs text-slate-400 font-medium">Verified by AI Quiz</span>
          </div>

          <div className="space-y-3">
            {softSkills.map(skill => (
              <div key={skill.id} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-200">{skill.name}</span>
                  <span className="font-bold text-amber-400">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-amber-500 to-emerald-500 rounded-full transition-all duration-700" 
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Grid Row 3: Recommended Opportunities */}
      <div className="space-y-4 pt-2">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-white tracking-tight flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-indigo-400" />
              <span>Recommended Industry Opportunities</span>
            </h2>
            <p className="text-xs text-slate-400">Match score formula: 60% Skill Match + 20% Eligibility + 20% Career Interest</p>
          </div>
          
          <Link
            href="/opportunities"
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 transition flex items-center gap-1"
          >
            <span>View All ({opportunities.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topRecommended.map((opp) => (
            <OpportunityCard
              key={opp.id}
              opportunity={opp}
              onApply={(o) => setSelectedOpportunity(o)}
              isSaved={savedOpportunityIds.includes(opp.id)}
              onToggleSave={toggleSaveOpportunity}
              isApplied={applications.some(a => a.opportunityId === opp.id)}
            />
          ))}
        </div>
      </div>

      {/* Grid Row 4: Recent Applications Summary */}
      <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-wider flex items-center gap-2">
            <Send className="w-4 h-4 text-emerald-400" />
            <span>Recent Applications ({applications.length})</span>
          </h3>
          <Link href="/applications" className="text-xs text-indigo-400 hover:underline font-semibold">
            Track All Applications →
          </Link>
        </div>

        <div className="divide-y divide-slate-800">
          {applications.map(app => (
            <div key={app.id} className="py-3 flex items-center justify-between text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-white text-sm block">{app.opportunityTitle}</span>
                <span className="text-slate-400">{app.company} • Applied on {app.appliedDate}</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="bg-indigo-950 text-indigo-300 border border-indigo-800 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                  {app.matchScoreAtApplication}% Match
                </span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  app.status === 'Interview Scheduled' 
                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' 
                    : 'bg-blue-500/20 text-blue-300 border border-blue-500/40'
                }`}>
                  {app.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Apply Modal Drawer */}
      <ApplyModal
        opportunity={selectedOpportunity}
        onClose={() => setSelectedOpportunity(null)}
        onSuccess={() => setSelectedOpportunity(null)}
      />

    </AppLayout>
  );
}
