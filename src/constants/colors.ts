export const COLORS = {
  primary: "#1976D2",
  secondary: "#FF9800",
  background: "#F5F5F5",
  error: "#D32F2F",
  success: "#388E3C",
  text: {
    primary: "#212121",
    secondary: "#757575",
    disabled: "#9E9E9E",
  },
  card: {
    background: "#FFFFFF",
    shadow: "#000000",
  },
} as const;

export type ColorKeys = keyof typeof COLORS;
