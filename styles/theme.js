import { theme } from "@chakra-ui/core";

const breakpoints = ["300px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

export const CustomTheme = {
  ...theme,
  breakpoints
};
