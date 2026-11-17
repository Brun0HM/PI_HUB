function InputPrimary({ type, placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full h-16 rounded-lg border border-border bg-surface px-4 py-2
      text-sm text-text-primary placeholder:text-text-secondary font-semibold transition-colors duration-300
      focus:outline-none focus:bg-surface-raised"
    ></input>
  );
}

export default InputPrimary;
