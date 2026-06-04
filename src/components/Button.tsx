import type { ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "light"
  | "dark"
  | "link";

interface Props {
  children: ReactNode;
  variant?: Variant;
  onButtonSelect?: () => void;
}

function Button({ children, variant = "primary", onButtonSelect }: Props) {
  const getButtonClass = () => {
    return "btn btn-" + variant;
  };

  return (
    <button className={getButtonClass()} onClick={onButtonSelect}>
      {children}
    </button>
  );
}

export default Button;
