export interface ProjectItem {
    id: number;
    title: string;
    shortDesc: string;
    highlights: string[];
    tech: string[];
    link?: string;
  }
  
  export const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Enterprise Risk Dashboard',
      shortDesc:
        'A large-scale dashboard used for monitoring supply chain risks.',
      highlights: [
        'Handled complex state and data flow',
        'Optimized performance for heavy charts',
        'Used modular, reusable components',
      ],
      tech: ['React', 'TypeScript', 'Redux', 'Charts'],
    },
    {
      id: 2,
      title: 'Micro-Frontend Integration',
      shortDesc:
        'Modern React app integrated into a legacy production system.',
      highlights: [
        'Independent deployment',
        'Legacy-safe integration',
        'Gradual modernization approach',
      ],
      tech: ['React', 'Qiankun', 'Vite'],
    },
    {
      id: 3,
      title: 'Enterprise Forms Platform',
      shortDesc:
        'Reusable form framework with validation and UX improvements.',
      highlights: [
        'Server-side error handling',
        'Better validation feedback',
        'Improved user confidence',
      ],
      tech: ['React', 'Formik', 'UX'],
    },
  ];
  