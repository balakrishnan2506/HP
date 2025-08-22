import { Button } from "./Button.styles";

interface StyledButtonProps {
  children: React.ReactNode;
}

function StyledButton({ children, ...props }: StyledButtonProps) {
  return <Button {...props}>{children}</Button>;
}

export default StyledButton;
