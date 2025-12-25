import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{ts,tsx}",
    ],
    plugins: [daisyui],
};

export default config;
