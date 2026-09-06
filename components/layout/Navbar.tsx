'use client';

import React from 'react';
import Link from 'next/link';
import { useStudent } from '@/lib/context/StudentContext';
import { Sparkles, Bell, Search, Award, UserCheck, ShieldCheck } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { student } = useStudent();

  return (
    <header className="sticky top-0 z-30 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Search Bar & Role Pill */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <div className="relative w-full hidden md:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search skills, internships, courses, certifications..."
              className="w-full bg-slate-800/80 text-slate-200 text-sm rounded-lg pl-9 pr-4 py-2 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400 transition"
            />
          </div>
          
          <div className="flex items-center gap-1.5 bg-indigo-950/80 border border-indigo-700/50 px-3 py-1.5 rounded-full text-xs font-semibold text-indigo-300">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Role: Student</span>
          </div>
        </div>

        {/* Right Section: Readiness Badge & User Profile */}
        <div className="flex items-center gap-4">
          
          {/* Quick Readiness Score Pill */}
          <Link 
            href="/assessment" 
            className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-3.5 py-1.5 rounded-full text-xs font-bold text-white shadow-sm transition hover:scale-105"
          >
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>Readiness Score: {student.readinessScore}/100</span>
          </Link>

          {/* Notifications Button */}
          <button className="relative p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full animate-ping" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-500 rounded-full" />
          </button>

          {/* User Profile Dropdown / Trigger */}
          <Link href="/profile" className="flex items-center gap-3 pl-2 border-l border-slate-800 hover:opacity-90 transition">
            <div className="relative">
              <img
                src={student.avatar}
                alt={student.name}
                className="w-9 h-9 rounded-full object-cover ring-2 ring-indigo-500/50"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-900 rounded-full" />
            </div>
            <div className="hidden lg:block text-left">
              <div className="text-sm font-semibold text-slate-100 flex items-center gap-1">
                <span>{student.name}</span>
                <UserCheck className="w-3.5 h-3.5 text-indigo-400 inline" />
              </div>
              <div className="text-xs text-slate-400 truncate max-w-[140px]">
                {student.branch} ({student.semester}th Sem)
              </div>
            </div>
          </Link>

        </div>
      </div>
    </header>
  );
};
