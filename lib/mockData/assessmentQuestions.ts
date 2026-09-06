import { AssessmentQuestion } from '@/types';

export const MOCK_ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'q-1',
    question: 'How comfortably can you write Python code to build a machine learning pipeline or parse complex data structures?',
    category: 'Technical',
    relatedSkill: 'Python',
    options: [
      { label: 'Beginner — Basic syntax, loops, and simple functions', score: 25 },
      { label: 'Intermediate — Comfortable with OOP, Pandas, and basic ML libraries', score: 65 },
      { label: 'Advanced — Can build full ML pipelines, custom decorators, and async scripts', score: 90 },
      { label: 'Expert — Optimize C-extensions, write production PyTorch/TensorFlow modules', score: 100 }
    ]
  },
  {
    id: 'q-2',
    question: 'When faced with an algorithmic problem with time complexity O(N^2), what is your approach to optimize it to O(N log N) or O(N)?',
    category: 'Problem Solving',
    relatedSkill: 'Problem Solving',
    options: [
      { label: 'I struggle to identify time complexity bottlenecks without assistance.', score: 30 },
      { label: 'I use standard hash maps, sorting algorithms, or two-pointers when prompted.', score: 65 },
      { label: 'I systematically apply dynamic programming, memoization, or divide-and-conquer.', score: 85 },
      { label: 'I frequently solve hard algorithmic challenges efficiently and write clean space-time tradeoffs.', score: 98 }
    ]
  },
  {
    id: 'q-3',
    question: 'How do you structure complex relational database queries involving multiple JOINs, subqueries, and window functions?',
    category: 'Technical',
    relatedSkill: 'SQL',
    options: [
      { label: 'Can write simple SELECT, WHERE, and single INNER JOIN queries.', score: 40 },
      { label: 'Write GROUP BY, HAVING, LEFT/RIGHT JOINs with moderate confidence.', score: 70 },
      { label: 'Write complex window functions (PARTITION BY), CTEs, and index optimizations.', score: 90 },
      { label: 'Design relational schemas, manage query execution plans, and prevent deadlock locks.', score: 100 }
    ]
  },
  {
    id: 'q-4',
    question: 'How experienced are you with Deep Learning frameworks like TensorFlow or PyTorch?',
    category: 'Technical',
    relatedSkill: 'TensorFlow',
    options: [
      { label: 'No hands-on experience / theoretical knowledge only.', score: 20 },
      { label: 'Built simple Sequential neural networks using Keras tutorials.', score: 50 },
      { label: 'Customized CNN/RNN architectures, loss functions, and dataset loaders.', score: 80 },
      { label: 'Fine-tuned LLMs, implemented transformer attention layers from scratch.', score: 95 }
    ]
  },
  {
    id: 'q-5',
    question: 'When presenting technical architecture decisions to non-technical stakeholders, how do you communicate?',
    category: 'Soft Skills',
    relatedSkill: 'Technical Communication',
    options: [
      { label: 'Use heavy jargon and struggle to translate tech concepts simply.', score: 35 },
      { label: 'Use high-level analogies and charts to explain core functionality.', score: 70 },
      { label: 'Tailor presentations to business ROI, user impact, and architectural trade-offs.', score: 90 },
      { label: 'Confidently lead C-suite product roadmap reviews with executive clarity.', score: 98 }
    ]
  },
  {
    id: 'q-6',
    question: 'How proficient are you in modern frontend frameworks (React.js, Next.js) and TypeScript?',
    category: 'Technical',
    relatedSkill: 'React.js',
    options: [
      { label: 'Basic HTML/CSS/JS knowledge, new to React components.', score: 30 },
      { label: 'Build standard functional components, hooks (useState, useEffect), and basic props.', score: 70 },
      { label: 'Master custom hooks, Context API, Next.js Server Components & strict TypeScript types.', score: 90 },
      { label: 'Architect micro-frontend design systems, performance monitoring, and SSR optimization.', score: 100 }
    ]
  },
  {
    id: 'q-7',
    question: 'How do you handle containerization with Docker and deployment pipelines?',
    category: 'Digital Skills',
    relatedSkill: 'Docker',
    options: [
      { label: 'Never used Docker or CI/CD pipelines.', score: 15 },
      { label: 'Understand basic `docker run` commands and simple Dockerfiles.', score: 45 },
      { label: 'Write multi-stage Dockerfiles, Docker Compose configs, and GitHub Actions.', score: 80 },
      { label: 'Orchestrate production Kubernetes clusters and automated canary deployments.', score: 95 }
    ]
  },
  {
    id: 'q-8',
    question: 'How do you handle version control and collaborative software development?',
    category: 'Digital Skills',
    relatedSkill: 'Git & GitHub',
    options: [
      { label: 'Basic git add, commit, push on main branch only.', score: 40 },
      { label: 'Use feature branches, resolve simple merge conflicts, open Pull Requests.', score: 75 },
      { label: 'Perform interactive rebase, git bisect, submodules, and automated PR reviews.', score: 92 },
      { label: 'Manage enterprise repository release branches and GitOps workflows.', score: 100 }
    ]
  },
  {
    id: 'q-9',
    question: 'How comfortable are you designing scalable REST APIs or microservice architectures?',
    category: 'Technical',
    relatedSkill: 'REST APIs',
    options: [
      { label: 'Understand HTTP methods (GET, POST) superficially.', score: 35 },
      { label: 'Build basic API endpoints with Express or FastAPI.', score: 70 },
      { label: 'Design OpenAPI specs, JWT authentication, rate limiting, and error handling.', score: 88 },
      { label: 'Architect high-throughput event-driven microservices with Redis & Kafka.', score: 98 }
    ]
  },
  {
    id: 'q-10',
    question: 'When working in an Agile team with unexpected project requirement changes, how do you adapt?',
    category: 'Soft Skills',
    relatedSkill: 'Adaptability',
    options: [
      { label: 'Get frustrated by scope changes and delay deliverables.', score: 30 },
      { label: 'Adjust tasks after discussing with team leader during standup.', score: 70 },
      { label: 'Quickly reprioritize sprint backlogs and proactively refactor modular code.', score: 88 },
      { label: 'Champion change management, helping teammates pivot effortlessly.', score: 98 }
    ]
  },
  {
    id: 'q-11',
    question: 'How experienced are you with Cloud infrastructure (AWS / GCP / Azure)?',
    category: 'Digital Skills',
    relatedSkill: 'Cloud Computing (AWS)',
    options: [
      { label: 'No hands-on experience.', score: 20 },
      { label: 'Deployed simple apps on AWS EC2 or Vercel/Netlify.', score: 55 },
      { label: 'Configure S3, Lambda, RDS, IAM roles, and VPC networking.', score: 82 },
      { label: 'Certified AWS Solutions Architect managing multi-region cloud infrastructures.', score: 98 }
    ]
  },
  {
    id: 'q-12',
    question: 'What is your primary career goal for your upcoming industry placement or internship?',
    category: 'Career Interests',
    relatedSkill: 'Prompt Engineering & LLMs',
    options: [
      { label: 'Build cutting-edge AI & Machine Learning applications', score: 95 },
      { label: 'Become a Full-Stack Web & Software Architect', score: 90 },
      { label: 'Master Cloud, Infrastructure & DevOps Security', score: 85 },
      { label: 'Lead Data Analytics & Product Strategy teams', score: 88 }
    ]
  }
];
