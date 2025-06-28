import "./styles.scss";

function Button({ 
  children, 
  variant = "primary", 
  onClick, 
  type = "button",
  className = "",
  ...props 
}) {
  return (
    <button
      type={type}
      className={`button button--${variant} ${className}`.trim()}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;