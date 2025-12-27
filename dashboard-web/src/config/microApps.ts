import type { MicroAppName } from "../types/micro";


export const MICRO_APPS: Record<
    MicroAppName,
    { name: MicroAppName; entry: { local: string; prod: string } }
> = {
    app1: {
        name: "app1",
        entry: {
            local: "http://localhost:3001/",
            prod: "https://vishalmali.com/app1/",
        },
    },
    app2: {
        name: "app2",
        entry: {
            local: "http://localhost:3002/",
            prod: "https://vishalmali.com/app2/",
        },
    },
    devtinder: {
        name: "devtinder",
        entry: {
            local: "http://localhost:3003/",
            prod: "https://vishalmali.com/devtinder/",
        },
    },
};

export const isProd = window.location.hostname.endsWith("vishalmali.com");
