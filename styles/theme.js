import { theme } from "@chakra-ui/core";

const breakpoints = ["300px", "768px", "1024px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];

export const CustomTheme = {
  ...theme,
  breakpoints
};
