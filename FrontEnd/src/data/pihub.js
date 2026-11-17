import { imagemDoProjeto } from "./imagensProjetos";

/**
 * Universo de dados único do P.I Hub (MVP com dados mockados).
 *
 * Referência: Documento da Aplicação Web, seções 2 (RF05–RF08) e 5.
 * - semestre: posição da turma no curso (1º ao 6º);
 * - período letivo: semestre do calendário (ex.: 02/2026);
 * - status do PI: Em andamento, Concluído, Trancado ou Cancelado.
 *
 * A página de dashboard deriva status, turmas e próximas entregas daqui,
 * para que todos os widgets mostrem o mesmo universo de dados.
 */

export const PERIODO_LETIVO_ATUAL = "02/2026";

export const STATUS_PI = {
  EM_ANDAMENTO: "Em andamento",
  CONCLUIDO: "Concluído",
  TRANCADO: "Trancado",
  CANCELADO: "Cancelado",
};

export const statusMeta = {
  [STATUS_PI.EM_ANDAMENTO]: {
    label: "Em andamento",
    color: "var(--color-status-in-progress)",
  },
  [STATUS_PI.CONCLUIDO]: {
    label: "Concluídos",
    color: "var(--color-status-completed)",
  },
  [STATUS_PI.TRANCADO]: {
    label: "Trancados",
    color: "var(--color-status-locked)",
  },
  [STATUS_PI.CANCELADO]: {
    label: "Cancelados",
    color: "var(--color-status-archived)",
  },
};

/** Ordem em que os status aparecem no painel do dashboard. */
export const ordemStatusPainel = [
  STATUS_PI.CONCLUIDO,
  STATUS_PI.EM_ANDAMENTO,
  STATUS_PI.CANCELADO,
  STATUS_PI.TRANCADO,
];

export const turmas = [
  { id: "turma-1", semestre: 1, periodoLetivo: PERIODO_LETIVO_ATUAL },
  { id: "turma-2", semestre: 2, periodoLetivo: PERIODO_LETIVO_ATUAL },
  { id: "turma-3", semestre: 3, periodoLetivo: PERIODO_LETIVO_ATUAL },
  { id: "turma-4", semestre: 4, periodoLetivo: PERIODO_LETIVO_ATUAL },
  { id: "turma-5", semestre: 5, periodoLetivo: PERIODO_LETIVO_ATUAL },
  { id: "turma-6", semestre: 6, periodoLetivo: PERIODO_LETIVO_ATUAL },
];

function entrega(numero, tipo, data) {
  return { numero, tipo, data };
}

/**
 * Cada projeto pertence a um grupo e a uma turma do período letivo atual.
 * Apenas projetos "Em andamento" possuem próxima entrega pendente.
 */
