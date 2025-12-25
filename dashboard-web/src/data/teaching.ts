export interface TeachingItem {
    title: string;
    description: string;
    highlights: string[];
    emoji: string;
  }
  
  export const teachingData: TeachingItem[] = [
    {
      emoji: '🧑‍🏫',
      title: 'Mentoring Inside the Company',
      description:
        'Actively help teammates and juniors grow by sharing real-world knowledge.',
      highlights: [
        'Guided teammates during complex UI & architecture challenges',
        'Helped juniors understand production-level React patterns',
        'Encouraged clean code, readability, and debugging mindset',
      ],
    },
    {
      emoji: '✍️',
      title: 'Sharing Knowledge on LinkedIn',
      description:
        'Regularly post short, practical insights based on real project experience.',
      highlights: [
        'MERN & Full-stack quick tips',
        'Common mistakes and best practices',
        'Daily learnings simplified for others',
      ],
    },
    {
      emoji: '📚',
      title: 'Learning From the Best',
      description:
        'Continuously learn from experienced developers and educators in the market.',
      highlights: [
        'Follow industry experts and creators',
        'Experiment with new ideas in side projects',
        'Convert learning into practical implementation',
      ],
    },
  ];
  