import StatusBar from "../../components/Dashboard/StatusBar";

const statuses = [
  { label: "Concluídos", value: 42, color: "var(--color-status-completed)" },
  { label: "Andamento", value: 28, color: "var(--color-status-in-progress)" },
  { label: "Cancelados", value: 18, color: "var(--color-status-archived)" },
  { label: "Trancados", value: 12, color: "var(--color-status-locked)" },
];

const entregas = [
  {
    id: 6,
    tipo: "planejamento de design",
    semestre: 2,
    date: "2026-02-10",
  },
  {
    id: 4,
    tipo: "planejamento do banco",
    semestre: 5,
    date: "2026-02-10",
  },
  {
    id: 8,
    tipo: "protótipo no figma",
    semestre: 1,
    date: "2024-02-10",
  },
  {
    id: 2,
    tipo: "documentação técnica",
    semestre: 3,
    date: "2024-02-17",
  },
  {
    id: 5,
    tipo: "front-end funcional",
    semestre: 4,
    date: "2024-02-24",
  },
];

const totalPIs = statuses.reduce((soma, status) => soma + status.value, 0);

function formatarData(data) {
  return new Date(`${data}T00:00:00`).toLocaleDateString("pt-BR");
}

function DashBoard() {
  return (
    <div className="flex flex-col items-center px-4 py-10">
      <div className="grid w-full max-w-5xl items-stretch gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8">
          <h1 className="text-2xl font-semibold text-text-primary">
            Status dos P.Is
          </h1>

          <div className="flex flex-col gap-5">
            {statuses.map((status) => (
              <StatusBar key={status.label} total={totalPIs} {...status} />
            ))}
          </div>
        </div>

        {/* Coluna direita: atalhos + entregas */}
        <div className="flex min-w-0 flex-col gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-5 text-sm text-text-primary transition-colors hover:bg-surface-raised"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Criar Novo Grupo
            </button>

            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-5 text-sm text-text-primary transition-colors hover:bg-surface-raised"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              Criar Novo Projeto
            </button>
          </div>

          <div className="flex min-w-0 flex-1 flex-col gap-4 rounded-2xl border border-border bg-surface p-5">
            <h2 className="text-1xl font-semibold text-text-primary mb-2 ">
              O prazo de entrega está próximo
            </h2>

            <ul className="flex flex-col divide-y divide-border">
              {entregas.map((entrega) => (
                <li
                  key={entrega.id}
                  className="flex min-w-0 items-center gap-2 py-3 first:pt-0 last:pb-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-5 shrink-0 text-text-secondary"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                    />
                  </svg>

                  <span className="min-w-0 flex-1 truncate text-xs text-text-primary">
                    Entrega {entrega.id} - {entrega.tipo} - semestre{" "}
                    {entrega.semestre}
                  </span>

                  <span className="shrink-0 text-[11px] text-text-secondary">
                    {formatarData(entrega.date)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
