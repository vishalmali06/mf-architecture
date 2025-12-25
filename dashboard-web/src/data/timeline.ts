export interface TimelineItem {
    phase: string;
    period: string;
    description: string;
  }
  
  export const timeline: TimelineItem[] = [
    {
      phase: 'Foundation',
      period: '2013–2016',
      description: 'Built strong web fundamentals and problem-solving skills.',
    },
    {
      phase: 'Growth',
      period: '2017–2019',
      description: 'Worked on production apps and team collaboration.',
    },
    {
      phase: 'Enterprise Scale',
      period: '2020–2023',
      description: 'Large dashboards, performance, micro-frontends.',
    },
    {
      phase: 'Ownership',
      period: '2024–Present',
      description: 'Architecture decisions, mentoring, optimization.',
    },
  ];
  