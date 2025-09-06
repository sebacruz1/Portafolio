// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
    // 0) Ignora artefactos
    {
        ignores: ["dist/**", "node_modules/**"],
    },

    // 1) Reglas base de JS (forma correcta en flat config)
    js.configs.recommended,

    // 2) Reglas recomendadas de React
    pluginReact.configs.flat.recommended,

    // 3) Reglas para tu código de app (browser + JSX)
    {
        files: ["**/*.{js,jsx,ts,tsx}"],
        languageOptions: {
            globals: globals.browser,
            parserOptions: { ecmaFeatures: { jsx: true } },
        },
        settings: {
            react: { version: "detect" },
        },
        rules: {
            // tu indent de 4 espacios
            indent: ["error", 4],
            // en React 17+ / Vite no hace falta importar React
            "react/react-in-jsx-scope": "off",
            // si no usas PropTypes (o migrarás a TS), desactívalo
            "react/prop-types": "off",
        },
    },

    // 4) Overrides para archivos Node (vite.config.*, etc.)
    {
        files: ["vite.config.{js,ts}", "**/*.config.{js,ts}", "scripts/**/*.{js,ts}"],
        languageOptions: {
            globals: globals.node, // habilita __dirname, process, etc.
        },
    },
]);

