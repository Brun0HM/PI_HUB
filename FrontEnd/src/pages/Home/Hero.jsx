function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-16 px-6 py-16 text-white sm:px-10 sm:py-24 lg:scroll-mt-37.5 lg:px-20 lg:py-32"
    >
      <div className="flex w-full flex-col gap-10 sm:gap-12 xl:flex-row xl:items-center">
        <div>
          <h1 className="text-[clamp(2rem,10vw,3rem)] leading-tight font-bold sm:text-5xl lg:text-7xl">
            <span className="text-primary sm:whitespace-nowrap">
              Desenvolvimento
            </span>
            <br />
            <span className="sm:whitespace-nowrap">de Software</span>
            <br />
            <span className="sm:whitespace-nowrap">Multiplataforma</span>
          </h1>
        </div>
        <div className="text-base leading-7 text-text-secondary">
          <span>
            Formamos profissionais capazes de projetar, desenvolver e manter
            sistemas para web, dispositivos móveis e outras plataformas. Em 6
            semestres, os alunos estudam programação, estrutura de dados, banco
            de dados, engenharia de software, segurança no desenvolvimento de
            aplicações e gestão ágil de projetos, além de temas atuais como
            aprendizagem de máquina.
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
