import InfoSection from "./infoSection";

function inicio() {
  return (
    <section
      id="sobre-curso"
      className="bg-[#121212] px-6 py-24 text-white sm:py-32"
    >
      <div className="container mx-auto flex max-w-6xl flex-col gap-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-pi-red">
            Conhecimento que transforma
          </span>
          <h1 className="text-4xl font-bold leading-tight sm:text-6xl">
            <span className="whitespace-nowrap">Desenvolvimento</span>
            <br />
            <span className="whitespace-nowrap">
              de Software Multiplataforma
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="flex items-center gap-2 rounded bg-pi-red p-2">
            <span>Explorar PIs</span>
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <button className="bg-pi-red p-2 rounded">Sobre o curso</button>
        </div>

        <div>
          <InfoSection title="6" />
        </div>
      </div>
    </section>
  );
}

export default inicio;
