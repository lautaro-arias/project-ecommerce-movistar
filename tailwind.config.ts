import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
    "node_modules/flowbite-react/lib/esm/**/*.css", 
    'node_modules/preline/dist/*.js',
  ],

  plugins: [
    require("daisyui"),
    require('flowbite/plugin'),
    require('preline/plugin'),
  ],
};
export default config;
