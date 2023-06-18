import "./A_ButtonEllipse.css";

const ButtonEllipse = ({
  onClick = () => null,
  type = "small",
  icon = null,
  isDisabled,
  ...restProps
}) => {
  const getType = () => {
    switch (type) {
      case "small": {
        return "smallBtn";
      }
      case "big": {
        return "bigBtn";
      }
      default: {
        return "smallBtn";
      }
    }
  };
  
  return (
    <button
      className={`${getType()}`}
      style={{ ...restProps?.style, opacity: isDisabled ? 0.5 : 1 }}
      onClick={onClick}
    >
      {icon && icon}
    </button>
  );
};
export default ButtonEllipse;
