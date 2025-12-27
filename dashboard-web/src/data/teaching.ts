export interface TeachingItem {
  emoji: string;
  title: string;
  description: string;
  highlights: string[];
}

export const teachingData: TeachingItem[] = [
  {
    emoji: "👨‍🏫",
    title: "Mentoring Engineers in the Workplace",
    description:
      "Actively mentored junior and mid-level engineers across multiple teams in enterprise environments.",
    highlights: [
      "Guided team members on React best practices and scalable UI patterns",
      "Reviewed PRs with a focus on performance, readability, and long-term maintainability",
      "Helped engineers transition from task-based coding to system-level thinking",
    ],
  },
  {
    emoji: "🧠",
    title: "Knowledge Sharing & Architecture Discussions",
    description:
      "Believed in growing teams through shared learning and technical discussions.",
    highlights: [
      "Conducted internal knowledge-sharing sessions on React architecture and performance",
      "Discussed real-world trade-offs in micro-frontends and enterprise UI design",
      "Shared learnings from production issues to prevent repeat mistakes",
    ],
  },
  {
    emoji: "✍️",
    title: "Learning in Public & Community Contribution",
    description:
      "Consistently shared frontend and full-stack insights beyond the organization.",
    highlights: [
      "Posted regular LinkedIn content on MERN stack and frontend best practices",
      "Shared quick tips from real production challenges and solutions",
      "Learned continuously from industry experts and applied insights in projects",
    ],
  },
  {
    emoji: "🌱",
    title: "Continuous Learning Mindset",
    description:
      "Teaching is tightly coupled with learning — staying relevant requires both.",
    highlights: [
      "Learned from senior architects and system designers in the organization",
      "Explored backend architecture to become a better frontend architect",
      "Applied new learnings immediately into production-grade systems",
    ],
  },
];
