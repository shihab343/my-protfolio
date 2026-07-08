import { Project, Skill, TechItem } from './types';

export const PERSONAL_INFO = {
  name: 'Shihab',
  title: 'Web Developer & Blockchain Builder',
  subtitle: 'Building High-Performance Web & Web3 Experiences',
  avatar: 'https://i.ibb.co/mCK0sB61/Chat-GPT-Image-Jul-2-2026-09-53-17-AM.png',
  location: 'Global / Remote',
  email: 'ezkillsx@gmail.com', // User's email from metadata
  tagline: 'Bridging the speed of modern frontend frameworks with the decentralized architecture of Web3.',
  bio: 'I am a passionate Full Stack Developer and Blockchain Engineer dedicated to crafting immersive, responsive, and secure digital experiences. Over the past few years, I have specialized in building robust client-side applications with React and integrating decentralized protocols (Solidity, Ethers.js, Web3). I thrive at the intersection of aesthetic design and complex logical architectures.',
  socials: {
    github: 'https://github.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com'
  },
  stats: [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Completed', value: '25+' },
    { label: 'Web3 Integrations', value: '12+' },
    { label: 'Happy Clients', value: '100%' }
  ]
};

export const PROJECTS: Project[] = [
  {
    id: 'aetherdex',
    title: 'AetherDex - Decentralized AMM Protocols',
    description: 'A next-generation Decentralized Exchange (DEX) built on Ethereum with custom Solidity smart contracts. Features high-efficiency swaps, liquidity pooling, dynamic fees, and cross-chain bridging adapters.',
    image: '/src/assets/images/project_web3_1782965654674.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    tags: ['Solidity', 'Web3.js', 'React', 'Hardhat', 'Tailwind CSS'],
    category: 'Web3',
    featured: true
  },
  {
    id: 'nova-analytics',
    title: 'Nova Analytics - AI Predictive SaaS Platform',
    description: 'An AI-powered SaaS analytical interface visualizing high-frequency user engagement metrics and server telemetry. Integrated with custom server-side Gemini API modules for predictive bottleneck mapping.',
    image: '/src/assets/images/project_saas_1782965668859.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    tags: ['React 19', 'Express', 'Gemini API', 'D3.js', 'TypeScript', 'Tailwind'],
    category: 'SaaS',
    featured: true
  },
  {
    id: 'stellar-canvas',
    title: 'Stellar Canvas - Fluid Interactive Web Engine',
    description: 'A supercharged, high-performance portfolio shell featuring fluid physics-based motion paths, custom mouse trails, and modular glassmorphism layout components with 60 FPS transitions.',
    image: '/src/assets/images/project_frontend_1782965679214.jpg',
    liveUrl: '#',
    githubUrl: 'https://github.com',
    tags: ['React 19', 'Vite', 'Motion/React', 'Tailwind v4', 'Lucide Icons'],
    category: 'Frontend',
    featured: true
  }
];

export const TECH_STACK: TechItem[] = [
  { name: 'HTML5', icon: 'Html', color: 'text-red-500', category: 'frontend' },
  { name: 'CSS3', icon: 'Css', color: 'text-blue-500', category: 'frontend' },
  { name: 'JavaScript', icon: 'Js', color: 'text-yellow-500', category: 'frontend' },
  { name: 'React', icon: 'React', color: 'text-cyan-400', category: 'frontend' },
  { name: 'Node.js', icon: 'Node', color: 'text-green-500', category: 'backend' },
  { name: 'Ethereum', icon: 'Ethereum', color: 'text-purple-400', category: 'blockchain' },
  { name: 'Solidity', icon: 'Solidity', color: 'text-indigo-400', category: 'blockchain' },
  { name: 'Web3.js', icon: 'Web3', color: 'text-sky-400', category: 'blockchain' }
];

export const SKILLS: Skill[] = [
  { name: 'Frontend Development (React, TS, Tailwind)', level: 95, category: 'Frontend' },
  { name: 'Smart Contract Coding & Auditing (Solidity)', level: 88, category: 'Blockchain' },
  { name: 'Web3 Client Integrations (Ethers, Web3.js)', level: 90, category: 'Blockchain' },
  { name: 'Backend Services (Node.js, Express, REST APIs)', level: 85, category: 'Backend' },
  { name: 'State Management (Redux, Context, Zustand)', level: 92, category: 'Frontend' },
  { name: 'DevOps & Tooling (Git, Docker, Hardhat)', level: 80, category: 'Tools' }
];
