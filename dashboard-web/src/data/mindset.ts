export interface MindsetItem {
    id: number;
    question: string;
    thinking: string;
    habit: string;
}

export const mindsetData: MindsetItem[] = [
    {
        id: 1,
        question: 'How do I approach a new feature?',
        thinking:
            'I first try to understand the business intent behind the feature before thinking about code or UI.',
        habit:
            'I clarify edge cases early and design the UI flow on paper before touching the code.',
    },
    {
        id: 2,
        question: 'How do I debug complex issues?',
        thinking:
            'I avoid guessing. I rely on isolation, logging, and understanding the lifecycle of the system.',
        habit:
            'I reproduce the issue locally, narrow down the scope, and fix the root cause instead of symptoms.',
    },
    {
        id: 3,
        question: 'How do I think about performance?',
        thinking:
            'Performance is not about premature optimization, but about removing unnecessary work.',
        habit:
            'I measure first, then optimize rendering, memoization, and data flow where it actually matters.',
    },
    {
        id: 4,
        question: 'How do I work with legacy systems?',
        thinking:
            'Legacy code is a business asset, not a problem. Rewriting blindly is risky.',
        habit:
            'I improve incrementally, isolate new code, and modernize without breaking existing flows.',
    },
];
