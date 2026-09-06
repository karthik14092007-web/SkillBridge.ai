import type { Metadata } from 'next';
import './globals.css';
import { StudentProvider } from '@/lib/context/StudentContext';

export const metadata: Metadata = {
  title: 'SkillBridge.ai | Academia–Industry Collaboration Platform',
  description: 'AI-powered Academia–Industry Collaboration Platform for Skill Mapping, Skill Gap Analysis, Internships, Jobs, and Placement Readiness.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-indigo-500 selection:text-white">
        <StudentProvider>
          {children}
        </StudentProvider>
      </body>
    </html>
  );
}
