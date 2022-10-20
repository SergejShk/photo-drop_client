import { Button } from "./CommonButton.style";

interface IProps {
  children: React.ReactNode;
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean | undefined;
}

const CommonButton: React.FC<IProps> = ({
  children,
  type = "button",
  disabled = false,
}) => {
  return (
    <Button type={type} disabled={disabled}>
      {children}
    </Button>
  );
};

export default CommonButton;
