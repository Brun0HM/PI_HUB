import InputPrimary from "../../components/Inputs/InputPrimary";
import InputDropDown from "../../components/Inputs/InputDropDown";
import { useRef, useState } from "react";
import Card from "../../components/Explorar/Card";
import BotaoAvancar from "../../components/Buttons/BotaoAvancar";
import { useSetasDeRolagem } from "../../hooks/useSetasDeRolagem";
import { detalhesDoProjeto, projetos } from "../../data/pihub";

const secao = "px-6 py-16 sm:px-10 lg:px-20";

function ExplorarProjeto() {
  const [semester, setSemestre] = useState("");
  const [year, setYear] = useState("");
  const [theme, setTheme] = useState("");
  const projetosRef = useRef(null);
  const carrossel = useSetasDeRolagem(projetosRef, "[data-projeto]");

  return (
    <div>
      <section
        id="inicio"
        className="scroll-mt-16 px-6 py-16 text-white sm:px-10 lg:scroll-mt-37.5 lg:px-20"
      >
        <div className="flex w-full flex-col sm:gap-12 xl:flex-row xl:items-center">
          <div>
            <h1 className="text-[clamp(2rem,10vw,3rem)] leading-tight font-extrabold sm:text-5xl lg:text-7xl">
              <span className="text-text-primary sm:whitespace-nowrap">
                Projetos
              </span>
              <br />
              <span className="text-primary sm:whitespace-nowrap">
                Integradores
              </span>
            </h1>
          </div>
          <div className="text-2xl leading-7 text-text-secondary">
            <span>
              Conheça as ideias, soluções e projetos desenvolvidos pelos
              estudantes de Desenvolvimento de Software Multiplataforma
            </span>
          </div>
        </div>
      </section>

      <section className={secao}>
        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <div className="flex w-full flex-col gap-2">
            <h2 className="text-5xl font-semibold text-text-primary">
              Explore os Projetos
            </h2>
            <span className="text-lg text-text-secondary">
              Filtre os trabalhos por semestres e temas
            </span>
          </div>
        </div>
      </section>

      <div className="w-full items-center sm:mt-12 sm:flex-row sm:items-start sm:gap-6 lg:mt-20 lg:px-20">
        <div className="flex w-full items-center gap-2 sm:items-start mb-2">
          <InputPrimary
            type="text"
            placeholder="Pesquisar projetos..."
            value=""
            onChange={() => {}}
          />
        </div>
        <div className="flex w-full items-center gap-2 sm:items-start mb-2">
          <InputDropDown
            placeholder="Semestre do P.I"
            value={semester}
            onChange={(event) => setSemestre(event.target.value)}
            options={[
              { value: "1", label: "1º Semestre" },
              { value: "2", label: "2º Semestre" },
              { value: "3", label: "3º Semestre" },
            ]}
          />
          <InputDropDown
            placeholder="Ano de Ingresso"
            value={year}
            onChange={(event) => setYear(event.target.value)}
            options={[
              { value: "1", label: "2026/1" },
              { value: "2", label: "2026/2" },
              { value: "3", label: "2025/2" },
            ]}
          />
        </div>
        <div>
          <InputDropDown
            placeholder="Tema do projeto"
            value={theme}
            onChange={(event) => setTheme(event.target.value)}
            options={[
              { value: "1", label: "Saúde" },
              { value: "2", label: "Tecnologia" },
              { value: "3", label: "Meio Ambiente" },
            ]}
          />
        </div>
      </div>

      <section className={secao}>
        <div className="flex w-full items-start justify-between gap-4">
          <div className="flex min-w-0 flex-col gap-2">
            <h2 className="text-5xl font-semibold text-text-primary">
              Todos os Projetos
            </h2>
            <span className="text-lg text-text-secondary">
              Explore os projetos desenvolvidos pelos alunos.
            </span>
          </div>
        </div>
      </section>

      <section className="overflow-x-clip py-16">
        <div className="relative">
          <div
            ref={projetosRef}
            className="scrollbar-hidden flex gap-4 overflow-x-auto py-4 pr-6 pl-6 sm:pr-10 sm:pl-10 lg:pr-20 lg:pl-20"
          >
            {projetos.slice(0, 3).map((projeto) => {
              const detalhe = detalhesDoProjeto(projeto.id);

              return (
                <div
                  key={projeto.id}
                  data-projeto
                  className="w-full shrink-0 lg:w-auto"
                >
                  <Card
                    title={projeto.titulo}
                    year={detalhe.periodoLetivo}
                    tag={detalhe.tags[0]}
                    imageUrl={detalhe.imagem}
                    to={`/projetos/${projeto.id}`}
                  />
                </div>
              );
            })}
          </div>

          {carrossel.temOverflow && (
            <div className="pointer-events-none absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2">
              <BotaoAvancar
                noFim={carrossel.noFim}
                onClick={carrossel.avancar}
                className="pointer-events-auto border border-border bg-surface/90 shadow-lg backdrop-blur hover:bg-surface-raised"
              />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default ExplorarProjeto;
