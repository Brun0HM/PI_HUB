function StatusBar({ label, value, total, color }) {
  const percentage = total > 0 ? (value / total) * 100 : 0;

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between text-sm">
        <span className="text-text-secondary">{label}</span>
        <span style={{ color }}>
          {Math.round(percentage)}%
          <span className="ml-2 text-text-secondary">({value})</span>
        </span>
      </div>

      <div
        role="progressbar"
        aria-label={label}
        aria-valuenow={Math.round(percentage)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuetext={`${Math.round(percentage)}% (${value} de ${total})`}
        className="h-2 w-full overflow-hidden rounded-full bg-border"
      >
        <div
          className="h-full rounded-full transition-[width] duration-500"
          style={{
            width: `${Math.min(percentage, 100)}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export default StatusBar;
