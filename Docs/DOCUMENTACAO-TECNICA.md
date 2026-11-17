# Documentação Técnica — P.I Hub

**Projeto:** P.I Hub — Gestão centralizada e histórico dos Projetos Integradores  
**Curso:** Desenvolvimento de Software Multiplataforma — Fatec Jahu  
**Equipe:** Equipe04  
**Última atualização:** 16/11/2026  
**Escopo deste documento:** front-end do MVP, com dados mockados

---

## Sumário

1. [Visão geral](#1-visão-geral)
2. [Stack tecnológica](#2-stack-tecnológica)
3. [Estrutura de pastas](#3-estrutura-de-pastas)
4. [Arquitetura da aplicação](#4-arquitetura-da-aplicação)
5. [Decisões técnicas](#5-decisões-técnicas)
6. [Fluxos principais](#6-fluxos-principais)
7. [Como executar](#7-como-executar)
8. [Qualidade e validação](#8-qualidade-e-validação)
9. [Limitações e próximos passos](#9-limitações-e-próximos-passos)
10. [Referências](#10-referências)

---

## 1. Visão geral

O **P.I Hub** é uma aplicação web de visualização dos Projetos Integradores (PIs) do curso de DSM. O objetivo é centralizar informações que hoje ficam espalhadas em planilhas: turmas, grupos, integrantes, temas, status, disciplinas e próximas entregas.

Nesta fase, o projeto funciona como **MVP de front-end**:

- não há back-end;
- os dados são mockados em arquivos locais;
- o login é simulado e serve apenas para alternar a interface;
- não há persistência real de usuários, projetos ou entregas.

O MVP prioriza as telas de **Início**, **Login** e **Dashboard**, com foco em responsividade, identidade visual do CPS/Fatec e organização dos dados.

### O que já existe

| Área | Situação |
|---|---|
| Home institucional | Hero, apresentação do curso, galeria e grade de horários |
| Login | Validação de email, RA e senha; estado salvo no `localStorage` |
| Navbar | Alterna entre visitante e usuário autenticado |
| Dashboard | Status dos PIs, próximas entregas e carrossel de turmas |
| Dados | Universo único mockado em `src/data/pihub.js` |
| Responsividade | Testado em 320, 390, 768, 1024 e 1440px |

---

## 2. Stack tecnológica

| Camada | Tecnologia | Versão | Papel |
|---|---|---|---|
| Interface | React | 19.2.8 | Componentização e estado |
| Build/dev server | Vite | 8.3.0 | Build rápido e HMR |
| Estilo | Tailwind CSS | 4.3.3 | Utilitários e design tokens |
| Integração Tailwind | `@tailwindcss/vite` | 4.3.3 | Compilação no Vite |
| Rotas | `react-router` | 8.4.0 | Navegação SPA |
| Ícones | `@heroicons/react` | 2.2.0 | Ícones de interface |
| Qualidade | ESLint | 10.10.0 | Análise estática |
| Compilador | React Compiler via Babel | — | Otimizações automáticas |

### O que não é usado nesta fase

- back-end, banco de dados ou API;
- Axios, React Query ou gerenciamento global de estado;
- biblioteca de testes automatizados;
- autenticação real ou controle de sessão no servidor.

---

## 3. Estrutura de pastas

```text
PI_HUB/
├── Docs/
│   ├── readme.md
│   └── DOCUMENTACAO-TECNICA.md   # este documento
├── FrontEnd/
│   ├── public/
│   ├── src/
│   │   ├── assets/               # logos, imagens do curso e imagens do hero
│   │   ├── components/
│   │   │   ├── Buttons/          # ButtonPrimary, ButtonOutline, BotaoAvancar
│   │   │   ├── Dashboard/        # StatusBar, TurmaCard
│   │   │   ├── Inputs/           # InputPrimary
│   │   │   ├── Layout/           # Layout com Navbar + Outlet
│   │   │   ├── Login/            # FundoLogin
│   │   │   └── Navbar/           # NavBar responsiva
│   │   ├── data/
│   │   │   └── pihub.js          # turmas, projetos e dados derivados
│   │   ├── hooks/
│   │   │   ├── useAutenticacao.js
│   │   │   └── useSetasDeRolagem.js
│   │   ├── pages/
│   │   │   ├── Dashboard/
│   │   │   │   └── DashBoard.jsx
│   │   │   ├── Home/
│   │   │   │   ├── Hero.jsx
│   │   │   │   ├── SobreCurso.jsx
│   │   │   │   └── GradeHorarios.jsx
│   │   │   ├── Login/
│   │   │   │   └── Login.jsx
│   │   │   └── NotFound.jsx
│   │   ├── routes/
│   │   │   └── AppRouter.jsx
│   │   ├── services/
│   │   │   ├── Validate.js       # regras de validação do login
│   │   │   └── auth.js           # estado de autenticação no localStorage
│   │   ├── styles/
│   │   │   ├── index.css         # importa Tailwind + estilos do projeto
│   │   │   ├── theme.css         # design tokens no @theme
│   │   │   ├── animations.css    # keyframes e utilities de animação
│   │   │   └── utilities.css     # utility scrollbar-hidden
│   │   ├── utils/
│   │   │   └── formatarData.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── README.md
└── package-lock.json
```

### Responsabilidade de cada camada

| Camada | Responsabilidade |
|---|---|
| `pages/` | Monta as telas e orquestra os componentes |
| `components/` | Componentes reutilizáveis de UI |
| `hooks/` | Comportamentos reutilizáveis com estado/efeitos |
| `services/` | Regras de validação e autenticação simulada |
| `data/` | Universo de dados mockados e seletores derivados |
| `styles/` | Tokens, animações e utilities globais |
| `utils/` | Funções puras compartilhadas |
| `routes/` | Definição das rotas da SPA |

---

## 4. Arquitetura da aplicação

A aplicação é uma **SPA React** renderizada no navegador. O ponto de entrada é:

```text
main.jsx
  └── App.jsx
        └── AppRouter.jsx
              ├── /login      → Login
              ├── /           → Layout → Home
              ├── /dashboard  → Layout → DashBoard
              └── *           → NotFound
```

### Rotas

| Rota | Tela | Usa Layout/Navbar? |
|---|---|---|
| `/` | Home | Sim |
| `/login` | Login | Não |
| `/dashboard` | Dashboard | Sim |
| `*` | NotFound | Não |

O `Layout` existe para compartilhar a navbar entre a Home e o Dashboard:

```jsx
function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-16 lg:pt-[150px]">
        <Outlet />
      </main>
    </>
  );
}
```

O Login fica fora do Layout porque a tela tem uma composição própria, em duas colunas, sem a navbar pública.

### Fluxo de dados do dashboard

```text
src/data/pihub.js
  ├── turmas
  ├── projetos
  │
  ├── resumoStatus       → StatusBar
  ├── turmasResumo       → TurmaCard
  └── entregasProximas   → lista de próximas entregas
```

Nenhum widget do dashboard mantém sua própria cópia dos dados. Todos leem o mesmo módulo de dados.

---

## 5. Decisões técnicas

### 5.1 SPA com React + Vite

**Decisão:** usar React com Vite, sem framework de servidor.

**Motivo:** o MVP é uma aplicação estática de visualização, com dados locais. Vite oferece build rápido, HMR e configuração simples.

**Consequência:** a aplicação pode ser hospedada em qualquer serviço de arquivos estáticos. A troca para uma API real pode ser feita depois, mantendo as telas.

---

### 5.2 Tailwind CSS v4 com design tokens em CSS

**Decisão:** definir as cores, fontes e superfícies em `src/styles/theme.css` usando o `@theme` do Tailwind v4, em vez de um `tailwind.config.js`.

**Motivo:** centralizar a identidade visual e permitir o uso de classes como `bg-surface`, `text-text-primary`, `border-border` e `bg-primary`.

**Consequência:** qualquer ajuste de cor ou tipografia acontece em um único arquivo. Os componentes não carregam valores hexadecimais repetidos, com exceção de alguns estilos pontuais.

**Tokens principais:**

| Token | Uso |
|---|---|
| `--color-bg` | Fundo das telas |
| `--color-surface` | Cards e painéis |
| `--color-surface-raised` | Hover e estados elevados |
| `--color-border` | Bordas e divisórias |
| `--color-text-primary` | Texto principal |
| `--color-text-secondary` | Texto de apoio |
| `--color-primary` | Ação principal |
| `--color-status-in-progress` | Status “Em andamento” |
| `--color-status-completed` | Status “Concluído” |
| `--color-status-locked` | Status “Trancado” |
| `--color-status-archived` | Status “Cancelado” |

---

### 5.3 Rotas com React Router e Layout compartilhado

**Decisão:** usar `BrowserRouter`, `Routes` e `Outlet`.

**Motivo:** a navbar e o espaçamento do topo são iguais na Home e no Dashboard. O Layout evita duplicação.

**Consequência:** telas que não devem usar a navbar pública, como Login e NotFound, ficam fora do Layout.

---

### 5.4 Universo único de dados mockados

**Decisão:** concentrar turmas, projetos e dados derivados em `src/data/pihub.js`.

**Motivo:** antes, status, entregas e turmas eram listas separadas com números e datas incoerentes. O dashboard podia mostrar 100 PIs nos status e apenas 32 projetos nas turmas. Agora todos os widgets derivam do mesmo universo.

**Modelo atual:**

| Entidade | Conteúdo |
|---|---|
| Turmas | 6 turmas, do 1º ao 6º semestre |
| Período letivo | `02/2026` |
| Projetos | 32 PIs |
| Alunos | 135 integrantes |
| Status | 17 em andamento, 8 concluídos, 4 trancados e 3 cancelados |

**Consequência:** alterar um projeto atualiza automaticamente:

- a contagem das barras de status;
- a quantidade de projetos em andamento de cada turma;
- a próxima entrega de cada turma;
- a lista de próximas entregas.

O arquivo também segue a distinção do documento de requisitos:

- **semestre:** posição da turma no curso, de 1º a 6º;
- **período letivo:** semestre do calendário, como `02/2026`.

---

### 5.5 Seletores derivados em vez de dados duplicados

**Decisão:** exportar visões calculadas a partir das entidades:

```js
export const resumoStatus = ...
export const turmasResumo = ...
export const entregasProximas = ...
```

**Motivo:** evitar que cada componente faça sua própria contagem ou filtro e acabe divergindo.

**Consequência:**

- `resumoStatus` conta os projetos por status;
- `turmasResumo` calcula projetos ativos, alunos e a menor data de entrega de cada turma;
- `entregasProximas` filtra projetos em andamento, ordena por data e limita a cinco itens.

---

### 5.6 Autenticação simulada com `localStorage`

**Decisão:** representar o login com duas chaves no `localStorage`:

```text
pihub:autenticado = "true" | "false"
pihub:email       = email digitado no login
```

**Motivo:** o MVP não tem back-end. O estado precisa apenas alternar a navbar e sobreviver a um recarregamento.

**Implementação:**

| Arquivo | Papel |
|---|---|
| `services/auth.js` | `entrar`, `sair`, `estaAutenticado`, `lerEmail` e inicialização |
| `hooks/useAutenticacao.js` | Lê o estado e escuta mudanças |
| `main.jsx` | Garante que a chave exista como `"false"` na primeira visita |

O `entrar(email)` grava `"true"` e o email, e dispara o evento `pihub:auth`:

```js
window.dispatchEvent(new Event("pihub:auth"));
```

O `sair()` grava `"false"`, remove o email e dispara o mesmo evento.

**Consequência:** a navbar atualiza sem recarregar a página e o estado persiste entre recarregamentos.

> **Importante:** isso é apenas uma simulação de interface. Não é autenticação segura, não valida credenciais no servidor e não protege rotas. A rota `/dashboard` continua acessível diretamente pela URL. A proteção real deve ser implementada com back-end e sessão em uma fase futura.

---

### 5.7 Validação do login

**Decisão:** manter as regras em `src/services/Validate.js` e aplicá-las no envio do formulário.

**Regras atuais:**

| Campo | Regra |
|---|---|
| Email | Obrigatório e com formato `nome@dominio.com` |
| RA | Obrigatório e com exatamente 13 dígitos |
| Senha | Obrigatória e com pelo menos 8 caracteres |

O botão de login é um `submit` real. O fluxo é:

1. `validateLogin(form)` retorna os erros;
2. se houver erros, eles aparecem abaixo dos campos e o primeiro campo inválido recebe foco;
3. se não houver erros, `entrar(form.email)` é chamado e o usuário é levado para `/dashboard`.

**Consequência:** qualquer email/RA/senha que apenas respeite o formato é aceito. Não há verificação de credenciais reais.

---

### 5.8 Navbar com estado de visitante e usuário autenticado

**Decisão:** a navbar lê `useAutenticacao()` e renderiza dois estados.

**Visitante (`false`):**

- “Explorar P.Is”;
- “Já sou aluno”.

**Autenticado (`true`):**

- email salvo no login;
- cargo fixo;
- botão “Sair”.

O bloco do usuário foi extraído para o componente `InfoUsuario`, usado tanto no desktop quanto no menu mobile. Isso evita o problema de alterar um bloco e o outro continuar com o valor antigo.

O cargo é definido por uma constante no topo do arquivo:

```js
const CARGO = "Coordenador";
```

Para mudar o cargo exibido, basta alterar essa linha.

O logout chama:

```js
const handleSair = () => {
  sair();
  closeMenu();
  navigate("/");
};
```

Assim, o estado volta para `false`, o email é removido, a navbar troca para os botões públicos e o usuário retorna para a Home.

---

### 5.9 Componentização e reuso

**Decisão:** extrair comportamentos repetidos para hooks e componentes.

| Item | Reuso |
|---|---|
| `useSetasDeRolagem` | Detecta overflow, posição e rolagem suave |
| `BotaoAvancar` | Seta que avança e, no fim, volta ao início |
| `TurmaCard` | Card de turma no dashboard |
| `StatusBar` | Barra percentual com `role="progressbar"` |
| `formatarData` | Formatação de data compartilhada |
| `ButtonPrimary` / `ButtonOutline` | Botões institucionais |

O carrossel de turmas e o carrossel de disciplinas usam a mesma lógica. A diferença fica apenas na largura dos itens e no conteúdo.

---

### 5.10 Responsividade e carrosséis

**Decisão:** layout mobile-first com Tailwind e carrosséis horizontais com `overflow-x-auto` e `scrollTo({ behavior: "smooth" })`.

**Dashboard:**

- 2 cards de turma visíveis no mobile;
- 4 cards visíveis no desktop;
- a seta fica sobreposta ao bloco, com gradiente para não cobrir o conteúdo;
- a seta avança um card por clique e vira “voltar ao início” no fim.

**Home:**

- abas de semestre e tabela de horários usam o mesmo hook;
- a tabela tem uma seta sobreposta no mobile;
- no desktop, as abas viram uma grade de 6 colunas.

**Consequência:** o comportamento é consistente entre as telas e não depende de bibliotecas externas de carrossel.

---

### 5.11 Datas

**Decisão:** armazenar datas no formato `YYYY-MM-DD` e formatar para `pt-BR` na interface.

A função compartilhada é:

```js
new Date(`${data}T00:00:00`).toLocaleDateString("pt-BR");
```

O `T00:00:00` evita que o fuso horário altere o dia exibido.

No universo mockado, as entregas do dashboard estão entre `17/11/2026` e `30/11/2026`, coerentes com o período letivo `02/2026`.

---

### 5.12 Acessibilidade

**Decisões já aplicadas:**

- barras de status com `role="progressbar"`, `aria-valuenow`, `aria-valuemin`, `aria-valuemax` e `aria-valuetext`;
- botões com `aria-label`;
- menu mobile com `aria-expanded` e `aria-controls`;
- imagens com texto alternativo;
- foco automático no primeiro campo inválido do login;
- datas formatadas e não apenas cores para representar status.

**Pontos ainda em aberto:**

- os inputs de busca do dashboard usam `focus:outline-none` sem um anel de foco visível;
- o contraste do cinza de “Cancelado” pode ficar abaixo do recomendado para texto pequeno;
- o carrossel ainda não tem uma região semanticamente rotulada;
- textos truncados no mobile não têm uma alternativa expandida.

---

### 5.13 Convenções

- Componentes em PascalCase;
- hooks com prefixo `use`;
- funções e variáveis de domínio em português (`turmas`, `projetos`, `entregas`);
- nomes técnicos de API/CSS em inglês (`onClick`, `className`, `color`);
- estilos por utilitários Tailwind, sem CSS modules;
- dados mockados separados da camada visual.

---

## 6. Fluxos principais

### 6.1 Login

```text
[Login]
   │ submit
   ▼
validateLogin(form)
   ├── erros → mensagens + foco no primeiro campo inválido
   └── ok
         ▼
     entrar(email)
         ├── localStorage["pihub:autenticado"] = "true"
         ├── localStorage["pihub:email"] = email
         └── evento "pihub:auth"
         ▼
     navigate("/dashboard")
         ▼
     Navbar lê useAutenticacao()
         └── true → email + cargo + Sair
```

### 6.2 Logout

```text
[Sair]
   ▼
sair()
   ├── localStorage["pihub:autenticado"] = "false"
   ├── remove localStorage["pihub:email"]
   └── evento "pihub:auth"
   ▼
useAutenticacao atualiza
   ▼
Navbar volta para "Explorar P.Is" e "Já sou aluno"
   ▼
navigate("/")
```

### 6.3 Dashboard

```text
pihub.js
   ├── resumoStatus ───────► StatusBar (percentual + contagem)
   ├── turmasResumo ───────► TurmaCard (projetos, alunos, próxima entrega)
   └── entregasProximas ───► lista "O prazo de entrega está próximo"
```

### 6.4 Home

```text
Home
   ├── Hero            (#inicio)
   ├── SobreCurso      (#sobre-curso)
   └── GradeHorarios   (#materias)
```

A navbar aponta para `/#inicio`, `/#sobre-curso`, `/#materias` e `/#destaque`. A última âncora ainda não possui uma seção correspondente.

---

## 7. Como executar

A pasta da aplicação é `FrontEnd` (com F e E maiúsculos).

```bash
cd FrontEnd
npm install
npm run dev
```

Scripts disponíveis:

| Comando | Função |
|---|---|
| `npm run dev` | Inicia o Vite em modo desenvolvimento |
| `npm run build` | Gera a build de produção |
| `npm run preview` | Pré-visualiza a build |
| `npm run lint` | Executa o ESLint |

Se o PowerShell bloquear `npm.ps1`, use:

```powershell
npm.cmd run dev
```

---

## 8. Qualidade e validação

### ESLint

O projeto usa ESLint 10 com plugins para React Hooks e React Refresh. A validação é feita com:

```bash
npm run lint
```

### Testes manuais já realizados

| Área | Verificação |
|---|---|
| Login | Email, RA e senha inválidos; foco no primeiro erro; login válido |
| Navbar | Estado visitante, estado autenticado, recarregamento e logout |
| Dashboard | Barras, cards, carrossel e datas |
| Responsividade | 320, 390, 768, 1024 e 1440px |
| Console | Sem erros nas telas verificadas |

Não há suíte de testes automatizados nesta fase.

---

## 9. Limitações e próximos passos

### Limitações atuais

| Item | Impacto |
|---|---|
| `/dashboard` não é protegido | Qualquer pessoa acessa pela URL, mesmo sem login |
| `localStorage` não é autenticação | O estado pode ser alterado manualmente no navegador |
| Dados estáticos | Datas e projetos não vêm de uma API |
| Botões e buscas do dashboard sem ação | “Criar Novo Grupo/Projeto” e os campos de busca ainda não executam nada |
| Destino de “Explorar P.Is” inconsistente | No desktop aponta para `/login`; no mobile aponta para `/explorar`, rota ainda não implementada |
| Âncora `#destaque` ausente | O link “Destaque” não encontra uma seção correspondente |
| Sem estados de carregamento/vazio/erro | A interface não cobre falha ou ausência de dados |
| Sem testes automatizados | A validação depende de teste manual |

### Próximos passos recomendados

1. Proteger rotas administrativas com sessão real.
2. Substituir o mock por uma API e manter os seletores como camada de adaptação.
3. Implementar busca e filtros no dashboard.
4. Criar estados de carregamento, vazio e erro.
5. Unificar os destinos dos CTAs da navbar.
6. Revisar foco visível, contraste e semântica do carrossel.
7. Adicionar testes de componentes e fluxos críticos.

---

## 10. Referências

- `README.md` — documentação geral do projeto.
- `Docs/readme.md` — índice da pasta de documentação.
- Documento da Aplicação Web (PDF) — requisitos, regras de negócio, viabilidade e design.
- [Protótipo no Figma](https://www.figma.com/design/QsB2He9AJsyCDJTNbQsiu3/P.i_HUB?node-id=0-1&t=JzNuKREdoajqhVaS-1)
- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Heroicons](https://heroicons.com/)
