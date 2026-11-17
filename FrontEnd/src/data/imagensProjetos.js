import saude from "../assets/projetos/saude.svg";
import mobilidade from "../assets/projetos/mobilidade.svg";
import biblioteca from "../assets/projetos/biblioteca.svg";
import carreira from "../assets/projetos/carreira.svg";
import eventos from "../assets/projetos/eventos.svg";
import educacao from "../assets/projetos/educacao.svg";
import gestao from "../assets/projetos/gestao.svg";
import web from "../assets/projetos/web.svg";

const imagens = {
  saude,
  mobilidade,
  biblioteca,
  carreira,
  eventos,
  educacao,
  gestao,
  web,
};

/**
 * Cada projeto recebe uma ilustração de acordo com o tema do título.
 * A ordem importa: regras mais específicas vêm antes das genéricas.
 */
const regras = [
  { imagem: "saude", termos: ["saúde", "bem-estar", "alimentação"] },
  { imagem: "mobilidade", termos: ["transporte", "mapa"] },
  { imagem: "biblioteca", termos: ["biblioteca", "documentos"] },
  {
    imagem: "eventos",
    termos: ["evento", "auditório", "salas", "reserva", "frequência"],
  },
  {
    imagem: "carreira",
    termos: [
      "estágio",
      "vagas",
      "networking",
      "empresas",
      "egressos",
      "processos seletivos",
    ],
  },
  {
    imagem: "gestao",
    termos: ["estoque", "empréstimo", "gestão de laboratórios"],
  },
  {
    imagem: "educacao",
    termos: [
      "monitoria",
      "indicadores",
      "tcc",
      "cursos",
      "feedback",
      "avaliação",
      "painel",
    ],
  },
];

export function imagemDoProjeto(projeto) {
  const titulo = projeto.titulo.toLowerCase();
  const regra = regras.find(({ termos }) =>
    termos.some((termo) => titulo.includes(termo)),
  );

  return imagens[regra?.imagem ?? "web"];
}
