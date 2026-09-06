'use client';

import React from 'react';
import { Opportunity } from '@/types';
import { CheckCircle2, XCircle, Sparkles, MapPin, Building, Calendar, DollarSign, Bookmark, ArrowRight, ShieldCheck } from 'lucide-react';

interface OpportunityCardProps {
  opportunity: Opportunity;
  onApply: (opportunity: Opportunity) => void;
  onViewDetails?: (opportunity: Opportunity) => void;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
  isApplied?: boolean;
}

export const OpportunityCard: React.FC<OpportunityCardProps> = ({
  opportunity,
  onApply,
  onViewDetails,
  isSaved = false,
  onToggleSave,
  isApplied = false
}) => {
  const match = opportunity.matchDetails;
  const matchScore = opportunity.matchScore || match?.finalMatchScore || 75;

  let matchBadgeColor = 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40';
  if (matchScore < 70) {
    matchBadgeColor = 'bg-amber-500/20 text-amber-300 border-amber-500/40';
  } else if (matchScore >= 85) {
    matchBadgeColor = 'bg-gradient-to-r from-indigo-500/30 to-purple-500/30 text-indigo-200 border-indigo-500/50 shadow-md shadow-indigo-500/20';
  }

  return (
    <div className="bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col justify-between relative group">
      
      {/* Top Header Row */}
      <div>
        <div className="flex items-start justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl shadow-inner shrink-0">
              {opportunity.companyLogo}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition line-clamp-1">
                {opportunity.title}
              </h3>
              <div className="text-xs text-slate-400 font-medium flex items-center gap-2 mt-0.5">
                <span className="flex items-center gap-1 text-slate-300">
                  <Building className="w-3.5 h-3.5 text-indigo-400" />
                  {opportunity.company}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-slate-500" />
                  {opportunity.location}
                </span>
              </div>
            </div>
          </div>

          {/* Match Score Badge */}
          <div className={`px-3.5 py-1.5 rounded-full border text-xs font-black flex items-center gap-1.5 shrink-0 ${matchBadgeColor}`}>
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            <span>{matchScore}% Match</span>
          </div>
        </div>

        {/* Opportunity Meta Pills */}
        <div className="flex flex-wrap gap-2 my-3 text-xs">
          <span className="bg-slate-800/80 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md font-medium">
            {opportunity.type}
          </span>
          <span className="bg-slate-800/80 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
            <DollarSign className="w-3.5 h-3.5 text-emerald-400" />
            {opportunity.stipend}
          </span>
          <span className="bg-slate-800/80 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-md font-medium flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5 text-indigo-400" />
            {opportunity.duration}
          </span>
        </div>

        {/* Why Recommended Explanation */}
        {match?.whyRecommended && (
          <div className="bg-indigo-950/40 border border-indigo-900/60 rounded-xl p-3 my-3 text-xs text-indigo-200 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-indigo-300 block mb-0.5">Why recommended:</span>
              <p className="text-slate-300 leading-relaxed">{match.whyRecommended}</p>
            </div>
          </div>
        )}

        {/* Matched vs Missing Skills Breakdown */}
        <div className="space-y-2 my-4">
          
          {/* Matched Skills (✓) */}
          <div className="text-xs">
            <span className="text-slate-400 font-medium block mb-1.5">Matched Skills ({match?.matchedSkills.length || 0}):</span>
            <div className="flex flex-wrap gap-1.5">
              {match?.matchedSkills.map(skill => (
                <span key={skill} className="bg-emerald-950/60 text-emerald-300 border border-emerald-800/80 px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Missing Skills (✗) */}
          {match?.missingSkills && match.missingSkills.length > 0 && (
            <div className="text-xs pt-1">
              <span className="text-slate-400 font-medium block mb-1.5">Missing Skills ({match.missingSkills.length}):</span>
              <div className="flex flex-wrap gap-1.5">
                {match.missingSkills.map(skill => (
                  <span key={skill} className="bg-rose-950/40 text-rose-300 border border-rose-900/60 px-2.5 py-0.5 rounded-full text-[11px] font-semibold flex items-center gap-1">
                    <XCircle className="w-3 h-3 text-rose-400" />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Footer Actions */}
      <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3 mt-2">
        <div className="flex items-center gap-2">
          {onToggleSave && (
            <button
              onClick={() => onToggleSave(opportunity.id)}
              className={`p-2 rounded-lg border transition ${
                isSaved 
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                  : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-slate-200'
              }`}
              title={isSaved ? 'Unsave Role' : 'Save Role'}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-amber-300' : ''}`} />
            </button>
          )}

          {onViewDetails && (
            <button
              onClick={() => onViewDetails(opportunity)}
              className="text-xs font-semibold text-slate-300 hover:text-indigo-300 transition px-2 py-1"
            >
              View Details
            </button>
          )}
        </div>

        {isApplied ? (
          <span className="bg-slate-800 text-emerald-400 border border-emerald-500/30 px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4" />
            Applied
          </span>
        ) : (
          <button
            onClick={() => onApply(opportunity)}
            className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-indigo-600/30 hover:scale-105 transition"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

    </div>
  );
};
