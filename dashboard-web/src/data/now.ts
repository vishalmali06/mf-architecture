export interface NowItem {
    emoji: string;
    title: string;
    description: string;
    points: string[];
}

export const nowData: NowItem[] = [
    {
        emoji: '🎯',
        title: 'Becoming a Frontend Architect',
        description:
            'Actively shaping my mindset and skills towards frontend architecture.',
        points: [
            'Thinking beyond components into scalable UI systems',
            'Designing for long-term maintainability',
            'Balancing performance, DX, and UX',
        ],
    },
    {
        emoji: '🤝',
        title: 'Learning From Senior Architects',
        description:
            'Working closely with experienced architects inside the company.',
        points: [
            'Understanding real-world architectural trade-offs',
            'Learning decision-making in large-scale applications',
            'Observing how systems evolve over time',
        ],
    },
    {
        emoji: '🔄',
        title: 'Expanding Into Backend & System Design',
        description:
            'Strengthening backend understanding to become a better frontend architect.',
        points: [
            'API design and contracts',
            'Auth, roles, and permissions flow',
            'Performance and scalability basics',
        ],
    },
];