export const projetos = [
  {
    id: "pi-01",
    titulo: "Painel de acompanhamento de PIs",
    turmaId: "turma-1",
    grupo: "Grupo 01",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(8, "protótipo navegável", "2026-11-17"),
  },
  {
    id: "pi-02",
    titulo: "Plataforma de estágios",
    turmaId: "turma-1",
    grupo: "Grupo 02",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "front-end funcional", "2026-11-24"),
  },
  {
    id: "pi-03",
    titulo: "Gestor de eventos acadêmicos",
    turmaId: "turma-1",
    grupo: "Grupo 03",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "documentação técnica", "2026-11-26"),
  },
  {
    id: "pi-04",
    titulo: "Acessibilidade no campus",
    turmaId: "turma-1",
    grupo: "Grupo 04",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "testes de usabilidade", "2026-11-27"),
  },
  {
    id: "pi-05",
    titulo: "Sistema de biblioteca",
    turmaId: "turma-1",
    grupo: "Grupo 05",
    integrantes: 5,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-06",
    titulo: "App de transporte universitário",
    turmaId: "turma-1",
    grupo: "Grupo 06",
    integrantes: 5,
    status: STATUS_PI.TRANCADO,
    proximaEntrega: null,
  },

  {
    id: "pi-07",
    titulo: "Portal de vagas para alunos",
    turmaId: "turma-2",
    grupo: "Grupo 01",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(8, "planejamento de design", "2026-11-18"),
  },
  {
    id: "pi-08",
    titulo: "Controle de estoque do laboratório",
    turmaId: "turma-2",
    grupo: "Grupo 02",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "planejamento do banco", "2026-11-24"),
  },
  {
    id: "pi-09",
    titulo: "Agenda de salas e laboratórios",
    turmaId: "turma-2",
    grupo: "Grupo 03",
    integrantes: 5,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "front-end funcional", "2026-11-27"),
  },
  {
    id: "pi-10",
    titulo: "Sistema de reservas do auditório",
    turmaId: "turma-2",
    grupo: "Grupo 04",
    integrantes: 5,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-11",
    titulo: "Plataforma de monitoria",
    turmaId: "turma-2",
    grupo: "Grupo 05",
    integrantes: 5,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-12",
    titulo: "Catálogo de projetos da Fatec",
    turmaId: "turma-2",
    grupo: "Grupo 06",
    integrantes: 5,
    status: STATUS_PI.CANCELADO,
    proximaEntrega: null,
  },

  {
    id: "pi-13",
    titulo: "App de alimentação no campus",
    turmaId: "turma-3",
    grupo: "Grupo 01",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(8, "planejamento do banco", "2026-11-19"),
  },
  {
    id: "pi-14",
    titulo: "Gestão de equipes de TCC",
    turmaId: "turma-3",
    grupo: "Grupo 02",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "documentação técnica", "2026-11-25"),
  },
  {
    id: "pi-15",
    titulo: "Sistema de ouvidoria acadêmica",
    turmaId: "turma-3",
    grupo: "Grupo 03",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "testes de usabilidade", "2026-11-28"),
  },
  {
    id: "pi-16",
    titulo: "Painel de indicadores do curso",
    turmaId: "turma-3",
    grupo: "Grupo 04",
    integrantes: 4,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-17",
    titulo: "Plataforma de cursos extracurriculares",
    turmaId: "turma-3",
    grupo: "Grupo 05",
    integrantes: 4,
    status: STATUS_PI.TRANCADO,
    proximaEntrega: null,
  },

  {
    id: "pi-18",
    titulo: "Sistema de empréstimo de equipamentos",
    turmaId: "turma-4",
    grupo: "Grupo 01",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(8, "front-end funcional", "2026-11-20"),
  },
  {
    id: "pi-19",
    titulo: "App de mapa do campus",
    turmaId: "turma-4",
    grupo: "Grupo 02",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "apresentação final", "2026-11-25"),
  },
  {
    id: "pi-20",
    titulo: "Gestão de processos seletivos",
    turmaId: "turma-4",
    grupo: "Grupo 03",
    integrantes: 4,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-21",
    titulo: "Sistema de feedback de disciplinas",
    turmaId: "turma-4",
    grupo: "Grupo 04",
    integrantes: 4,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-22",
    titulo: "Plataforma de networking discente",
    turmaId: "turma-4",
    grupo: "Grupo 05",
    integrantes: 4,
    status: STATUS_PI.CANCELADO,
    proximaEntrega: null,
  },

  {
    id: "pi-23",
    titulo: "Controle de frequência em eventos",
    turmaId: "turma-5",
    grupo: "Grupo 01",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(8, "documentação técnica", "2026-11-21"),
  },
  {
    id: "pi-24",
    titulo: "Sistema de estágios supervisionados",
    turmaId: "turma-5",
    grupo: "Grupo 02",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "documentação técnica", "2026-11-26"),
  },
  {
    id: "pi-25",
    titulo: "Catálogo de empresas parceiras",
    turmaId: "turma-5",
    grupo: "Grupo 03",
    integrantes: 4,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "testes de usabilidade", "2026-11-30"),
  },
  {
    id: "pi-26",
    titulo: "App de saúde e bem-estar",
    turmaId: "turma-5",
    grupo: "Grupo 04",
    integrantes: 4,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-27",
    titulo: "Sistema de gestão de laboratórios",
    turmaId: "turma-5",
    grupo: "Grupo 05",
    integrantes: 4,
    status: STATUS_PI.TRANCADO,
    proximaEntrega: null,
  },

  {
    id: "pi-28",
    titulo: "Plataforma de projetos sociais",
    turmaId: "turma-6",
    grupo: "Grupo 01",
    integrantes: 3,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "apresentação final", "2026-11-23"),
  },
  {
    id: "pi-29",
    titulo: "Sistema de acompanhamento de egressos",
    turmaId: "turma-6",
    grupo: "Grupo 02",
    integrantes: 3,
    status: STATUS_PI.EM_ANDAMENTO,
    proximaEntrega: entrega(9, "repositório organizado", "2026-11-30"),
  },
  {
    id: "pi-30",
    titulo: "App de comunicação institucional",
    turmaId: "turma-6",
    grupo: "Grupo 03",
    integrantes: 3,
    status: STATUS_PI.CONCLUIDO,
    proximaEntrega: null,
  },
  {
    id: "pi-31",
    titulo: "Gestão de documentos acadêmicos",
    turmaId: "turma-6",
    grupo: "Grupo 04",
    integrantes: 3,
    status: STATUS_PI.TRANCADO,
    proximaEntrega: null,
  },
  {
    id: "pi-32",
    titulo: "Sistema de avaliação de PIs",
    turmaId: "turma-6",
    grupo: "Grupo 05",
    integrantes: 3,
    status: STATUS_PI.CANCELADO,
    proximaEntrega: null,
  },
];

export const totalPIs = projetos.length;

export const resumoStatus = ordemStatusPainel.map((status) => ({
  label: statusMeta[status].label,
  value: projetos.filter((projeto) => projeto.status === status).length,
  color: statusMeta[status].color,
}));

