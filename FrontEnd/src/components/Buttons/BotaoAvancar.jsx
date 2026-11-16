import { ChevronRightIcon } from "@heroicons/react/24/outline";

function BotaoAvancar({ noFim, onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={noFim ? "Voltar para o início" : "Ver os próximos"}
      className={`relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-text-secondary transition-colors duration-300 after:absolute after:-inset-2 after:content-[''] ${className}`}
    >
      <ChevronRightIcon
        className={`size-5 transition-transform duration-300 ${
          noFim ? "rotate-180" : ""
        }`}
      />
    </button>
  );
}

export default BotaoAvancar;
