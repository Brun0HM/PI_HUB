import { useLayoutEffect, useRef, useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

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

function useSetasDeRolagem(areaRef, seletorPasso) {
  const [estado, setEstado] = useState({ noFim: false, temOverflow: false });

  useLayoutEffect(() => {
    const area = areaRef.current;
    if (!area) return undefined;

    const atualizar = () => {
      const limite = area.scrollWidth - area.clientWidth;
      const noFim = area.scrollLeft >= limite - 8;
      const temOverflow = limite > 24;

      setEstado((atual) =>
        atual.noFim === noFim && atual.temOverflow === temOverflow
          ? atual
          : { noFim, temOverflow },
      );
    };

    atualizar();
    area.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);

    const observador = new ResizeObserver(atualizar);
    observador.observe(area);
    if (area.firstElementChild) observador.observe(area.firstElementChild);

    return () => {
      area.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
      observador.disconnect();
    };
  }, [areaRef]);

  const avancar = () => {
    const area = areaRef.current;
    if (!area) return;

    const limite = area.scrollWidth - area.clientWidth;
    if (limite <= 24) return;

    if (area.scrollLeft >= limite - 8) {
      area.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const base = area.getBoundingClientRect().left;
    const posicoes = [...area.querySelectorAll(seletorPasso)]
      .map(
        (item) => item.getBoundingClientRect().left - base + area.scrollLeft + 1,
      )
      .sort((a, b) => a - b);

    const indiceAtual = posicoes.findIndex(
      (posicao) => posicao >= area.scrollLeft - 4,
    );
    const proximo = posicoes[indiceAtual + 1];

    area.scrollTo({
      left: Math.min(proximo ?? limite, limite),
      behavior: "smooth",
    });
  };

  return { ...estado, avancar };
}

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

      <div className="mx-auto w-full max-w-7xl">
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
