import { Link, useParams } from "react-router";
import { detalhesDoProjeto, statusMeta } from "../../data/pihub";
import { formatarData } from "../../utils/formatarData";

function IconeImagem({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <circle cx="8.5" cy="9.5" r="1.5" />
      <path d="m4 17 5-5 4 4 3-3 4 4" />
    </svg>
  );
}

function IconeGithub({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5A11.5 11.5 0 0 0 .5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.12 3.05.74.81 1.18 1.84 1.18 3.1 0 4.43-2.68 5.4-5.24 5.69.41.36.78 1.07.78 2.15v3.19c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12 11.5 11.5 0 0 0 12 .5Z" />
    </svg>
  );
}

function IconeIntegrante({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="8" r="3.5" />
      <path d="M5 20a7 7 0 0 1 14 0" />
    </svg>
  );
}

function Dado({ rotulo, valor }) {
  return (
    <div className="border-l-[3px] border-primary pl-4">
      <small className="block text-sm text-text-secondary">{rotulo}</small>
      <strong className="block text-2xl font-medium text-text-primary lg:text-3xl">
        {valor}
      </strong>
    </div>
  );
}

function Evento({ evento }) {
  const direita = evento.lado === "dir";

  return (
    <li
      className={`relative min-h-27.5 pb-10 pl-10 last:pb-0 lg:min-h-37.5 lg:w-1/2 lg:pb-0 ${
        direita ? "lg:ml-auto lg:pl-7" : "lg:mr-auto lg:pr-7 lg:text-right"
      }`}
    >
      <span
        className={`absolute top-1 left-0 h-4 w-4 rounded-sm bg-accent ${
          direita ? "lg:-left-2" : "lg:left-auto lg:-right-2"
        }`}
        aria-hidden="true"
      />
      <div
        className={`flex items-start gap-3 ${
          direita ? "" : "lg:flex-row-reverse lg:justify-start"
        }`}
      >
        <span
          className="hidden text-xl leading-7 text-accent lg:block"
          aria-hidden="true"
        >
          {direita ? "›" : "‹"}
        </span>
        <div>
          <h3 className="text-xl leading-7 font-bold text-text-primary">
            {evento.titulo}
          </h3>
          <time dateTime={evento.data} className="text-sm text-text-secondary">
            {formatarData(evento.data)}
          </time>
        </div>
      </div>
    </li>
  );
}

function Detalhes() {
  const { id } = useParams();
  const projeto = detalhesDoProjeto(id);

  if (!projeto) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-6 text-center">
        <h1 className="text-4xl font-semibold text-text-primary">
          Projeto não encontrado
        </h1>
        <p className="text-text-secondary">
          O projeto que você procura não existe ou foi removido.
        </p>
        <Link
          to="/explorarprojetos"
          className="mt-2 inline-flex h-12 items-center rounded-lg bg-primary px-6 font-medium text-white transition-colors hover:bg-primary-hover"
        >
          Voltar para os projetos
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-24">
      <div className="border-b border-border py-6">
        <div className="flex flex-wrap justify-end gap-3 px-6 text-base sm:px-10 lg:px-20">
          <Link
            to="/explorarprojetos"
            className="text-text-secondary transition-colors hover:text-text-primary"
          >
            Projetos integradores
          </Link>
          <span className="text-border" aria-hidden="true">
            &gt;
          </span>
          <span className="text-primary-text" aria-current="page">
            Detalhes do P.I
          </span>
        </div>
      </div>

      <section
        className="relative aspect-video max-h-[779px] w-full overflow-hidden bg-surface-raised"
        aria-label="Capa do projeto"
      >
        <div className="absolute inset-x-0 top-0 z-10 flex px-6 pt-6 sm:px-10 lg:px-20">
          <span
            className="inline-flex h-8 items-center rounded-full bg-bg px-3 text-sm font-medium sm:h-9.5 sm:px-4 sm:text-base"
            style={{ color: statusMeta[projeto.status].color }}
          >
            {projeto.status}
          </span>
        </div>
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 px-6 pt-10 text-center text-[#a4aab6] sm:gap-4 sm:pt-0">
          <IconeImagem className="h-8 w-8 sm:h-12 sm:w-12" />
          <p className="text-base font-bold sm:text-xl md:text-2xl">
            Imagem de capa do projeto
          </p>
        </div>
      </section>

      <div className="px-6 py-5 sm:px-10 lg:px-20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-3">
            {projeto.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex h-8 items-center rounded-full border border-accent/20 bg-accent/10 px-6 font-medium text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={projeto.repositorio}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center gap-4 rounded-lg border border-border bg-accent/10 px-4.5 font-medium text-accent transition-colors hover:bg-accent/20"
          >
            <IconeGithub className="h-5.5 w-5.5 text-text-secondary" />
            Veja o repositório
          </a>
        </div>
      </div>

      <section className="grid gap-14 px-6 py-14 sm:px-10 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:gap-20 lg:px-20 lg:py-16">
        <div>
          <h1 className="text-[clamp(2.125rem,4.4vw,3.5rem)] leading-[1.15] font-medium tracking-tight text-text-primary">
            {projeto.titulo}
          </h1>
          <p className="mt-5 mb-11 max-w-2xl text-lg font-medium text-text-secondary">
            {projeto.descricao}
          </p>
          <div className="flex flex-wrap gap-7">
            <Dado
              rotulo="Semestre vinculado"
              valor={`${projeto.semestre}º semestre`}
            />
            <Dado rotulo="Professor orientador" valor={projeto.professor} />
            <Dado rotulo="Grupo" valor={projeto.grupo} />
          </div>
        </div>

        <aside>
          <h2 className="mb-6 text-[clamp(1.625rem,3vw,2.25rem)] leading-tight font-medium text-text-primary">
            Integrantes
          </h2>
          <ul className="grid gap-3">
            {projeto.integrantesNomes.map((nome) => (
              <li
                key={nome}
                className="flex h-14 items-center gap-3 rounded-lg border border-border bg-surface px-4 text-text-primary hover:scale-105 transition-transform"
              >
                <IconeIntegrante className="h-5 w-5 shrink-0 text-text-secondary" />
                {nome}
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section
        className="px-6 pb-8 sm:px-10 lg:px-20"
        aria-labelledby="titulo-linha-do-tempo"
      >
        <hr className="mb-4 border-border" />
        <p
          id="titulo-linha-do-tempo"
          className="mb-14 text-center text-text-secondary"
        >
          Linha do tempo do projeto
        </p>
        <div className="relative mx-auto max-w-[960px] py-2">
          <span
            className="absolute top-0 bottom-0 left-2 w-px bg-border lg:left-1/2"
            aria-hidden="true"
          />
          <ol className="m-0 list-none p-0">
            {projeto.linhaDoTempo.map((evento) => (
              <Evento key={evento.titulo} evento={evento} />
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

export default Detalhes;