export const turmasResumo = turmas.map((turma) => {
  const projetosDaTurma = projetos.filter(
    (projeto) => projeto.turmaId === turma.id,
  );
  const projetosEmAndamento = projetosDaTurma.filter(
    (projeto) => projeto.status === STATUS_PI.EM_ANDAMENTO,
  );

  const proximaEntrega =
    projetosEmAndamento
      .map((projeto) => projeto.proximaEntrega?.data)
      .filter(Boolean)
      .sort()[0] ?? null;

  return {
    id: turma.id,
    nome: `${turma.semestre}º semestre`,
    periodoLetivo: turma.periodoLetivo,
    projetos: projetosEmAndamento.length,
    alunos: projetosDaTurma.reduce(
      (total, projeto) => total + projeto.integrantes,
      0,
    ),
    proximaEntrega,
  };
});

export const entregasProximas = projetos
  .filter(
    (projeto) =>
      projeto.status === STATUS_PI.EM_ANDAMENTO && projeto.proximaEntrega,
  )
  .map((projeto) => {
    const turma = turmas.find((item) => item.id === projeto.turmaId);

    return {
      id: projeto.id,
      numero: projeto.proximaEntrega.numero,
      tipo: projeto.proximaEntrega.tipo,
      data: projeto.proximaEntrega.data,
      semestre: turma.semestre,
    };
  })
  .sort((a, b) => a.data.localeCompare(b.data))
  .slice(0, 5);

/* -------------------------------------------------------------------------- */
/* Detalhes do projeto (dados derivados, usados na página de detalhes)        */
/* -------------------------------------------------------------------------- */

const PROFESSORES = [
  "Cida Zen",
  "Marcos Aurélio",
  "Fernanda Lima",
  "Rogério Alves",
  "Patrícia Souza",
  "Eduardo Tanaka",
];

const NOMES_INTEGRANTES = [
  "Ana Beatriz Souza",
  "Bruno Carvalho",
  "Camila Rodrigues",
  "Daniel Ferreira",
  "Eduarda Santos",
  "Felipe Almeida",
  "Gabriela Martins",
  "Henrique Oliveira",
  "Isabela Costa",
  "João Pedro Lima",
  "Larissa Nunes",
  "Lucas Pereira",
  "Mariana Ribeiro",
  "Matheus Barbosa",
  "Natália Gomes",
  "Otávio Mendes",
  "Paula Freitas",
  "Rafael Cardoso",
  "Sofia Duarte",
  "Thiago Moreira",
  "Vinícius Rocha",
  "Yasmin Prado",
  "Beatriz Faria",
  "Caio Teixeira",
];

const areaPorSemestre = {
  1: {
    tema: "desenvolvimento web",
    tags: ["Web", "Front-end", "React"],
  },
  2: {
    tema: "aplicações web",
    tags: ["Web", "Back-end", "APIs"],
  },
  3: {
    tema: "aplicações mobile",
    tags: ["Mobile", "UX", "Design"],
  },
  4: {
    tema: "gestão de dados",
    tags: ["Dados", "Banco de Dados", "SQL"],
  },
  5: {
    tema: "sistemas corporativos",
    tags: ["Sistemas", "Arquitetura", "Cloud"],
  },
  6: {
    tema: "inovação e impacto social",
    tags: ["Inovação", "Impacto Social", "Pesquisa"],
  },
};

/** Linha do tempo padrão de um P.I, com datas do período letivo atual. */
const LINHA_DO_TEMPO_PADRAO = [
  { titulo: "Reunião de kickoff", data: "2026-08-12", lado: "dir" },
  { titulo: "Entrega do design", data: "2026-09-10", lado: "esq" },
  { titulo: "Entrega da documentação", data: "2026-10-18", lado: "dir" },
  { titulo: "Apresentação final", data: "2026-11-27", lado: "esq" },
];

/**
 * Retorna o projeto com os campos extras exibidos na página de detalhes.
 * Retorna null quando o id não existe (a página mostra o estado vazio).
 */
export function detalhesDoProjeto(id) {
  const projeto = projetos.find((item) => item.id === id);
  if (!projeto) return null;

  const turma = turmas.find((item) => item.id === projeto.turmaId);
  const area = areaPorSemestre[turma.semestre];
  const numero = Number(projeto.id.split("-")[1]);

  const inicioNomes = (numero * 3) % (NOMES_INTEGRANTES.length - 6);
  const membros = Array.from(
    { length: projeto.integrantes },
    (_, indice) =>
      NOMES_INTEGRANTES[
        (inicioNomes + indice) % NOMES_INTEGRANTES.length
      ],
  );

  return {
    ...projeto,
    semestre: turma.semestre,
    periodoLetivo: turma.periodoLetivo,
    professor: PROFESSORES[numero % PROFESSORES.length],
    tema: area.tema,
    tags: area.tags,
    descricao: `${projeto.titulo} é um projeto integrador do ${turma.semestre}º semestre, desenvolvido pelo ${projeto.grupo} com foco em ${area.tema}. A proposta reúne pesquisa, prototipação e implementação de uma solução para um problema real do campus.`,
    repositorio: `https://github.com/pihub-fatec/${projeto.id}`,
    imagem: imagemDoProjeto(projeto),
    integrantesNomes: membros,
    linhaDoTempo: LINHA_DO_TEMPO_PADRAO,
  };
}
