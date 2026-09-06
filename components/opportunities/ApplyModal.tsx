'use client';

import React, { useState } from 'react';
import { Opportunity } from '@/types';
import { useStudent } from '@/lib/context/StudentContext';
import { X, CheckCircle2, FileText, Send, Sparkles, ShieldCheck, UserCheck } from 'lucide-react';

interface ApplyModalProps {
  opportunity: Opportunity | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const ApplyModal: React.FC<ApplyModalProps> = ({ opportunity, onClose, onSuccess }) => {
  const { student, applyForOpportunity } = useStudent();
  const [coverNote, setCoverNote] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!opportunity) return null;

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      applyForOpportunity(opportunity.id, coverNote);
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => {
        onSuccess();
      }, 1200);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div className="bg-slate-900 border border-slate-800 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative text-slate-100 overflow-hidden">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white rounded-full hover:bg-slate-800 transition"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>
            <p className="text-sm text-slate-400 max-w-xs mx-auto">
              Your verified SkillBridge profile and assessment score ({student.readinessScore}/100) have been transmitted to <span className="font-semibold text-slate-200">{opportunity.company}</span>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleApply} className="space-y-5">
            
            {/* Header */}
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Instant Verified Application</span>
              </div>
              <h2 className="text-xl font-bold text-white">{opportunity.title}</h2>
              <p className="text-xs text-slate-400 mt-0.5">{opportunity.company} • {opportunity.location}</p>
            </div>

            {/* Match Rationale Card */}
            <div className="bg-indigo-950/50 border border-indigo-800/60 rounded-xl p-3.5 text-xs text-indigo-200 flex items-center justify-between">
              <div>
                <span className="font-bold text-white text-sm block">Match Score: {opportunity.matchScore}%</span>
                <span className="text-slate-300 text-[11px]">{opportunity.matchDetails?.whyRecommended}</span>
              </div>
              <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2.5 py-1 rounded-full font-bold">
                Eligible
              </span>
            </div>

            {/* Profile Data Preview */}
            <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60 space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Applicant Name:</span>
                <span className="font-bold text-white flex items-center gap-1">
                  {student.name}
                  <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
                </span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Institution & Branch:</span>
                <span className="font-semibold text-slate-200">{student.branch}</span>
              </div>

              <div className="flex items-center justify-between border-b border-slate-700/60 pb-2">
                <span className="text-slate-400">Readiness Score:</span>
                <span className="font-extrabold text-indigo-400">{student.readinessScore} / 100</span>
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="text-slate-400 flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5 text-indigo-400" />
                  Verified Resume:
                </span>
                <span className="text-indigo-300 font-medium underline cursor-pointer">
                  SkillBridge_Verified_Resume.pdf
                </span>
              </div>
            </div>

            {/* Optional Cover Note */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                Cover Note / Project Highlights (Optional):
              </label>
              <textarea
                rows={3}
                value={coverNote}
                onChange={(e) => setCoverNote(e.target.value)}
                placeholder="Highlight your top Python/ML projects or relevant technical achievements..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500"
              />
            </div>

            {/* Submit Action */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 shadow-lg shadow-indigo-600/30 transition hover:scale-105 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Confirm & Submit Application</span>
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
