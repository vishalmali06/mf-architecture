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
      title: "Micro-Frontend Modernization in Enterprise IoT Platform",
      context:
        "Hitachi | IoT Platform | Large-scale enterprise application",
      problem:
        "The existing monolithic frontend made scaling, independent releases, and team ownership difficult.",
      approach: [
        "Designed Qiankun-based micro-frontend architecture",
        "Defined shared contracts for state, routing, and authentication",
        "Enabled independent builds and deployments for multiple apps",
      ],
      impact:
        "Improved application scalability by 40% and enabled faster, safer feature delivery across teams.",
      tags: ["React", "TypeScript", "Qiankun", "Micro-Frontend", "Enterprise"],
    },
  
    {
      id: 2,
      title: "High-Performance Supply Chain Dashboards",
      context:
        "Hitachi | Supply Chain Optimization (SCO)",
      problem:
        "Data-heavy dashboards suffered from slow load times and redundant API calls.",
      approach: [
        "Optimized data fetching using SWR caching strategy",
        "Reduced unnecessary re-renders with memoization and state isolation",
        "Refactored complex chart components into reusable modules",
      ],
      impact:
        "Reduced redundant API calls by 50% and significantly improved dashboard performance and UX.",
      tags: ["React", "Next.js", "SWR", "Performance", "Charts"],
    },
  
    {
      id: 3,
      title: "Enterprise Form Reliability & Validation Improvements",
      context:
        "IoT & Enterprise Admin Panels",
      problem:
        "Complex multi-step forms failed validation on first interaction, confusing users and increasing production issues.",
      approach: [
        "Deep-dived into Formik lifecycle behavior",
        "Handled server-side validation errors consistently",
        "Improved visual feedback and validation state handling",
      ],
      impact:
        "Reduced production bugs by 30% and improved overall form usability.",
      tags: ["Formik", "Yup", "UX", "Validation", "Enterprise"],
    },
  
    {
      id: 4,
      title: "React Architecture Leadership for Telecom Systems",
      context:
        "Amdocs | AT&T, Comcast | Telecom domain",
      problem:
        "Legacy UI architecture caused slow development cycles and high maintenance cost.",
      approach: [
        "Led frontend architecture decisions and best practices",
        "Migrated legacy Flex applications to modern React architecture",
        "Introduced testing standards using Jest and RTL",
      ],
      impact:
        "Improved task efficiency by 40% and achieved 95% sprint predictability for the team.",
      tags: ["React", "Redux", "Jest", "RTL", "Telecom"],
    },
  
    {
      id: 5,
      title: "Analytics Dashboards for Logistics & Storage Systems",
      context:
        "Persistent Systems | DHL, Seagate",
      problem:
        "Operational dashboards lacked insights and were slow with large datasets.",
      approach: [
        "Designed analytics dashboards using Redux and charting libraries",
        "Optimized async flows and component lifecycle",
        "Collaborated across frontend and Node.js backend services",
      ],
      impact:
        "Reduced shipping costs by 30% and improved page load time by 40%.",
      tags: ["React", "Redux", "Highcharts", "Plotly", "Node.js"],
    },
  
    {
      id: 6,
      title: "Government-Scale Systems & Workflow Automation",
      context:
        "National Informatics Center (NIC) | Govt. of India",
      problem:
        "Manual treasury workflows caused inefficiencies and delayed reporting.",
      approach: [
        "Led Treasurynet implementation across 3 Indian states",
        "Developed full-stack web features and Android apps",
        "Integrated REST APIs for real-time data collection",
      ],
      impact:
        "Automated treasury operations and improved data accuracy across government systems.",
      tags: ["AngularJS", "Android", "REST APIs", "MySQL", "Government"],
    },
  ];
  