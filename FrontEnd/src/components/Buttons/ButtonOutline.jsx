import { Link } from "react-router";

const classes =
  "inline-flex items-center justify-center rounded-lg border border-primary bg-bg px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-300 ease-in-out hover:bg-primary-hover active:bg-primary-dark";

function ButtonOutline({ text, to, className = "", ...props }) {
  if (to) {
    return (
      <Link to={to} className={`${classes} ${className}`} {...props}>
        {text}
      </Link>
    );
  }

  return (
    <button type="button" className={`${classes} ${className}`} {...props}>
      {text}
    </button>
  );
}

export default ButtonOutline;
