// Interface for imperative routing on homepage
export interface PageRouteProps {
  pageRoute: string;
}

// Interface for Button Component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Interface for Layout Component
export interface LayoutProps {
  children: React.ReactNode;
}
