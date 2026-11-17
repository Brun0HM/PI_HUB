import setinha from "../../assets/Setinha.svg";

function InputDropDown({ value, onChange, options = [], placeholder }) {
  return (
    <div className="relative w-full">
      <select
        value={value}
        onChange={onChange}
        className="h-16 w-full appearance-none rounded-lg border border-border
          bg-surface px-4 py-2 pr-12 text-sm font-semibold
          text-text-primary focus:bg-surface-raised focus:outline-none transition-colors duration-300"
      >
        <option value="" disabled>
          {placeholder}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <img
        src={setinha}
        alt=""
        className="pointer-events-none absolute right-4 top-1/2
          h-4 w-4 -translate-y-1/2"
      />
    </div>
  );
}

export default InputDropDown;
