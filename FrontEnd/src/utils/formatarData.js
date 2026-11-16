export function formatarData(data) {
  if (!data) return "Sem entrega prevista";

  return new Date(`${data}T00:00:00`).toLocaleDateString("pt-BR");
}
