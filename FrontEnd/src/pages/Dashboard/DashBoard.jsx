import { useRef, useState } from "react";
import BotaoAvancar from "../../components/Buttons/BotaoAvancar";
import ModalCriarProjeto from "../../components/Dashboard/ModalCriarProjeto";
import StatusBar from "../../components/Dashboard/StatusBar";
import TurmaCard from "../../components/Dashboard/TurmaCard";
import {
  entregasProximas,
  resumoStatus,
  totalPIs,
  turmasResumo,
} from "../../data/pihub";
import { useSetasDeRolagem } from "../../hooks/useSetasDeRolagem";
import { formatarData } from "../../utils/formatarData";

const inputClasses =
  "h-10 w-full rounded-xl border border-border bg-surface pl-4 pr-12 text-sm text-text-primary transition-colors placeholder:text-text-secondary  focus:outline-none focus:bg-surface-raised";

function SearchIcon({ className }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
      />
    </svg>
  );
}

function DashBoard() {
  const turmasRef = useRef(null);
  const carrossel = useSetasDeRolagem(turmasRef, "[data-turma]");
  const [modalProjetoAberto, setModalProjetoAberto] = useState(false);

  return (
    <div className="flex flex-col items-center px-4 py-10 sm:px-6 lg:px-20">
      <div className="grid w-full items-stretch gap-6 lg:grid-cols-2">
        <div className="flex flex-col gap-6 rounded-2xl border border-border bg-surface p-8">
          <h1 className="text-2xl font-semibold text-text-primary">
            Status dos P.Is
          </h1>

          <div className="flex flex-col gap-5">
            {resumoStatus.map((status) => (
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
              onClick={() => setModalProjetoAberto(true)}
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
            <h2 className="mb-2 text-xl font-semibold text-text-primary">
              O prazo de entrega está próximo
            </h2>

            <ul className="flex flex-col divide-y divide-border">
              {entregasProximas.map((entrega) => (
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
                    Entrega {entrega.numero} - {entrega.tipo} -{" "}
                    {entrega.semestre}º semestre
                  </span>

                  <span className="shrink-0 text-[11px] text-text-secondary">
                    {formatarData(entrega.data)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex min-w-0 flex-col gap-4 sm:flex-row lg:col-span-2">
          <div className="relative min-w-0 flex-1">
            <SearchIcon className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-text-secondary" />
            <input
              type="text"
              placeholder="Buscar Turmas"
              aria-label="Buscar turmas"
              className={inputClasses}
            />
          </div>

          <div className="relative min-w-0 flex-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="pointer-events-none absolute right-4 top-1/2 size-5 -translate-y-1/2 text-text-secondary"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <input
              type="text"
              placeholder="Explorar Turmas"
              aria-label="Explorar turmas"
              className={inputClasses}
            />
          </div>
        </div>

        <section className="flex min-w-0 flex-col gap-4 lg:col-span-2">
          <div className="relative">
            <div
              ref={turmasRef}
              className="scrollbar-hidden flex gap-4 overflow-x-auto pb-1"
            >
              {turmasResumo.map((turma) => (
                <div
                  key={turma.id}
                  data-turma
                  className="w-[calc(50%-0.5rem)] shrink-0 lg:w-[calc(25%-0.75rem)]"
                >
                  <TurmaCard cor="var(--color-status-completed)" {...turma} />
                </div>
              ))}
            </div>

            {carrossel.temOverflow && (
              <div className="pointer-events-none absolute inset-y-0 right-0 flex w-16 items-center justify-end bg-linear-to-l from-bg/80 to-transparent pr-1">
                <BotaoAvancar
                  noFim={carrossel.noFim}
                  onClick={carrossel.avancar}
                  className="pointer-events-auto border border-border bg-surface/90 backdrop-blur"
                />
              </div>
            )}
          </div>

          {carrossel.temOverflow && (
            <p className="text-center text-xs text-text-secondary">
              Use a seta para ver as outras turmas
            </p>
          )}
        </section>
      </div>

      <ModalCriarProjeto
        aberto={modalProjetoAberto}
        onClose={() => setModalProjetoAberto(false)}
      />
    </div>
  );
}

export default DashBoard;
