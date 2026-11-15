import { useEffect, useState } from "react";
import foto1 from "../../assets/sobre/01.jpg";
import foto2 from "../../assets/sobre/02.jpg";
import foto3 from "../../assets/sobre/03.jpg";

const imagens = [
  {
    src: foto1,
    alt: "Alunos do curso de DSM reunidos em volta de notebooks",
  },
  {
    src: foto2,
    alt: "Alunos programando em um laboratório de informática",
  },
  {
    src: foto3,
    alt: "Aluno utilizando notebook durante um projeto do curso",
  },
];

const destaques = [
  {
    titulo: "6 Semestres",
    descricao: "Graduação em Desenvolvimento de Software Multiplataforma.",
  },
  {
    titulo: "2400 Horas de aula",
    descricao: "Mais 240 horas de estágio supervisionado.",
  },
  {
    titulo: "Do web ao mobile",
    descricao: "Graduação em Desenvolvimento de Software Multiplataforma.",
  },
  {
    titulo: "Um PI por semestre",
    descricao: "Projetos práticos reais, do início ao fim.",
  },
];

function SobreCurso() {
  const [ativa, setAtiva] = useState(0);

  useEffect(() => {
    const timer = setTimeout(
      () => setAtiva((indice) => (indice + 1) % imagens.length),
      4000,
    );

    return () => clearTimeout(timer);
  }, [ativa]);

  return (
    <section
      id="sobre-curso"
      className="scroll-mt-16 px-6 py-16 text-text-primary sm:px-10 sm:py-24 lg:scroll-mt-37.5 lg:px-20 lg:py-32"
    >
      <h2 className="sr-only">Sobre o curso</h2>
      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 xl:grid-cols-2">
        <div>
          <div className="relative aspect-2/1 overflow-hidden rounded-xl">
            {imagens.map((imagem, indice) => (
              <img
                key={imagem.src}
                src={imagem.src}
                alt={imagem.alt}
                loading={indice === 0 ? "eager" : "lazy"}
                className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
                  indice === ativa ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-2">
            {imagens.map((imagem, indice) => (
              <button
                key={imagem.src}
                type="button"
                aria-label={`Ver imagem ${indice + 1}`}
                aria-current={indice === ativa}
                onClick={() => setAtiva(indice)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  indice === ativa
                    ? "w-8 bg-primary"
                    : "w-4 bg-text-secondary/30 hover:bg-text-secondary"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {destaques.map((destaque) => (
            <div
              key={destaque.titulo}
              className="border-l-2 border-primary pl-4"
            >
              <h3 className="text-xl font-bold xl:text-2xl">
                {destaque.titulo}
              </h3>
              <p className="mt-2 text-sm leading-6 text-text-secondary">
                {destaque.descricao}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SobreCurso;
