import { useMDXComponents as getDocsMDXComponents } from "nextra-theme-docs";
import { StudyFigure } from "./components/study-guide/StudyFigure";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useMDXComponents(components: Record<string, any>) {
  return getDocsMDXComponents({
    ...components,
    StudyFigure,
  });
}
