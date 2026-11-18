import { useEffect, useRef } from "react";
import setinha from "../../assets/Setinha.svg";

const campoClasses =
  "h-16 w-full rounded-lg border border-border bg-bg px-5 py-2 text-sm font-semibold text-text-primary transition-colors duration-300 placeholder:text-text-secondary focus:bg-surface-raised focus:outline-none";

const grupos = Array.from({ length: 8 }, (_, i) => {
  const numero = String(i + 1).padStart(2, "0");
  return { value: `Grupo ${numero}`, label: `Grupo ${numero}` };
});

const disciplinas = [
  "Desenvolvimento Web",
  "Engenharia de Software",
  "Banco de Dados",
  "Design de Interfaces",
];

const professores = [
  "Marcos Aurélio",
  "Ana Beatriz",
  "Carlos Eduardo",
  "Fernanda Lima",
];

const semestres = Array.from({ length: 6 }, (_, i) => ({
  value: String(i + 1),
  label: `${i + 1}º semestre`,
}));

function CampoSelect({ label, placeholder, options }) {
  return (
    <div className="relative w-full">
      <select
        aria-label={label}
        defaultValue=""
        required
        className={`${campoClasses} appearance-none pr-12`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {options.map((option) => {
          const value = typeof option === "string" ? option : option.value;
          const texto = typeof option === "string" ? option : option.label;
          return (
            <option key={value} value={value}>
              {texto}
            </option>
          );
        })}
      </select>
      <img
        src={setinha}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2"
      />
    </div>
  );
}

function IconeFechar({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

function ModalCriarProjeto({ aberto, onClose }) {
  const primeiroCampoRef = useRef(null);

  useEffect(() => {
    if (!aberto) return;

    const overflowOriginal = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    primeiroCampoRef.current?.focus();

    function aoPressionarTecla(event) {
      if (event.key === "Escape") onClose();
    }

    document.addEventListener("keydown", aoPressionarTecla);

    return () => {
      document.body.style.overflow = overflowOriginal;
      document.removeEventListener("keydown", aoPressionarTecla);
    };
  }, [aberto, onClose]);

  if (!aberto) return null;

  function handleSubmit(event) {
    event.preventDefault();
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm motion-safe:animate-modal-fade"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="titulo-criar-projeto"
        className="relative max-h-[calc(100vh_-_2rem)] w-full max-w-[960px] overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-2xl motion-safe:animate-modal-pop sm:p-10"
      >
        <h2 id="titulo-criar-projeto" className="sr-only">
          Criar novo projeto
        </h2>

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar"
          className="absolute top-4 right-4 inline-flex size-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-surface-raised hover:text-text-primary sm:top-6 sm:right-6"
        >
          <IconeFechar className="size-5" />
        </button>

        <form className="flex flex-col gap-5 pt-10 sm:gap-6" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-[1.5fr_1fr] sm:gap-6">
            <input
              ref={primeiroCampoRef}
              type="text"
              name="nome"
              placeholder="Nome do projeto"
              aria-label="Nome do projeto"
              required
              className={campoClasses}
            />
            <CampoSelect
              label="Grupo"
              placeholder="Grupo"
              options={grupos}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-[1.5fr_1fr] sm:gap-6">
            <CampoSelect
              label="Disciplinas"
              placeholder="Disciplinas"
              options={disciplinas}
            />
            <CampoSelect
              label="Professor Orientador"
              placeholder="Professor Orientador"
              options={professores}
            />
          </div>

          <div className="grid gap-5 sm:grid-cols-3 sm:gap-6">
            <CampoSelect
              label="Semestre"
              placeholder="Semestre"
              options={semestres}
            />
            <input
              type="date"
              name="dataInicio"
              aria-label="Data de início"
              required
              className={`${campoClasses} [color-scheme:dark]`}
            />
            <button
              type="submit"
              className="inline-flex h-16 items-center justify-center rounded-lg border border-accent text-sm font-medium text-accent transition-colors duration-300 hover:bg-accent/10"
            >
              Criar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalCriarProjeto;
