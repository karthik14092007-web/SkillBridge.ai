'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  BrainCircuit, 
  UserCheck, 
  GitCompare, 
  BookOpenCheck, 
  Briefcase, 
  Send,
  Sparkles,
  LogOut,
  ChevronRight
} from 'lucide-react';
import { useStudent } from '@/lib/context/StudentContext';

export const Sidebar: React.FC = () => {
  const pathname = usePathname();
  const { applications } = useStudent();

  const navigationItems = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Skill Assessment', href: '/assessment', icon: BrainCircuit, badge: 'Take Quiz' },
    { name: 'Skill Profile', href: '/profile', icon: UserCheck },
    { name: 'Skill Gap Analysis', href: '/skill-gap', icon: GitCompare },
    { name: 'Learning Path', href: '/learning', icon: BookOpenCheck },
    { name: 'Internships & Jobs', href: '/opportunities', icon: Briefcase, highlight: true },
    { name: 'Application Tracker', href: '/applications', icon: Send, count: applications.length },
  ];

  return (
    <aside className="w-64 bg-slate-950 text-slate-300 border-r border-slate-800 min-h-screen flex flex-col justify-between hidden md:flex shrink-0">
      
      {/* Brand Header */}
      <div>
        <div className="h-16 flex items-center px-6 border-b border-slate-800/80">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-violet-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25 group-hover:scale-105 transition">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-lg font-bold text-white tracking-tight">SkillBridge<span className="text-indigo-400">.ai</span></span>
              <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">SIH 2026 Edition</span>
            </div>
          </Link>
        </div>

        {/* Nav Links */}
        <div className="px-3 py-6 space-y-1">
          <div className="px-3 pb-2 text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
            Student Experience Portal
          </div>

          {navigationItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            const Icon = item.icon;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-medium transition group ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 transition ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-indigo-400'}`} />
                  <span>{item.name}</span>
                </div>

                {item.badge && (
                  <span className="text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 px-2 py-0.5 rounded-full">
                    {item.badge}
                  </span>
                )}

                {item.count !== undefined && item.count > 0 && (
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-800 text-indigo-400 border border-indigo-500/30'
                  }`}>
                    {item.count}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Footer / Quick Help & Demo Switcher */}
      <div className="p-4 border-t border-slate-900 space-y-3">
        <div className="bg-slate-900/90 rounded-xl p-3.5 border border-slate-800 text-xs">
          <div className="flex items-center gap-2 font-semibold text-indigo-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>SIH 2026 AI Engine</span>
          </div>
          <p className="text-slate-400 text-[11px] leading-relaxed">
            Real-time skill matching algorithms powered by weighted vector scoring.
          </p>
        </div>

        <Link
          href="/"
          className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-950/20 rounded-lg transition"
        >
          <div className="flex items-center gap-2">
            <LogOut className="w-4 h-4" />
            <span>Switch Role / Logout</span>
          </div>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
        </Link>
      </div>

    </aside>
  );
};
