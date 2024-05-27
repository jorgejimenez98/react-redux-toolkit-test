type ButtonSize = "xl" | "lg" | "md" | "sm"
type ButtonType = "button" | "submit"
type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning" | "info" | "light" | "dark" | "link"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    size?: ButtonSize;
    text?: string;
    buttonType?: ButtonType
    variant?: ButtonVariant;
    block?: boolean;
    disabled?: boolean;
    outline?: boolean;
    centered?: boolean;
    onClick?: () => void;
    className?: string
    children?: React.ReactNode;
}