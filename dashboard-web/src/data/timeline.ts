export interface TimelineItem {
  phase: string;
  period: string;
  description: string;
  highlights?: string[];
}

export const timeline: TimelineItem[] = [
  {
    phase: 'Early Career',
    period: '2014–2018',
    description:
      'Senior Programmer at National Informatics Center (Govt. of India). Led full-stack web features, Android apps for real-time data collection, and automated treasury workflows across 3 states.',
    highlights: ['Full-stack web development', 'Android SDK', 'MySQL', 'REST APIs', 'Data accuracy & automation'],
  },
  {
    phase: 'Logistics & Analytics',
    period: '2018–2021',
    description:
      'Lead Software Developer at Persistent Systems. Delivered 11-module SPA, analytics dashboards, and optimized shipping operations.',
    highlights: ['React.js & Redux', 'Node.js & Express', 'MongoDB', 'Highcharts & Plotly.js', 'Cost reduction: 30%'],
  },
  {
    phase: 'Telecom & Enterprise React',
    period: '2021–2024',
    description:
      'Lead Software Engineer at Amdocs India. Led 5-member frontend team, migrated legacy Flex apps to modern React architecture, introduced testing standards, and improved team delivery predictability to 95%.',
    highlights: ['React.js, Redux, REST APIs', 'Performance optimization', 'Jest & RTL', 'Agile/Scrum'],
  },
  {
    phase: 'Architect & Micro-Frontend',
    period: '2024–Present',
    description:
      'Associate Software Architect at Hitachi Vantara. Designed scalable frontend architecture for enterprise applications, implemented micro-frontend structure with Qiankun, optimized UI performance, and mentored teams for high-quality delivery.',
    highlights: ['React.js & Next.js', 'Qiankun Micro-Frontends', 'AWS & Azure DevOps', 'Keycloak SSO', 'Enterprise UI optimization'],
  },
];

  