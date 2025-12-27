export interface MindsetItem {
    id: number;
    question: string;
    thinking: string;
    habit: string;
  }
  
  export const mindsetData: MindsetItem[] = [
    {
      id: 1,
      question: "Will this scale with team size and application growth?",
      thinking:
        "I evaluate how a decision impacts long-term scalability — not just code size, but team autonomy, deployments, and maintenance.",
      habit:
        "I prefer modular architectures, micro-frontends, and clear ownership boundaries in large systems.",
    },
    {
      id: 2,
      question: "How does this affect real users in production?",
      thinking:
        "Performance, clarity, and reliability matter more than theoretical purity. A fast, predictable UI builds trust.",
      habit:
        "I actively measure render performance, reduce API chatter, and simplify UX flows in complex dashboards.",
    },
    {
      id: 3,
      question: "Can another engineer easily understand this in 6 months?",
      thinking:
        "Readable, well-structured code is a feature. I value clarity over cleverness.",
      habit:
        "I enforce naming conventions, logical folder structures, and meaningful abstractions.",
    },
    {
      id: 4,
      question: "Is the solution secure and future-proof?",
      thinking:
        "Enterprise systems demand secure authentication, authorization, and extensibility from day one.",
      habit:
        "I integrate proven identity platforms (OAuth, Keycloak) and design with multi-tenant needs in mind.",
    },
    {
      id: 5,
      question: "How can this help the team grow?",
      thinking:
        "Good architecture enables engineers to move faster with confidence.",
      habit:
        "I mentor team members, document decisions, and share best practices through reviews and discussions.",
    },
    {
      id: 6,
      question: "Are we solving the right problem?",
      thinking:
        "I challenge requirements early to avoid over-engineering or misaligned solutions.",
      habit:
        "I collaborate closely with product, backend, and DevOps teams before locking technical decisions.",
    },
  ];
  