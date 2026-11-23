# Design — P.I Hub

**Projeto:** P.I Hub — Gestão centralizada e histórico dos Projetos Integradores  
**Curso:** Desenvolvimento de Software Multiplataforma — Fatec Jahu (Centro Paula Souza)  
**Equipe:** Equipe04  
**Semestre:** 1º semestre de 2026  
**Fase atual:** MVP, somente visualização, com dados mockados

---

## 1. Visão geral do design

O P.I Hub usa tema escuro com vermelho como cor primária, seguindo a identidade visual do CPS/Fatec. A interface foi desenhada para leitura prolongada de dados acadêmicos, com hierarquia clara entre fundo, superfícies, bordas e textos, e uso do vermelho restrito a ações e elementos de marca.

A identidade tipográfica é construída com JetBrains Mono como família única, inclusive em identificadores como RA, datas e tags. A paleta combina superfícies em tons de cinza-azulado com cores de status distintas para Em andamento, Concluído, Trancado e Cancelado.

O MVP prioriza a consulta pública de projetos, com dados mockados. O front-end é desenvolvido em React com Vite; biblioteca de estilo: [PENDENTE: confirmar Tailwind CSS ou Chakra UI]. Os seis fluxos foram prototipados no Figma: https://www.figma.com/design/QsB2He9AJsyCDJTNbQsiu3/P.i_HUB?node-id=0-1&t=JzNuKREdoajqhVaS-1

## 2. Paleta de cores

| Nome | Hex | Uso |
|---|---|---|
| Fundo | `#0F1115` | Fundo geral das telas |
| Superfície | `#171A21` | Cards e painéis |
| Superfície elevada | `#20242D` | Hover discreto e estado desabilitado |
| Borda | `#2B303B` | Contornos, divisores e campos |
| Texto principal | `#E8EAED` | Títulos e conteúdo de maior hierarquia |
| Texto secundário | `#9AA1AE` | Textos de apoio, legendas e placeholders |
| Primária | `#B51F32` | Ações principais e identidade da marca |
| Primária hover | `#D02A40` | Hover de ações primárias |
| Primária escura | `#8A1726` | Estado pressionado de ações primárias |
| Vermelho para texto | `#E5596B` | Rótulos de botões de contorno e discretos |
| Acento verde-azulado | `#34B3A0` | Destaques e indicadores complementares |
| Status Em andamento | `#4C8DFF` | Indicador do status Em andamento |
| Status Concluído | `#3FB950` | Indicador do status Concluído |
| Status Trancado | `#E3A92B` | Indicador do status Trancado |
| Status Cancelado | `#6B7280` | Indicador do status Cancelado |

## 3. Tipografia

**Família:** JetBrains Mono (única família do projeto). Também usada em identificadores como RA, datas e tags.

| Peso | Uso |
|---|---|
| 400 (Regular) | Corpo de texto, labels e campos |
| 500 (Medium) | Subtítulos, botões e ações |
| 700 (Bold) | Títulos, destaques e navegação |

Rótulos de botões usam JetBrains Mono 500 em 14/20.

## 4. Botões

| Variação | Padrão | Hover | Pressionado | Desabilitado |
|---|---|---|---|---|
| Primário | Fundo `#B51F32` | Fundo `#D02A40` | Fundo `#8A1726` | Fundo `#20242D`; rótulo [PENDENTE: cor do texto] |
| Secundário (contorno) | Contorno `#B51F32`; rótulo `#E5596B` | [PENDENTE: aparência do hover] | [PENDENTE: aparência do pressionado] | Fundo `#20242D`; rótulo [PENDENTE: cor do texto] |
| Discreto | Rótulo `#E5596B` | Fundo `#20242D` | [PENDENTE: aparência do pressionado] | Fundo `#20242D`; rótulo [PENDENTE: cor do texto] |

**Especificações:** altura 48 px, raio 8 px, padding horizontal 22 px, largura mínima 164 px, rótulo JetBrains Mono 500 (14/20).

**Regra de uso:** um botão primário por contexto.

## 5. Telas

| Tela | Finalidade | Escopo |
|---|---|---|
| Institucional/Início | Apresentar o curso, o projeto e os destaques institucionais | MVP |
| Login | Autenticar aluno e administrador na mesma tela | Fase 2 |
| Dashboard Admin | Centralizar a visão administrativa dos PIs | Fase 2 |
| Explorar projetos | Listar os PIs organizados por semestre | MVP |
| Projeto detalhes | Exibir os dados do PI e a linha do tempo | MVP |
| Cadastrar projeto | Registrar um novo PI | Fase 2 |

## 6. Modelo de navegação

```text
Home → Explorar PIs → Detalhe do P.I (linha do tempo)   (sem login)
Home → Login                                            (aluno e admin na mesma tela)
Aluno → Alterar informação do PI → Cadastrar atualização → Detalhe do P.I
Admin → Dashboard Admin → Cadastrar PI → Alterar informação do PI
```

## 7. Logo

**Arquivo:** `frontend/src/assets/logo_dsm_fatec_jahu_claro.svg`

**Uso:** utilizar esta versão clara do logo sobre os fundos escuros da aplicação, preservando a proporção original.
