'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  BrainCircuit, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  BarChart3, 
  CheckCircle2,
  Users,
  Target
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between overflow-x-hidden selection:bg-indigo-500 selection:text-white">
      
      {/* Top Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-indigo-600 via-violet-600 to-indigo-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl font-bold text-white tracking-tight">SkillBridge<span className="text-indigo-400">.ai</span></span>
              <span className="block text-[10px] uppercase font-extrabold text-slate-400 tracking-wider">SIH 2026 Platform</span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#features" className="hover:text-indigo-400 transition">Features</a>
            <a href="#architecture" className="hover:text-indigo-400 transition">AI Engine</a>
            <a href="#stats" className="hover:text-indigo-400 transition">SIH Impact</a>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-semibold text-slate-300 hover:text-white transition px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              href="/dashboard"
              className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg shadow-indigo-600/30 hover:scale-105 transition flex items-center gap-2"
            >
              <span>Student Experience</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center space-y-8">
        
        {/* SIH Pill */}
        <div className="inline-flex items-center gap-2 bg-indigo-950/80 border border-indigo-700/60 px-4 py-1.5 rounded-full text-xs font-bold text-indigo-300 shadow-inner">
          <Sparkles className="w-4 h-4 text-indigo-400 animate-pulse" />
          <span>Smart India Hackathon 2026 Solution</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-5xl mx-auto leading-tight">
          AI-Powered <span className="gradient-text">Academia–Industry</span> Collaboration & Skill Bridge
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-normal">
          Bridge student skill gaps with automated AI skill mapping, real-time industry job matching, verified assessment scoring, and targeted placement readiness tracking.
        </p>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/dashboard"
            className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 via-violet-600 to-indigo-600 hover:from-indigo-500 hover:to-violet-500 text-white px-8 py-4 rounded-2xl font-extrabold text-base shadow-xl shadow-indigo-600/40 hover:scale-105 transition flex items-center justify-center gap-3"
          >
            <BrainCircuit className="w-5 h-5" />
            <span>Launch Student Portal</span>
            <ArrowRight className="w-5 h-5" />
          </Link>

          <Link
            href="/assessment"
            className="w-full sm:w-auto bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-200 px-8 py-4 rounded-2xl font-bold text-base transition flex items-center justify-center gap-2"
          >
            <Zap className="w-5 h-5 text-amber-400" />
            <span>Take Quick Assessment</span>
          </Link>
        </div>

        {/* Hero Preview Card */}
        <div className="pt-12 max-w-5xl mx-auto">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden text-left grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Readiness Score</span>
                <span className="text-xs font-bold text-indigo-400 bg-indigo-950 border border-indigo-800 px-2 py-0.5 rounded-full">72 / 100</span>
              </div>
              <div className="text-2xl font-black text-white">Placement Ready</div>
              <p className="text-xs text-slate-400">Top strengths in Python, Machine Learning & Web Architecture.</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Opportunity Match</span>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-950 border border-emerald-800 px-2 py-0.5 rounded-full">87% Match</span>
              </div>
              <div className="text-xl font-bold text-white">AI/ML Engineering Intern</div>
              <p className="text-xs text-slate-400">Matched: Python, ML, SQL • Missing: TensorFlow</p>
            </div>

            <div className="bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-400">Skill Gap Action</span>
                <span className="text-xs font-bold text-amber-400 bg-amber-950 border border-amber-800 px-2 py-0.5 rounded-full">Critical</span>
              </div>
              <div className="text-xl font-bold text-white">Deep Learning Labs</div>
              <p className="text-xs text-slate-400">Coursera Specialization targeted to bridge TensorFlow gap.</p>
            </div>

          </div>
        </div>

      </section>

      {/* Feature Grid */}
      <section id="features" className="py-20 bg-slate-900/60 border-t border-slate-800/80 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3">
            <h2 className="text-3xl font-extrabold text-white">Core Platform Capabilities</h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Empowering students, academic institutions, and corporate recruiters with automated AI skill mapping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center">
                <BrainCircuit className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Dynamic Skill Assessment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Multi-domain 12-question evaluations that dynamically measure technical competence, problem-solving ability, digital literacy, and soft skills.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Skill Gap Matrix</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Side-by-side comparative gap analysis against specific industry role requirements. Instantly isolates missing skills with targeted learning paths.
              </p>
            </div>

            <div className="bg-slate-950 border border-slate-800 p-8 rounded-3xl space-y-4 hover:border-indigo-500/50 transition">
              <div className="w-12 h-12 rounded-2xl bg-indigo-950 text-indigo-400 border border-indigo-800 flex items-center justify-center">
                <Briefcase className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white">Opportunity Match Engine</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Calculates weighted match scores (60% Skill Match + 20% Eligibility + 20% Career Interest) with automated matched vs missing skill breakdowns.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950 py-8 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="font-bold text-slate-300">SkillBridge.ai</span>
            <span>— Smart India Hackathon 2026 Platform</span>
          </div>
          <div>
            <span>Built with Next.js 14, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
