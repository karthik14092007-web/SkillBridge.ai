import { StudentProfile } from '@/types';
import { MOCK_STANDARDIZED_SKILLS } from './skills';

export const MOCK_STUDENTS: StudentProfile[] = [
  {
    id: 'std-101',
    name: 'Rohan Sharma',
    email: 'rohan.sharma@institution.edu.in',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=256',
    institution: 'Delhi Technological University (DTU)',
    degree: 'B.Tech',
    branch: 'Computer Science and Engineering',
    semester: 7,
    cgpa: 8.65,
    readinessScore: 72,
    targetRole: 'AI/ML Engineer',
    careerInterests: ['Artificial Intelligence', 'Data Engineering', 'Full Stack Development'],
    assessmentCompleted: true,
    lastAssessmentDate: '2026-08-28',
    skills: [
      MOCK_STANDARDIZED_SKILLS[0],  // Python (85)
      MOCK_STANDARDIZED_SKILLS[1],  // Machine Learning (75)
      MOCK_STANDARDIZED_SKILLS[2],  // SQL (80)
      MOCK_STANDARDIZED_SKILLS[3],  // TensorFlow (40)
      MOCK_STANDARDIZED_SKILLS[4],  // React.js (88)
      MOCK_STANDARDIZED_SKILLS[5],  // TypeScript (82)
      MOCK_STANDARDIZED_SKILLS[8],  // DSA (78)
      MOCK_STANDARDIZED_SKILLS[9],  // Git (90)
      MOCK_STANDARDIZED_SKILLS[15], // Problem Solving (80)
      MOCK_STANDARDIZED_SKILLS[16], // Tech Comm (75)
      MOCK_STANDARDIZED_SKILLS[23], // AWS (55)
      MOCK_STANDARDIZED_SKILLS[24], // System Design (50)
      MOCK_STANDARDIZED_SKILLS[29], // Prompt Engineering (78)
      MOCK_STANDARDIZED_SKILLS[30], // Pandas & NumPy (82)
    ],
    topGaps: [
      {
        skillId: 'sk-4',
        skillName: 'TensorFlow / PyTorch',
        category: 'Technical',
        currentLevel: 40,
        requiredLevel: 80,
        gapPercentage: 50,
        priority: 'Critical',
        recommendedAction: 'Complete Deep Learning Specialization on Coursera & build a CNN project.'
      },
      {
        skillId: 'sk-24',
        skillName: 'Cloud Computing (AWS)',
        category: 'Digital Skills',
        currentLevel: 55,
        requiredLevel: 75,
        gapPercentage: 27,
        priority: 'High',
        recommendedAction: 'Practice AWS EC2, S3 & SageMaker deployment labs.'
      },
      {
        skillId: 'sk-25',
        skillName: 'System Design',
        category: 'Digital Skills',
        currentLevel: 50,
        requiredLevel: 75,
        gapPercentage: 33,
        priority: 'High',
        recommendedAction: 'Study Microservices & API gateway architecture principles.'
      },
      {
        skillId: 'sk-8',
        skillName: 'Docker & Containerization',
        category: 'Technical',
        currentLevel: 45,
        requiredLevel: 70,
        gapPercentage: 36,
        priority: 'Medium',
        recommendedAction: 'Containerize a FastAPI + React project using Docker Compose.'
      }
    ],
    certifications: [
      { id: 'cert-1', title: 'Deep Learning Fundamentals', issuer: 'NPTEL / IIT Madras', issueDate: '2026-03', verified: true },
      { id: 'cert-2', title: 'AWS Cloud Practitioner', issuer: 'Amazon Web Services', issueDate: '2025-11', verified: true },
      { id: 'cert-3', title: 'Data Structures with C++', issuer: 'Coursera', issueDate: '2025-06', verified: true }
    ]
  },
  // 19 additional realistic student profiles
  ...Array.from({ length: 19 }).map((_, i) => ({
    id: `std-10${i + 2}`,
    name: [
      'Ananya Verma', 'Aarav Patel', 'Priya Iyer', 'Devansh Gupta', 'Sneha Reddy',
      'Karan Malhotra', 'Riya Sen', 'Aditya Joshi', 'Meera Deshmukh', 'Vikram Choudhury',
      'Ishita Nair', 'Siddharth Rao', 'Pooja Agarwal', 'Manish Pandey', 'Divya Kapoor',
      'Harsh Vardhan', 'Kavya Pillai', 'Tarun Saxena', 'Nisha Trivedi'
    ][i],
    email: `student.${i + 2}@institution.edu.in`,
    avatar: `https://images.unsplash.com/photo-${1500000000000 + i * 1000}?auto=format&fit=crop&q=80&w=256`,
    institution: ['IIT Bombay', 'NIT Trichy', 'BITS Pilani', 'NSUT Delhi', 'IIIT Hyderabad'][i % 5],
    degree: 'B.Tech',
    branch: ['Computer Science', 'Information Technology', 'AI & Data Science', 'Electronics & Comm'][i % 4],
    semester: 6 + (i % 3),
    cgpa: parseFloat((7.2 + (i * 0.12) % 2.6).toFixed(2)),
    readinessScore: 58 + ((i * 3) % 35),
    targetRole: ['AI/ML Engineer', 'Full Stack Developer', 'Data Analyst', 'Cloud Engineer', 'Cyber Security Analyst'][i % 5],
    careerInterests: ['Artificial Intelligence', 'Web Development', 'Cloud Computing'],
    assessmentCompleted: i % 2 === 0,
    skills: MOCK_STANDARDIZED_SKILLS.slice(0, 10),
    topGaps: [],
    certifications: []
  }))
];
