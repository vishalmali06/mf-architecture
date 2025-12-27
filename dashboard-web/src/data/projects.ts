export interface ProjectItem {
    id: number;
    title: string;
    shortDesc: string;
    highlights: string[];
    tech: string[];
}

export const projects: ProjectItem[] = [
    {
        id: 1,
        title: "Supply Chain Optimization Platform",
        shortDesc:
            "Enterprise-scale React & Next.js platform for monitoring, simulation, and risk analysis in global supply chains.",
        highlights: [
            "Designed scalable frontend architecture for large modular applications",
            "Built KPI Simulator, Risk Analysis, Shipment Planning & Admin modules",
            "Enabled multi-tenant customization for different enterprise clients",
            "Integrated OAuth 2.0 authentication using Microsoft Identity Platform",
        ],
        tech: [
            "React",
            "Next.js",
            "TypeScript",
            "Azure DevOps",
            "AWS",
            "OAuth 2.0",
        ],
    },
    {
        id: 2,
        title: "IoT Micro-Frontend Platform",
        shortDesc:
            "High-performance IoT dashboard with real-time tracking and independent app deployments.",
        highlights: [
            "Implemented Qiankun-based micro-frontend architecture",
            "Improved scalability and independent deployments by ~40%",
            "Optimized API calls using SWR caching strategy",
            "Integrated geospatial visualization using Leaflet maps",
        ],
        tech: [
            "React",
            "TypeScript",
            "Qiankun",
            "SWR",
            "Leaflet",
            "REST APIs",
            "Keycloak",
        ],
    },
    {
        id: 3,
        title: "Telecom Enterprise Workflow System",
        shortDesc:
            "Large-scale React application serving telecom operators like AT&T and Comcast.",
        highlights: [
            "Led frontend architecture and reusable component strategy",
            "Migrated legacy Flex apps to modern React architecture",
            "Improved task efficiency by ~40% through UI workflow redesign",
            "Established testing standards using Jest and RTL",
        ],
        tech: [
            "React",
            "Redux",
            "Jest",
            "RTL",
            "Jenkins",
            "CSS-in-JS",
        ],
    },
    {
        id: 4,
        title: "Analytics Dashboards for Logistics & Storage",
        shortDesc:
            "Data-driven dashboards enabling cost optimization and shipment insights.",
        highlights: [
            "Built 11-module SPA using React and Node.js",
            "Designed analytics dashboards with Highcharts and Plotly",
            "Reduced shipping costs by ~30% using data insights",
            "Optimized async flows and component lifecycle performance",
        ],
        tech: [
            "React",
            "Redux",
            "Node.js",
            "Express",
            "MongoDB",
            "Highcharts",
            "Plotly",
        ],
    },
];

