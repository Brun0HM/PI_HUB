import { useRef, useState } from "react";
import BotaoAvancar from "../../components/Buttons/BotaoAvancar";
import { useSetasDeRolagem } from "../../hooks/useSetasDeRolagem";

const semestres = [
  "1º semestre",
  "2º semestre",
  "3º semestre",
  "4º semestre",
  "5º semestre",
  "6º semestre",
];

const dias = ["Segunda", "Terça", "Quarta", "Quinta", "Sexta"];

const horarios = [
  {
    horario: "19:00-20:40",
    aulas: [
      "Algoritmos e Lógica",
      "Desenvolvimento web",
      "Banco de dados",
      "Algoritmos e Lógica",
      "Desenvolvimento web",
    ],
  },
  {
    horario: "20:50-22:30",
    aulas: [
      "Engenharia de software",
      "Sistemas operacionais",
      "Engenharia de software",
      "Sistemas operacionais",
      "Projeto Integrador",
    ],
  },
  {
    horario: "19:00-20:40",
    aulas: [
      "Banco de dados",
      "Algoritmos e Lógica",
      "Desenvolvimento web",
      "Engenharia de software",
      "Sistemas operacionais",
    ],
  },
  {
    horario: "20:50-22:30",
    aulas: [
      "Projeto Integrador",
      "Banco de dados",
      "Algoritmos e Lógica",
      "Desenvolvimento web",
      "Engenharia de software",
    ],
  },
  {
    horario: "19:00-20:40",
    aulas: [
      "Sistemas operacionais",
      "Projeto Integrador",
      "Sistemas operacionais",
      "Projeto Integrador",
      "Banco de dados",
    ],
  },
];

function GradeHorarios() {
  const [semestreAtivo, setSemestreAtivo] = useState(0);
  const abasRef = useRef(null);
  const tabelaRef = useRef(null);
  const abas = useSetasDeRolagem(abasRef, "button[aria-pressed]");
  const tabela = useSetasDeRolagem(tabelaRef, "[data-dia]");

  return (
    <section
      id="materias"
      className="scroll-mt-16 px-6 py-16 text-text-primary sm:px-10 sm:py-24 lg:scroll-mt-37.5 lg:px-20 lg:py-32"
    >
      <h2 className="sr-only">Matérias e horários</h2>

      <div className="w-full">
        <div className="flex items-center gap-2">
          <div
            ref={abasRef}
            className="scrollbar-hidden flex flex-1 gap-2 overflow-x-auto pb-1 lg:grid lg:grid-cols-6 lg:gap-4 lg:overflow-visible lg:pb-0"
          >
            {semestres.map((semestre, indice) => {
              const ativo = indice === semestreAtivo;

              return (
                <button
                  key={semestre}
                  type="button"
                  aria-pressed={ativo}
                  onClick={() => setSemestreAtivo(indice)}
                  className={`shrink-0 rounded-xl border px-5 py-4 text-sm font-medium transition-colors duration-300 lg:w-full lg:py-6 ${
                    ativo
                      ? "border-primary bg-surface-raised text-white"
                      : "border-transparent bg-surface text-text-secondary hover:bg-surface-raised hover:text-white"
                  }`}
                >
                  {semestre}
                </button>
              );
            })}
          </div>
          {abas.temOverflow && (
            <BotaoAvancar noFim={abas.noFim} onClick={abas.avancar} />
          )}
        </div>

        <div className="relative mt-6 lg:mt-10">
          <div className="flex overflow-hidden rounded-xl">
            <div className="shrink-0 bg-surface-raised">
              <div className="flex h-12 w-28 items-center justify-center bg-primary-dark px-3 text-center text-[0.6875rem] font-bold uppercase tracking-wider text-[#17060a] sm:w-47.5">
                Horário
              </div>
              {horarios.map((linha, indiceLinha) => (
                <div
                  key={indiceLinha}
                  data-row
                  className="flex h-12 w-28 items-center justify-center px-3 text-center text-sm font-semibold text-text-primary sm:w-47.5"
                >
                  {linha.horario}
                </div>
              ))}
            </div>

            <div
              ref={tabelaRef}
              className="scrollbar-hidden flex-1 overflow-x-auto bg-surface"
            >
              <div className="min-w-[930px] pl-4">
                <div className="grid grid-cols-5 gap-x-4 text-[0.6875rem] font-bold uppercase tracking-wider text-[#17060a]">
                  {dias.map((dia) => (
                    <div
                      key={dia}
                      data-dia
                      className="flex h-12 items-center justify-center rounded-lg bg-primary px-3 text-center"
                    >
                      {dia}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-5 gap-x-4">
                  {horarios.map((linha, indiceLinha) =>
                    linha.aulas.map((aula, indiceAula) => (
                      <div
                        key={`${indiceLinha}-${indiceAula}`}
                        className={`flex h-12 items-center justify-center px-3 text-center text-sm text-text-primary ${
                          indiceLinha % 2 === 1
                            ? "rounded-md bg-surface-raised"
                            : ""
                        }`}
                      >
                        {aula}
                      </div>
                    )),
                  )}
                </div>
              </div>
            </div>
          </div>

          {tabela.temOverflow && (
            <div className="pointer-events-none absolute inset-y-0 right-0 flex w-24 items-center justify-end bg-linear-to-l from-bg via-bg/70 to-transparent pr-1">
              <BotaoAvancar
                noFim={tabela.noFim}
                onClick={tabela.avancar}
                className="pointer-events-auto"
              />
            </div>
          )}
        </div>

        {tabela.temOverflow && (
          <p className="mt-3 text-center text-xs text-text-secondary">
            Toque na seta para ver os outros dias
          </p>
        )}
      </div>
    </section>
  );
}

export default GradeHorarios;
