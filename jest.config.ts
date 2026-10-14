import type { Config } from "jest";
import nextJest from "next/jest.js";

// next/jest wires up SWC transforms, the "@/*" path alias from tsconfig,
// CSS/image stubs and next/font — so no babel or ts-jest config is needed.
const createJestConfig = nextJest({ dir: "./" });

const config: Config = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testMatch: ["**/__tests__/**/*.test.[jt]s?(x)"],
};

export default createJestConfig(config);
