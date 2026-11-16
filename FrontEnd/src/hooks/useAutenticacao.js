import { useEffect, useState } from "react";
import { estaAutenticado, lerEmail } from "../services/auth";

export function useAutenticacao() {
  const [estado, setEstado] = useState(() => ({
    autenticado: estaAutenticado(),
    email: lerEmail(),
  }));

  useEffect(() => {
    const atualizar = () => {
      setEstado({
        autenticado: estaAutenticado(),
        email: lerEmail(),
      });
    };

    window.addEventListener("storage", atualizar);
    window.addEventListener("pihub:auth", atualizar);

    return () => {
      window.removeEventListener("storage", atualizar);
      window.removeEventListener("pihub:auth", atualizar);
    };
  }, []);

  return estado;
}
