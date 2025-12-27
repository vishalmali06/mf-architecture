import { loadMicroApp, type MicroApp } from "qiankun";
import { MICRO_APPS, isProd } from "../config/microApps";
import type { MicroAppName } from "../types/micro";


export function loadQiankunApp(
    name: MicroAppName,
    container: HTMLElement
): MicroApp {
    const app = MICRO_APPS[name];
    const entry = isProd ? app.entry.prod : app.entry.local;

    return loadMicroApp(
        {
            name: app.name,
            entry,
            container,
            props: { base: `/${app.name}` },
        },
        {
            sandbox: { experimentalStyleIsolation: true },
            singular: false,
            prefetch: false,
        }
    );
}
