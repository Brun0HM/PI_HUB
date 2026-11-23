# Requisitos Funcionais — P.I Hub

**Projeto:** P.I Hub — Gestão centralizada e histórico dos Projetos Integradores  
**Curso:** Desenvolvimento de Software Multiplataforma — Fatec Jahu  
**Equipe:** Equipe04  
**Última atualização:** 22/11/2026  
**Escopo deste documento:** requisitos funcionais (RF) do sistema, organizados por grupo, com fase, perfis e atributos.

---

## Sumário

1. [Visão geral](#1-visão-geral)
2. [Convenções](#2-convenções)
3. [Resumo por fase](#3-resumo-por-fase)
4. [RF 1 — Disciplinas](#4-rf-1--disciplinas)
5. [RF 2 — PIs](#5-rf-2--pis)
6. [RF 3 — Atualizações do PI](#6-rf-3--atualizações-do-pi)
7. [RF 4 — Grupos e integrantes](#7-rf-4--grupos-e-integrantes)
8. [RF 5 — Semestres e períodos letivos](#8-rf-5--semestres-e-períodos-letivos)
9. [RF 6 — Acesso e permissões](#9-rf-6--acesso-e-permissões)
10. [RF 7 — Busca e relatórios](#10-rf-7--busca-e-relatórios)
11. [RF 8 — Conteúdo institucional](#11-rf-8--conteúdo-institucional)
12. [RF 9 — Avaliação do PI (roadmap)](#12-rf-9--avaliação-do-pi-roadmap)
13. [Pendências e definições em aberto](#13-pendências-e-definições-em-aberto)

---

## 1. Visão geral

O P.I Hub centraliza a gestão e o histórico dos Projetos Integradores (PIs) do curso de DSM. Este documento reúne os **34 requisitos funcionais** do sistema, distribuídos em **9 grupos**:

| Grupo | Tema | Requisitos |
|---|---|---|
| 1 | Disciplinas | RF01–RF04 |
| 2 | PIs | RF05–RF10 |
| 3 | Atualizações do PI | RF11–RF13 |
| 4 | Grupos e integrantes | RF14–RF19 |
| 5 | Semestres e períodos letivos | RF20–RF22 |
| 6 | Acesso e permissões | RF23–RF26 |
| 7 | Busca e relatórios | RF27–RF28 |
| 8 | Conteúdo institucional | RF29–RF31 |
| 9 | Avaliação do PI | RF32–RF34 |

O escopo do MVP prioriza a consulta pública (sem login): listagem de disciplinas, listagem e detalhe de PIs, linha do tempo e conteúdo institucional. Cadastros, edições, arquivamentos, autenticação e relatórios estão previstos para a Fase 2; avaliações compõem o roadmap.

---

## 2. Convenções

### Fases

| Fase | Significado |
|---|---|
| **MVP** | Entregue na primeira versão do produto |
| **Fase 2** | Previsto para a segunda etapa, após o MVP |
| **Roadmap** | Evolução futura, sem prazo definido |

### Perfis

| Perfil | Descrição |
|---|---|
| **Visitante** | Usuário sem login; acessa apenas conteúdo público |
| **Aluno responsável** | Aluno autenticado, responsável por um PI específico |
| **Professor** | Professor autenticado, responsável por PIs e disciplinas |
| **Coordenador** | Acesso administrativo a todos os PIs e cadastros |

### Privacidade de dados

- O **RA** dos integrantes é visível apenas para **Coordenador** e **Professor**.
- A **Observação** do PI é visível apenas para **usuários autenticados**.
- Visitantes não veem RA nem Observação.

---

## 3. Resumo por fase

| Fase | Quantidade | Requisitos |
|---|---|---|
| **MVP** | 7 | RF01, RF05, RF06, RF07, RF29, RF30, RF31 |
| **Fase 2** | 24 | RF02, RF03, RF04, RF08–RF28 |
| **Roadmap** | 3 | RF32, RF33, RF34 |
| **Total** | **34** | — |

---

## 4. RF 1 — Disciplinas

### RF01. Listar disciplinas (MVP)

- **Descrição:** o sistema deve exibir as disciplinas do curso DSM.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Atributos:** Nome, Descrição, Semestre (curricular), Dia da semana, Horário, Professor.
- **Critério de aceitação:** dado que existam disciplinas cadastradas, quando o usuário acessar a página de disciplinas, então o sistema exibe todas com os atributos acima; se não houver nenhuma, exibe uma mensagem informando isso.

### RF02. Cadastrar disciplina (Fase 2)

- **Descrição:** o sistema deve permitir cadastrar uma disciplina.
- **Perfis:** Coordenador e Professor.
- **Atributos:** os mesmos do RF01.

### RF03. Editar disciplina (Fase 2)

- **Descrição:** o sistema deve permitir editar os dados de uma disciplina.
- **Perfis:** Coordenador e Professor.

### RF04. Arquivar disciplina (Fase 2)

- **Descrição:** o sistema deve permitir arquivar uma disciplina, que deixa de aparecer na lista ativa e permanece armazenada.
- **Perfis:** Coordenador e Professor.

---

## 5. RF 2 — PIs

### RF05. Listar PIs por semestre (MVP)

- **Descrição:** o sistema deve exibir os PIs organizados por semestre, mostrando de cada um o título, o grupo responsável e o status.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Critério de aceitação:** dado que existam PIs cadastrados, quando o usuário escolher um semestre, então o sistema exibe os PIs desse semestre; se não houver nenhum, exibe uma mensagem informando isso.

### RF06. Consultar detalhes do PI (MVP)

- **Descrição:** o sistema deve exibir os dados completos de um PI selecionado, incluindo grupo, integrantes (nome e função), disciplinas envolvidas e links externos. O RA dos integrantes só é exibido a Coordenador e Professor, e a Observação só é exibida a usuários autenticados; sem login, esses dados não aparecem.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Atributos:** Título, Descrição, Observação, Categoria/Área, Status, Semestre vinculado, Grupo responsável, Integrantes (Nome, RA, Função), Semestre de ingresso, Disciplinas envolvidas, Disciplina chave, Professor orientador, Imagem de capa, Link do vídeo (YouTube), Repositório GitHub do aluno, Repositório GitHub da Fatec.
- **Critério de aceitação:** dado um Visitante, quando abrir o detalhe de um PI, então vê os dados públicos e não vê RA nem Observação.

### RF07. Exibir linha do tempo do PI (MVP)

- **Descrição:** o sistema deve exibir, no detalhe do PI, as atualizações registradas em ordem cronológica, da mais recente para a mais antiga.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Atributos:** Tipo do evento, Descrição, Data, Imagem, Tags.
- **Critério de aceitação:** dado um PI com atualizações, quando o usuário abrir o detalhe, então todas as atualizações não arquivadas são listadas na ordem definida; se não houver nenhuma, o sistema exibe uma mensagem informando isso.

### RF08. Cadastrar PI (Fase 2)

- **Descrição:** o sistema deve permitir cadastrar um PI. Cada PI pertence a um único grupo, e um grupo pode ter mais de um PI.
- **Perfis:** Coordenador e Professor.
- **Atributos:** Título, Descrição, Observação, Categoria/Área, Status (Em andamento / Concluído / Trancado / Cancelado), Semestre vinculado, Grupo responsável, Semestre de ingresso, Disciplinas envolvidas, Disciplina chave, Professor orientador, Imagem de capa, Link do vídeo (YouTube), Repositório GitHub do aluno, Repositório GitHub da Fatec (principal), Data de criação (automática), Data da última atualização (automática).

### RF09. Editar PI (Fase 2)

- **Descrição:** o sistema deve permitir editar os dados de um PI. A data da última atualização muda automaticamente.
- **Perfis:** Aluno responsável (somente o seu PI), Professor e Coordenador.
- **Atributos:** os mesmos do RF08.

### RF10. Arquivar PI (Fase 2)

- **Descrição:** o sistema deve permitir arquivar um PI, que deixa de aparecer nas listagens comuns e permanece armazenado com seu histórico.
- **Perfis:** Coordenador e Professor.

---

## 6. RF 3 — Atualizações do PI

### RF11. Cadastrar atualização do PI (Fase 2)

- **Descrição:** o sistema deve permitir registrar uma atualização na linha do tempo do PI.
- **Perfis:** Aluno responsável (somente o seu PI), Professor (PIs que está responsável) e Coordenador (todos os PIs).
- **Atributos:** Tipo do evento (troca de integrante, troca de tema, atualização de entrega ou outro), Descrição da atualização, Data (automática), Imagem, Tags.

### RF12. Editar atualização do PI (Fase 2)

- **Descrição:** o sistema deve permitir editar uma atualização já registrada.
- **Perfis:** Aluno responsável (somente o seu PI), Professor (PIs que está responsável) e Coordenador (todos os PIs).

### RF13. Arquivar atualização do PI (Fase 2)

- **Descrição:** o sistema deve permitir arquivar uma atualização, que permanece registrada no histórico.
- **Perfis:** Aluno responsável (somente o seu PI), Professor (PIs que está responsável) e Coordenador (todos os PIs).

---

## 7. RF 4 — Grupos e integrantes

### RF14. Cadastrar grupo (Fase 2)

- **Descrição:** o sistema deve permitir cadastrar um grupo.
- **Perfis:** Coordenador e Professor.
- **Atributos:** Nome do grupo, Semestre vinculado, Semestre de ingresso.

### RF15. Editar grupo (Fase 2)

- **Descrição:** o sistema deve permitir editar os dados de um grupo.
- **Perfis:** Coordenador e Professor.

### RF16. Arquivar grupo (Fase 2)

- **Descrição:** o sistema deve permitir arquivar um grupo, mantendo seus PIs e seu histórico.
- **Perfis:** Coordenador e Professor.

### RF17. Adicionar integrante ao grupo (Fase 2)

- **Descrição:** o sistema deve permitir adicionar um integrante a um grupo.
- **Perfis:** Coordenador e Professor.
- **Atributos:** Nome, RA (privado, visível apenas a Coordenador e Professor), Função.

### RF18. Editar integrante (Fase 2)

- **Descrição:** o sistema deve permitir editar os dados de um integrante.
- **Perfis:** Coordenador e Professor.
- **Atributos:** os mesmos do RF17.

### RF19. Remover integrante do grupo (Fase 2)

- **Descrição:** o sistema deve permitir remover um integrante do grupo, mantendo o registro dele no histórico do PI.
- **Perfis:** Coordenador e Professor.

---

## 8. RF 5 — Semestres e períodos letivos

### RF20. Cadastrar semestre e período letivo (Fase 2)

- **Descrição:** o sistema deve permitir cadastrar uma turma do curso com seu período letivo.
- **Perfis:** Coordenador e Professor.
- **Atributos:** Número do semestre (1º ao 6º), Período letivo vinculado (ex.: 02/2026).

### RF21. Editar semestre e período letivo (Fase 2)

- **Descrição:** o sistema deve permitir editar os dados de uma turma.
- **Perfis:** Coordenador e Professor.

### RF22. Arquivar semestre e período letivo (Fase 2)

- **Descrição:** o sistema deve permitir arquivar uma turma, mantendo os PIs vinculados a ela.
- **Perfis:** Coordenador e Professor.

---

## 9. RF 6 — Acesso e permissões

### RF23. Autenticar usuário (Fase 2)

- **Descrição:** o sistema deve permitir o login de usuários cadastrados. Com credenciais inválidas, o acesso é negado e uma mensagem de erro é exibida.
- **Perfis:** Aluno responsável, Professor e Coordenador.
- **Atributos:** Usuário, Senha.

### RF24. Encerrar sessão (Fase 2)

- **Descrição:** o sistema deve permitir que o usuário autenticado encerre sua sessão.
- **Perfis:** Aluno responsável, Professor e Coordenador.

### RF25. Cadastrar usuário (Fase 2)

- **Descrição:** o sistema deve permitir cadastrar contas de usuário.
- **Perfis:** Coordenador e Professor.
- **Atributos:** Nome, Usuário, Senha, Perfil (Aluno responsável, Professor ou Coordenador).

### RF26. Controlar acesso por perfil (Fase 2)

- **Descrição:** o sistema deve permitir cada ação apenas aos perfis autorizados, conforme a matriz de permissões abaixo (a definir). Ações não autorizadas são bloqueadas.
- **Perfis:** todos.

> **Matriz de permissões:** [A DEFINIR]

---

## 10. RF 7 — Busca e relatórios

### RF27. Buscar PIs por filtros (Fase 2)

- **Descrição:** o sistema deve permitir buscar PIs por filtros.
- **Perfis:** Coordenador e Professor.
- **Atributos:** Filtro por semestre, Filtro por semestre de ingresso, Filtro por grupo, Filtro por disciplina.

### RF28. Gerar relatório de PIs (Fase 2)

- **Descrição:** o sistema deve permitir gerar relatórios dos PIs.
- **Perfis:** Coordenador e Professor.
- **Atributos:** [A DEFINIR: conteúdo e formato dos relatórios]

---

## 11. RF 8 — Conteúdo institucional

### RF29. Exibir "Sobre o curso" (MVP)

- **Descrição:** o sistema deve exibir uma página estática com informações sobre o curso.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Critério de aceitação:** dado qualquer usuário, quando acessar a página institucional, então o texto "Sobre o curso" é exibido.

### RF30. Exibir "Sobre a Fatec" (MVP)

- **Descrição:** o sistema deve exibir informações sobre a Fatec ou um link para o site da Fatec.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Critério de aceitação:** dado qualquer usuário, quando acessar a página institucional, então o texto ou o link "Sobre a Fatec" é exibido.

### RF31. Exibir Manual do PI (MVP)

- **Descrição:** o sistema deve disponibilizar o Manual do PI para consulta.
- **Perfis:** todos os perfis, inclusive o Visitante (sem login).
- **Critério de aceitação:** dado qualquer usuário, quando acessar a página institucional, então consegue abrir o Manual do PI.


---

## 12. RF 9 — Avaliação do PI (roadmap)

### RF32. Registrar autoavaliação (Roadmap)

- **Descrição:** o sistema deverá permitir, futuramente, que o aluno registre a avaliação da própria equipe.

### RF33. Registrar avaliação da banca (Roadmap)

- **Descrição:** o sistema deverá permitir, futuramente, que a avaliação da banca seja registrada (dados da equipe, trabalho escrito, apresentação e entidade).

### RF34. Consultar avaliações (Roadmap)

- **Descrição:** o sistema deverá permitir, futuramente, a consulta das avaliações.
- **Perfis:** Coordenador e Professor.

---

## 13. Pendências e definições em aberto

| Item | Requisito | Pendência |
|---|---|---|
| Matriz de permissões | RF26 | Definir quais ações cada perfil pode executar |
| Relatórios de PIs | RF28 | Definir conteúdo e formato dos relatórios |
| Manual do PI | RF31 | Confirmar se será PDF ou página |

---

## Documentos relacionados

- [readme.md](./readme.md) — apresentação da documentação
- [DOCUMENTACAO-TECNICA.md](./DOCUMENTACAO-TECNICA.md) — arquitetura, decisões técnicas e fluxos do front-end
