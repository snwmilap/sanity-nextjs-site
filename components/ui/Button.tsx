import React from "react";

type Color = "primary" | "secondary" | "info" | "success" | "warning" | "error" | "neutral";
type ButtonVariant = "solid" | "outline" | "ghost" | "link" | "shadow" | "text";
type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";
type Radius = "full" | "lg" | "md" | "sm" | "none";
type IconPosition = "left" | "right";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  iconPosition?: IconPosition;
  radius?: Radius;
  color?: Color;
  className?: string;
  isLoading?: boolean;
  fullWidth?: boolean;
  loadingText?: string;
}

function combineClasses(...classes: (string | undefined | false | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      color = "primary",
      variant = "solid",
      size = "md",
      radius = "md",
      children,
      icon,
      iconPosition = "left",
      className = "",
      isLoading = false,
      fullWidth = false,
      loadingText,
      ...props
    },
    ref
  ) => {
    const baseClasses = "inline-flex items-center cursor-pointer gap-2 justify-center whitespace-nowrap transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-gray-900 disabled:pointer-events-none disabled:opacity-50";

    const sizeClasses = {
      xs: "h-6 px-2 text-xs font-medium",
      sm: "h-8 px-3 text-sm font-medium",
      md: "h-10 px-4 text-sm font-medium",
      lg: "h-12 px-6 text-base font-medium",
      xl: "h-14 px-8 text-lg font-medium",
    };

    const radiusClasses = {
      full: "rounded-full",
      lg: "rounded-lg",
      md: "rounded-md",
      sm: "rounded-sm",
      none: "rounded-none",
    };

    const getColorClasses = (color: Color, variant: ButtonVariant) => {
      const colorMap = {
        primary: {
          solid: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white dark:focus-visible:ring-blue-400",
          outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:border-blue-400 dark:text-blue-400 dark:hover:text-blue-50 dark:hover:bg-blue-500 dark:focus-visible:ring-blue-400",
          ghost: "text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:focus-visible:ring-blue-400",
          link: "text-blue-600 hover:underline p-0 h-auto focus-visible:ring-blue-500 dark:text-blue-400 dark:focus-visible:ring-blue-400",
          shadow: "bg-blue-600 text-white shadow-lg hover:shadow-xl hover:bg-blue-700 focus-visible:ring-blue-500 dark:bg-blue-700 dark:hover:bg-blue-800 dark:shadow-gray-800/30 dark:focus-visible:ring-blue-400",
          text: "text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-500 dark:text-blue-400 dark:hover:bg-blue-900/20 dark:focus-visible:ring-blue-400",
        },
        secondary: {
          solid: "bg-gray-600 text-white hover:bg-gray-700 focus-visible:ring-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-900 dark:focus-visible:ring-gray-400",
          outline: "border-2 border-gray-600 text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800/20 dark:focus-visible:ring-gray-400",
          ghost: "text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800/20 dark:focus-visible:ring-gray-400",
          link: "text-gray-600 hover:underline p-0 h-auto focus-visible:ring-gray-500 dark:text-gray-300 dark:focus-visible:ring-gray-400",
          shadow: "bg-gray-600 text-white shadow-lg hover:shadow-xl hover:bg-gray-700 focus-visible:ring-gray-500 dark:bg-gray-300 dark:hover:bg-gray-400 dark:text-gray-900 dark:shadow-gray-800/30 dark:focus-visible:ring-gray-400",
          text: "text-gray-600 hover:bg-gray-50 focus-visible:ring-gray-500 dark:text-gray-300 dark:hover:bg-gray-800/20 dark:focus-visible:ring-gray-400",
        },
        info: {
          solid: "bg-blue-500 text-white hover:bg-blue-600 focus-visible:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white dark:focus-visible:ring-blue-300",
          outline: "border-2 border-blue-500 text-blue-500 hover:bg-blue-50 focus-visible:ring-blue-400 dark:border-blue-300 dark:text-blue-300 dark:hover:bg-blue-900/20 dark:focus-visible:ring-blue-300",
          ghost: "text-blue-500 hover:bg-blue-50 focus-visible:ring-blue-400 dark:text-blue-300 dark:hover:bg-blue-900/20 dark:focus-visible:ring-blue-300",
          link: "text-blue-500 hover:underline p-0 h-auto focus-visible:ring-blue-400 dark:text-blue-300 dark:focus-visible:ring-blue-300",
          shadow: "bg-blue-500 text-white shadow-lg hover:shadow-xl hover:bg-blue-600 focus-visible:ring-blue-400 dark:bg-blue-600 dark:hover:bg-blue-700 dark:shadow-gray-800/30 dark:focus-visible:ring-blue-300",
          text: "text-blue-500 hover:bg-blue-50 focus-visible:ring-blue-400 dark:text-blue-300 dark:hover:bg-blue-900/20 dark:focus-visible:ring-blue-300",
        },
        success: {
          solid: "bg-green-600 text-white hover:bg-green-700 focus-visible:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800 dark:text-white dark:focus-visible:ring-green-400",
          outline: "border-2 border-green-600 text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:border-green-400 dark:text-green-400 dark:hover:bg-green-900/20 dark:focus-visible:ring-green-400",
          ghost: "text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:text-green-400 dark:hover:bg-green-900/20 dark:focus-visible:ring-green-400",
          link: "text-green-600 hover:underline p-0 h-auto focus-visible:ring-green-500 dark:text-green-400 dark:focus-visible:ring-green-400",
          shadow: "bg-green-600 text-white shadow-lg hover:shadow-xl hover:bg-green-700 focus-visible:ring-green-500 dark:bg-green-700 dark:hover:bg-green-800 dark:shadow-gray-800/30 dark:focus-visible:ring-green-400",
          text: "text-green-600 hover:bg-green-50 focus-visible:ring-green-500 dark:text-green-400 dark:hover:bg-green-900/20 dark:focus-visible:ring-green-400",
        },
        warning: {
          solid: "bg-yellow-500 text-black hover:bg-yellow-600 focus-visible:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-white dark:focus-visible:ring-yellow-500",
          outline: "border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-400 dark:border-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20 dark:focus-visible:ring-yellow-500",
          ghost: "text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20 dark:focus-visible:ring-yellow-500",
          link: "text-yellow-600 hover:underline p-0 h-auto focus-visible:ring-yellow-400 dark:text-yellow-400 dark:focus-visible:ring-yellow-500",
          shadow: "bg-yellow-500 text-black shadow-lg hover:shadow-xl hover:bg-yellow-600 focus-visible:ring-yellow-400 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:text-white dark:shadow-gray-800/30 dark:focus-visible:ring-yellow-500",
          text: "text-yellow-600 hover:bg-yellow-50 focus-visible:ring-yellow-400 dark:text-yellow-400 dark:hover:bg-yellow-900/20 dark:focus-visible:ring-yellow-500",
        },
        error: {
          solid: "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 dark:text-white dark:focus-visible:ring-red-400",
          outline: "border-2 border-red-600 text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:border-red-400 dark:text-red-400 dark:hover:bg-red-900/20 dark:focus-visible:ring-red-400",
          ghost: "text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:text-red-400 dark:hover:bg-red-900/20 dark:focus-visible:ring-red-400",
          link: "text-red-600 hover:underline p-0 h-auto focus-visible:ring-red-500 dark:text-red-400 dark:focus-visible:ring-red-400",
          shadow: "bg-red-600 text-white shadow-lg hover:shadow-xl hover:bg-red-700 focus-visible:ring-red-500 dark:bg-red-700 dark:hover:bg-red-800 dark:shadow-gray-800/30 dark:focus-visible:ring-red-400",
          text: "text-red-600 hover:bg-red-50 focus-visible:ring-red-500 dark:text-red-400 dark:hover:bg-red-900/20 dark:focus-visible:ring-red-400",
        },
        neutral: {
          solid: "bg-gray-800 text-white hover:bg-gray-900 focus-visible:ring-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900 dark:focus-visible:ring-gray-400",
          outline: "border-2 border-gray-800 text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-700 dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-800/20 dark:focus-visible:ring-gray-400",
          ghost: "text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-700 dark:text-gray-200 dark:hover:bg-gray-800/20 dark:focus-visible:ring-gray-400",
          link: "text-gray-800 hover:underline p-0 h-auto focus-visible:ring-gray-700 dark:text-gray-200 dark:focus-visible:ring-gray-400",
          shadow: "bg-gray-800 text-white shadow-lg hover:shadow-xl hover:bg-gray-900 focus-visible:ring-gray-700 dark:bg-gray-200 dark:hover:bg-gray-300 dark:text-gray-900 dark:shadow-gray-800/30 dark:focus-visible:ring-gray-400",
          text: "text-gray-800 hover:bg-gray-100 focus-visible:ring-gray-700 dark:text-gray-200 dark:hover:bg-gray-800/20 dark:focus-visible:ring-gray-400",
        },
      };

      return colorMap[color][variant];
    };

    const LoadingSpinner = () => (
      <svg 
        className="animate-spin -ml-1 mr-2 h-4 w-4" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 24 24"
      >
        <circle 
          className="opacity-25" 
          cx="12" 
          cy="12" 
          r="10" 
          stroke="currentColor" 
          strokeWidth="4"
        ></circle>
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    );

    const buttonClasses = combineClasses(
      baseClasses,
      sizeClasses[size],
      radiusClasses[radius],
      getColorClasses(color, variant),
      fullWidth ? "w-full" : "",
      className
    );

    return (
      <button
        ref={ref}
        className={buttonClasses}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? (
          <>
            <LoadingSpinner />
            {loadingText || children}
          </>
        ) : (
          <>
            {icon && iconPosition === "left" && <span className="flex-shrink-0">{icon}</span>}
            {children && <span className="relative">{children}</span>}
            {icon && iconPosition === "right" && <span className="flex-shrink-0">{icon}</span>}
          </>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;