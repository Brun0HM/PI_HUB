function ButtonOutline({ text, className = "", ...props }) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center rounded-lg border border-primary bg-bg px-4 py-2 text-sm font-medium text-text-primary transition-colors duration-300 ease-in-out hover:bg-primary-hover active:bg-primary-dark ${className}`}
      {...props}
    >
      {text}
    </button>
  );
}

export default ButtonOutline;
