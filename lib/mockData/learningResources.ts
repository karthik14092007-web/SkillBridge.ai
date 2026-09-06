import { LearningResource } from '@/types';

export const MOCK_LEARNING_RESOURCES: LearningResource[] = [
  {
    id: 'lr-1',
    title: 'Deep Learning Specialization (PyTorch & TensorFlow)',
    provider: 'Coursera / DeepLearning.AI',
    type: 'Course',
    duration: '4 Weeks (20 Hours)',
    level: 'Intermediate',
    skillAddressed: 'TensorFlow / PyTorch',
    rating: 4.9,
    enrollUrl: '#',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
    isFree: true
  },
  {
    id: 'lr-2',
    title: 'AWS Certified Cloud Practitioner & Hands-on Labs',
    provider: 'NPTEL / AWS Academy',
    type: 'Certification',
    duration: '6 Weeks (30 Hours)',
    level: 'Beginner',
    skillAddressed: 'Cloud Computing (AWS)',
    rating: 4.8,
    enrollUrl: '#',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400',
    isFree: true
  },
  {
    id: 'lr-3',
    title: 'System Design for Tech Interviews & Microservices',
    provider: 'Educative / Industry Experts',
    type: 'Bootcamp',
    duration: '3 Weeks (15 Hours)',
    level: 'Advanced',
    skillAddressed: 'System Design',
    rating: 4.9,
    enrollUrl: '#',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=400',
    isFree: false
  },
  {
    id: 'lr-4',
    title: 'Docker & Containerization Mastery for Developers',
    provider: 'Udemy / TechCraft',
    type: 'Course',
    duration: '2 Weeks (10 Hours)',
    level: 'Intermediate',
    skillAddressed: 'Docker',
    rating: 4.7,
    enrollUrl: '#',
    image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&q=80&w=400',
    isFree: true
  },
  {
    id: 'lr-5',
    title: 'Build a Full-Stack Generative AI App with FastAPI & React',
    provider: 'SkillBridge Project Lab',
    type: 'Project',
    duration: '1 Week (8 Hours)',
    level: 'Intermediate',
    skillAddressed: 'FastAPI',
    rating: 4.9,
    enrollUrl: '#',
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&q=80&w=400',
    isFree: true
  },
  {
    id: 'lr-6',
    title: 'Advanced PostgreSQL Query Optimization & Indexing',
    provider: 'PostgreSQL Academy',
    type: 'Course',
    duration: '2 Weeks (12 Hours)',
    level: 'Intermediate',
    skillAddressed: 'PostgreSQL',
    rating: 4.8,
    enrollUrl: '#',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400',
    isFree: true
  }
];
