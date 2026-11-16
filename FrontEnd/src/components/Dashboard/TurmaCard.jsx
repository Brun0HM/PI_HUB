import { formatarData } from "../../utils/formatarData";

const iconeClasses = "size-4 shrink-0 text-text-secondary lg:size-5";

function FolderIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconeClasses}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 12.75V6.75A2.25 2.25 0 0 1 4.5 4.5h3.879a2.25 2.25 0 0 1 1.591.659l1.28 1.28a2.25 2.25 0 0 0 1.591.659H19.5a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25Z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconeClasses}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={iconeClasses}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}

function TurmaCard({
  nome,
  periodoLetivo,
  projetos,
  alunos,
  proximaEntrega,
  cor,
}) {
  return (
    <article className="flex h-full flex-col gap-4 rounded-2xl border border-border bg-surface p-4 lg:gap-5 lg:p-5  hover:bg-surface-raised">
      <header className="flex items-start justify-between gap-1">
        <div className="min-w-0">
          <h3 className="text-[15px] text-text-primary lg:text-lg">
            Turma {nome}
          </h3>
          <p className="text-[10px] text-text-secondary lg:text-[11px]">
            Período letivo {periodoLetivo}
          </p>
        </div>
        <span
          className="mt-1 size-3.5 shrink-0 rounded-full"
          style={{ backgroundColor: cor }}
          aria-label="Turma ativa"
          role="img"
        />
      </header>

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FolderIcon />
          <span className="text-[11px] text-text-primary lg:text-xs">
            {projetos} projetos em andamento
          </span>
        </div>

        <div className="flex items-center gap-2">
          <UsersIcon />
          <span className="text-[11px] text-text-primary lg:text-xs">
            {alunos} alunos
          </span>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <span className="text-[10px] text-text-secondary lg:text-[11px]">
          Próxima data de entrega
        </span>
        <div className="flex items-center gap-2">
          <CalendarIcon />
          <span className="text-[11px] text-text-primary lg:text-xs">
            {formatarData(proximaEntrega)}
          </span>
        </div>
      </div>
    </article>
  );
}

export default TurmaCard;
