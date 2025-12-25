export interface ExperienceItem {
    id: number;
    title: string;
    context: string;
    problem: string;
    approach: string[];
    impact: string;
    tags: string[];
}

export const experiences: ExperienceItem[] = [
    {
        id: 1,
        title: 'Modern React App inside Legacy System',
        context: 'Large enterprise product with legacy React 15 codebase',
        problem:
            'The existing application could not scale and adding new features was risky.',
        approach: [
            'Introduced micro-frontend architecture',
            'Integrated React + Vite app using Qiankun',
            'Ensured independent deployment without breaking legacy flows',
        ],
        impact:
            'Enabled faster feature delivery and gradual modernization without downtime.',
        tags: ['React', 'Micro-Frontend', 'Qiankun', 'Enterprise'],
    },
    {
        id: 2,
        title: 'Complex Dashboard Performance Optimization',
        context: 'Data-heavy dashboards with charts and tables',
        problem:
            'UI became slow due to frequent re-renders and large datasets.',
        approach: [
            'Optimized state management and memoization',
            'Split heavy components into logical subcomponents',
            'Improved rendering strategy for charts',
        ],
        impact:
            'Reduced load time significantly and improved user experience.',
        tags: ['Performance', 'Charts', 'Optimization', 'React'],
    },
    {
        id: 3,
        title: 'Enterprise Form Validation & UX Fixes',
        context: 'Multi-step forms with server-side validation',
        problem:
            'Validation did not trigger correctly on first interaction.',
        approach: [
            'Analyzed Formik lifecycle',
            'Handled server-side errors gracefully',
            'Improved visual feedback for users',
        ],
        impact:
            'Clear validation flow and reduced user confusion.',
        tags: ['Formik', 'UX', 'Validation'],
    },
];
