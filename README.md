# P.I Hub

Aplicação web para centralizar e acompanhar o histórico dos Projetos Integradores (PIs) do curso de Desenvolvimento de Software Multiplataforma da Fatec Jahu.

**Equipe04** · 1º semestre/2026

---


## Objetivos

**Geral:** centralizar e organizar a visualização dos PIs do curso, permitindo acompanhar a evolução de grupos, temas e entregas ao longo dos semestres.

**Específicos:**

- Organizar os projetos por semestre, PI, grupo responsável, disciplinas, tema e integrantes.
- Exibir uma linha do tempo com as principais mudanças de cada PI.
- Disponibilizar conteúdo institucional e uma visão resumida dos projetos para divulgação.

---

## Regras de negócio

- Cada PI pertence a um único grupo; um grupo pode ter um ou mais PIs.
- Hierarquia: **Semestre > PIs > Grupo responsável**.
- Nenhum registro é excluído: o sistema apenas **arquiva**, preservando o histórico.
- Visitantes veem apenas dados públicos: não veem o RA dos integrantes nem a Observação do PI.
- O RA é visível apenas a Coordenador e Professor.
- A Observação do PI é visível apenas a usuários autenticados.
- O aluno responsável edita apenas o próprio PI e cadastra atualizações nele. O Professor atua nos PIs sob sua responsabilidade. O Coordenador atua em todos.
- Cadastros de disciplinas, PIs, grupos, semestres e usuários são feitos por Coordenador e Professor.
- As datas de criação e de última atualização do PI são automáticas.
- Diferenças de permissão entre Coordenador e Professor serão definidas futuramente.

Modelo de negócios (Canvas) completo no documento do projeto.

---

## Design

Tema escuro, com vermelho como cor primária, seguindo a identidade visual do CPS/Fatec.

**Paleta principal:** fundo `#0F1115`, superfície `#171A21`, borda `#2B303B`, texto `#E8EAED`, primária `#B51F32`, acento `#34B3A0`.

**Tipografia:** JetBrains Mono, em pesos 400, 500 e 700.

**Botões:** três variações (primário, secundário e discreto), cada uma com quatro estados (padrão, hover, pressionado e desabilitado).

**Protótipo no Figma:** [acessar](https://www.figma.com/design/QsB2He9AJsyCDJTNbQsiu3/P.i_HUB?node-id=0-1&t=JzNuKREdoajqhVaS-1)

---

## Tecnologias

- React com Vite (front-end)
- Tailwind CSS
- ESLint e Prettier
- Git e GitHub
- Trello, para gestão de tarefas (metodologia Scrum)

Backend e banco de dados ainda não definidos.

---

## Estrutura do repositório

```
/
├── frontend/   # aplicação React (Vite)
├── docs/       # documentação do PI em PDF
└── README.md
```

---

## Como executar

Pré-requisito: Node.js instalado.

```bash
cd frontend
npm install
npm run dev
```

---

## Equipe

- Bruno
- Adrian
- Eliandro Gabriel Vigarani Ramos
- Paulo

Todos os integrantes atuaram em todas as frentes do desenvolvimento, com rodízio de funções.
