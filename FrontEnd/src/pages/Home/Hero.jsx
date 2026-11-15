function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-16 bg-[#121212] px-6 py-16 text-white sm:py-24 lg:scroll-mt-[150px] lg:py-32"
    >
      <div className="container mx-auto flex max-w-6xl flex-col gap-10 sm:gap-12">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            Conhecimento que transforma
          </span>
          <h1 className="mt-3 text-3xl leading-tight font-bold sm:text-5xl lg:text-6xl">
            <span className="sm:whitespace-nowrap">Desenvolvimento</span>
            <br />
            <span className="sm:whitespace-nowrap">
              de Software Multiplataforma
            </span>
          </h1>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <button className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 font-medium transition-colors duration-300 hover:bg-primary-hover">
            <span>Explorar PIs</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
          <button className="rounded-lg bg-primary px-5 py-3 font-medium transition-colors duration-300 hover:bg-primary-hover">
            Sobre o curso
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
