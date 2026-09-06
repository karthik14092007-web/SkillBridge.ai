'use client';

import React from 'react';
import { Award, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';

interface ReadinessGaugeProps {
  score: number; // 0 to 100
  targetRole: string;
}

export const ReadinessGauge: React.FC<ReadinessGaugeProps> = ({ score, targetRole }) => {
  const radius = 68;
  const strokeWidth = 12;
  const normalizedRadius = radius - strokeWidth * 0.5;
  const circumference = normalizedRadius * 2 * Math.PI;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  let statusText = 'Placement Ready';
  let badgeColor = 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30';
  if (score < 60) {
    statusText = 'Needs Improvement';
    badgeColor = 'bg-amber-500/20 text-amber-400 border-amber-500/30';
  } else if (score < 75) {
    statusText = 'Placement Ready';
    badgeColor = 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30';
  } else {
    statusText = 'High Industry Match';
    badgeColor = 'bg-purple-500/20 text-purple-300 border-purple-500/30';
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-xl">
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Sparkles className="w-32 h-32 text-indigo-400" />
      </div>

      <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-1.5">
        <Award className="w-4 h-4 text-indigo-400" />
        <span>Placement Readiness Index</span>
      </div>

      {/* SVG Radial Gauge */}
      <div className="relative w-44 h-44 flex items-center justify-center my-2">
        <svg height={radius * 2} width={radius * 2} className="transform -rotate-90">
          <circle
            stroke="rgba(30, 41, 59, 0.8)"
            fill="transparent"
            strokeWidth={strokeWidth}
            r={normalizedRadius}
            cx={radius}
            cy={radius}
          />
          <circle
            stroke="url(#gradientScore)"
            fill="transparent"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference + ' ' + circumference}
            style={{ strokeDashoffset }}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="gradientScore" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#ec4899" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-white tracking-tight">{score}</span>
          <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">/ 100</span>
        </div>
      </div>

      {/* Status Badge */}
      <div className={`mt-2 px-3 py-1 rounded-full border text-xs font-bold flex items-center gap-1.5 ${badgeColor}`}>
        <ShieldCheck className="w-3.5 h-3.5" />
        <span>{statusText}</span>
      </div>

      <p className="mt-3 text-xs text-slate-400 max-w-xs">
        Evaluated against top industry benchmarks for <span className="font-semibold text-slate-200">{targetRole}</span>.
      </p>
    </div>
  );
};
