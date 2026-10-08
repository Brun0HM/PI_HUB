<p align="left" style="font-size:28px;"><strong><em>Documentação do PI — P.I Hub</em></strong></p>

**Gestão centralizada e histórico dos Projetos Integradores (PIs)**
Fatec Jahu · Curso de Desenvolvimento de Software Multiplataforma · Equipe04

<details>

  <summary><strong>📑 Sumário</strong></summary>

- [1. Introdução](#1-introdução)
  - [Objetivos](#-objetivos)
  - [Metodologia](#-metodologia)
- [2. Requisitos](#2-requisitos)
  - [Requisitos funcionais](#-requisitos-funcionais)
  - [Requisitos não funcionais](#-requisitos-não-funcionais)
- [3. Modelo de casos de uso](#3-modelo-de-casos-de-uso)
- [4. Modelo do banco de dados](#4-modelo-do-banco-de-dados)
- [5. Banco de dados](#5-banco-de-dados)
- [6. Diagrama de classes](#6-diagrama-de-classes)
- [7. Estudo de viabilidade](#7-estudo-de-viabilidade)
- [8. Regras de negócio (Modelo canvas)](#8-regras-de-negócio-modelo-canvas)
- [9. Design](#9-design)
- [10. Protótipo](#10-protótipo)
- [11. Aplicação](#11-aplicação)
- [12. Considerações finais](#12-considerações-finais)
- [13. Referências](#13-referências)

</details>


---

# 1. Introdução

Atualmente, o acompanhamento dos Projetos Integradores (PIs) desenvolvidos ao longo do curso é fragmentado: informações sobre grupos, temas, integrantes, disciplinas envolvidas e entregas ficam espalhadas em fontes diferentes (por exemplo, planilhas), sem um histórico organizado das mudanças ocorridas durante o semestre. Isso torna o trabalho da coordenação mais lento, pois é preciso navegar projeto a projeto para entender o status de cada grupo e o que mudou ao longo do tempo.

A justificativa do **P.I Hub** parte dessa dificuldade prática, vivenciada pelos próprios autores como alunos do curso. A proposta é oferecer uma ferramenta simples que centralize essas informações em um único lugar, reduzindo o tempo gasto na busca por dados, tornando a evolução de cada PI mais visível e servindo, futuramente, como vitrine dos principais projetos da Fatec Jahu.

## • Objetivos

**Objetivo geral:** desenvolver uma aplicação web que centralize e organize a visualização de todos os Projetos Integradores do curso, permitindo à coordenação acompanhar a evolução dos grupos, temas e entregas ao longo dos semestres.

**Objetivos específicos:**

- Organizar os projetos por semestre, grupo, disciplinas envolvidas, tema e integrantes;
- Exibir uma linha do tempo com o histórico das principais mudanças de cada PI (troca de integrantes, alteração de tema, atualização de entregas);
- Disponibilizar conteúdo institucional (sobre o curso, a Fatec, manual do PI) e uma visão resumida dos principais projetos para divulgação;
- Na fase atual (MVP), oferecer apenas **visualização com dados mockados**; login, CRUD completo e integração com backend ficam para fases futuras.

## • Metodologia

- **Levantamento de requisitos:** reunião e anotações com o coordenador do curso; entrevista com o diretor prevista (15 a 20 min) para entender suas expectativas.
- **Organização da equipe:** board no Trello; rodízio de funções — todos os integrantes atuam em todas as frentes do desenvolvimento.
- **Documentação:** documento do PI no Google Docs (*DocumentaçãoP.I*) e este repositório, seguindo o template de documentação Git.
- **Tecnologias (front-end):** React (Vite) + Bootstrap. Backend e banco de dados ainda não definidos.
- **Design:** base visual gerada com a ferramenta figma, usando as cores do Centro Paula Souza/Fatec.

---

# 2. Requisitos

> Documento de requisitos: descreve o que o sistema deve fazer (requisitos funcionais) e com que qualidade (requisitos não funcionais), servindo de acordo entre equipe e interessados.
> Os RF abaixo são o **pós-entrevista com o coordenador**. O escopo do documento é amplo; o MVP implementa apenas parte deles.

## • Requisitos funcionais

| ID | Requisito | MVP? |
|---|---|---|
| RF1 | Listar disciplinas | ✅ |
| RF2 | Listar PIs, com alunos, responsáveis, temas e linha do tempo | ✅ |
| RF3 | Login com 3 perfis: Coordenador (nível mais alto), Professor e Aluno responsável pelo PI (nível mais baixo) | ❌ futuro |
| RF4 | CRUD de disciplinas (no MVP, a tela de cadastro será apenas exibida, sem funcionar) | ⚠️ somente tela |
| RF5 | CRUD de PIs: título, descrição, membros/função, semestre, ano de ingresso, link do YouTube, repositório GitHub (aluno e Fatec), categoria/área, status (Em andamento / Concluído / Trancado / Cancelado), professor orientador, imagem de capa, data de criação e última atualização (automáticas) | ❌ futuro |
| RF6 | CRUD de atualizações do PI (descrição, data automática, imagem, tags) — apenas o aluno responsável cria pontos na linha do tempo | ❌ futuro |
| RF7 | Emissão de relatórios e busca por semestre / semestre de ingresso (acesso: Coordenador e Professor) | ❌ futuro |
| RF9 | Conteúdo institucional estático: sobre o curso, sobre a Fatec (ou link para o site), Manual do PI, matérias do curso e página com as disciplinas relacionadas ao PI | ✅ |
| — | Avaliação do PI pela banca (dados da equipe, autoavaliação, avaliação do trabalho escrito, da apresentação e da entidade) | ❌ roadmap |

**Observações:**

- Todos os perfis têm acesso de visualização aos PIs.
- Diferenças de permissão entre Coordenador e Professor serão definidas futuramente.
- Relação Grupo–PI é 1:1; hierarquia: **Semestre > PIs > Grupo responsável**.

## • Requisitos não funcionais


- **Produto:** interface responsiva e de navegação simples, com carregamento rápido das listagens.
- **Organização:** desenvolvimento versionado no GitHub; tarefas gerenciadas no Trello.
- **Confiabilidade:** a aplicação não deve expor dados pessoais reais de alunos nesta fase (dados mockados, por proteção de dados).
- **Implementação:** React (Vite) e Bootstrap no front-end.
- **Padrões:** identidade visual do CPS/Fatec.
- **Interoperabilidade:** previsão de importação de dados existentes (planilhas/CSV) em fase futura.

---

# 3. Modelo de casos de uso

*Pendente*

---

# 4. Modelo do banco de dados

*Pendente*

---

# 5. Banco de dados

*Pendente.* Nesta fase, a aplicação usa dados mockados; a escolha do SGBD e do backend ainda não foi feita.

---

# 6. Diagrama de classes

*Pendente*

---

# 7. Estudo de viabilidade

Estudo enquadrado como se o P.I Hub fosse uma empresa, dividido entre a equipe:

| Seção | Responsável |
|---|---|
| 7.1 Viabilidade técnica | Bruno |
| 7.2 Viabilidade financeira | Adrian |
| 7.3 Viabilidade de mercado | Eliandro |
| 7.4 Viabilidade operacional | Paulo |
| 7.5 Conclusão geral | Paulo (consolidação) |

O texto completo de cada seção está na pasta Documentação geral, seção 4.1 a 4.5. 

---

# 8. Regras de negócio (Modelo canvas)

*Pendente*

---

# 9. Design

*Pendente*

---

# 10. Protótipo

*Pendente*

<!-- 🔗 Link do protótipo: *adicionar aqui* -->

---

# 11. Aplicação

*Em desenvolvimento*

- **Stack:** React (Vite) + Bootstrap;
- **Fase atual:** somente visualização, com dados mockados.

```bash
npm install
npm run dev
```

---

# 12. Considerações finais

*Pendente*

<!-- *A preencher ao final do semestre.* Pontos já observados: dados reais de PIs não estão disponíveis à equipe por proteção de dados (uso de mocks); o escopo de requisitos é mais amplo que o MVP; backend ainda indefinido. -->

---

# 13. Referências

*A preencher.*