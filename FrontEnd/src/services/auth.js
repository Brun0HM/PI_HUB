const AUTENTICADO_KEY = "pihub:autenticado";
const EMAIL_KEY = "pihub:email";

export function inicializarAutenticacao() {
  if (localStorage.getItem(AUTENTICADO_KEY) === null) {
    localStorage.setItem(AUTENTICADO_KEY, "false");
  }
}

export function estaAutenticado() {
  return localStorage.getItem(AUTENTICADO_KEY) === "true";
}

export function lerEmail() {
  return localStorage.getItem(EMAIL_KEY) ?? "";
}

export function entrar(email) {
  localStorage.setItem(AUTENTICADO_KEY, "true");
  localStorage.setItem(EMAIL_KEY, email.trim());
  window.dispatchEvent(new Event("pihub:auth"));
}

export function sair() {
  localStorage.setItem(AUTENTICADO_KEY, "false");
  localStorage.removeItem(EMAIL_KEY);
  window.dispatchEvent(new Event("pihub:auth"));
}
