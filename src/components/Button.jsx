
const Button = ({children, className, href, onClick, white, primary, px}) => {
    const classes = `btn ${white ? "text-white" : "text-color-primary "} ${className || ""} ${primary ? "bg-color-secondary hover:bg-s-9 active:bg-color-secondary" : ""}`
    const spanClasses = "relative z-10";

    const renderButton = () => (
        <button className={classes} onClick={onClick}>
          <span className={spanClasses}>{children}</span>
        </button>
      );

    const renderLink = () => (
        <a href={href} className={classes}>
            <span className={spanClasses}>{children}</span>
        </a>
      );

    return href ? renderLink() : renderButton();

}

export default Button;