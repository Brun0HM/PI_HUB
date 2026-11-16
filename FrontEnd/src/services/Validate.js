export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const RA_REGEX = /^\d{13}$/;
export const SENHA_MIN_LENGTH = 8;

export function validateLogin({ email, ra, senha }) {
  const errors = {};

  if (!email.trim()) {
    errors.email = "Informe seu email.";
  } else if (!EMAIL_REGEX.test(email)) {
    errors.email = "Digite um email válido.";
  }

  if (!ra.trim()) {
    errors.ra = "Informe seu RA.";
  } else if (!RA_REGEX.test(ra)) {
    errors.ra = "Informe um RA válido.";
  }

  if (!senha) {
    errors.senha = "Informe sua senha.";
  } else if (senha.length < SENHA_MIN_LENGTH) {
    errors.senha = `A senha deve ter pelo menos ${SENHA_MIN_LENGTH} caracteres.`;
  }

  return errors;
}

// Opcional: valida só um campo (útil no onBlur)
export function validateField(field, values) {
  return validateLogin(values)[field];
}
