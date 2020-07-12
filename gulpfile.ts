import { src, dest } from "gulp";
import { createProject } from "gulp-typescript";

const tsProject = createProject("tsconfig.json");

export default () =>
  src("src/**/*.{ts,tsx}").pipe(tsProject()).pipe(dest("lib/"));
