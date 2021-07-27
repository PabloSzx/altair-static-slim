import { defineConfig } from "tsup";

export default defineConfig({
  entryPoints: ["src/index.ts"],
  target: "node12",
  outDir: "build",
  splitting: false,
  clean: true,
  onSuccess: "pnpm build",
});
