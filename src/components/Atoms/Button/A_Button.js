import "./A_Button.css";

const Button = ({
  title = "",
  onClick = () => null,
  type = "primary",
  typeText = "",
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
  const getTypeText = () => {
    switch (typeText) {
      case "colored": {
        return "coloredText";
      }
      default: {
        return "";
      }
    }
  };
  return (
    <button
      className={`${getType()}`}
      style={{ ...restProps?.style, opacity: isDisabled ? 0.5 : 1 }}
      onClick={onClick}
    >
      <span className={`${getTypeText()}`} >{title}</span>
      {icon && icon}
    </button>
  );
};
export default Button;
