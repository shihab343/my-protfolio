export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  tags: string[];
  category: 'Web3' | 'SaaS' | 'Frontend';
  featured: boolean;
}

export interface Skill {
  name: string;
  level: number; // 0 to 100
  category: 'Frontend' | 'Backend' | 'Blockchain' | 'Tools';
}

export interface TechItem {
  name: string;
  icon: string; // Key in lucide-react or special SVG tag
  color: string;
  category: 'frontend' | 'backend' | 'blockchain' | 'tools';
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatar: string;
}
