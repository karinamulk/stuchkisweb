import "./A_Button.css";

const Button = ({
  title = "",
  onClick = () => null,
  type = "primary",
  icon = null,
  isDisabled,
  ...restProps
}) => {
  const getType = () => {
    switch (type) {
      case "primary": {
        return "primaryBtn";
      }
      case "secondary": {
        return "secondaryBtn";
      }
      case "tertiary": {
        return "tertiaryBtn";
      }
      case "quatenary": {
        return "quatenaryBtn";
      }
      default: {
        return "primaryBtn";
      }
    }
  };
  return (
    <button
      className={`${getType()}`}
      style={{ ...restProps?.style, opacity: isDisabled ? 0.5 : 1 }}
      onClick={onClick}
    >
      <span>{title}</span>
      {icon && icon}
    </button>
  );
};
export default Button;
