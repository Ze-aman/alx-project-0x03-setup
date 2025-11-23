// Interface for imperative routing on the homepage
export interface PageRouteProps {
  pageRoute: string;
}

// Interface for the Button component
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: "red" | "blue" | "orange" | "green";
  action?: () => void;
}

// Interface for the Layout component
export interface LayoutProps {
  children: React.ReactNode;
}
