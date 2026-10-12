function SobreCurso() {
  return (
    <section
      id="sobre-curso"
      className="bg-[#121212] px-6 py-24 text-white sm:py-32"
    >
      <div className="container mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.3em] text-pi-red">
            Conheça o curso
          </span>
          <h1 className=" text-4xl font-bold leading-tight sm:text-6xl">
            Sobre o curso
          </h1>
        </div>

        <div className="space-y-6 text-base leading-7 text-gray-400 sm:text-lg">
          <p>
            O curso de Desenvolvimento de Software Multiplataforma prepara
            profissionais para criar soluções digitais modernas, funcionais e
            acessíveis.
          </p>
          <p>
            Durante a formação, os alunos aprendem programação, banco de dados,
            desenvolvimento web e mobile, além de trabalhar em projetos que
            aproximam a teoria dos desafios do mercado.
          </p>

          <div className="grid gap-4 pt-2 sm:grid-cols-3">
            <div className="border-l-2 border-pi-red pl-4">
              <strong className="block text-2xl text-white">3 anos</strong>
              <span className="text-sm">de formação</span>
            </div>
            <div className="border-l-2 border-pi-red pl-4">
              <strong className="block text-2xl text-white">Prático</strong>
              <span className="text-sm">aprendizado por projetos</span>
            </div>
            <div className="border-l-2 border-pi-red pl-4">
              <strong className="block text-2xl text-white">
                Multiplataforma
              </strong>
              <span className="text-sm">web, mobile e sistemas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreCurso;
