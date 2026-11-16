import { useLayoutEffect, useState } from "react";

export function useSetasDeRolagem(areaRef, seletorPasso) {
  const [estado, setEstado] = useState({ noFim: false, temOverflow: false });

  useLayoutEffect(() => {
    const area = areaRef.current;
    if (!area) return undefined;

    const atualizar = () => {
      const limite = area.scrollWidth - area.clientWidth;
      const noFim = area.scrollLeft >= limite - 8;
      const temOverflow = limite > 24;

      setEstado((atual) =>
        atual.noFim === noFim && atual.temOverflow === temOverflow
          ? atual
          : { noFim, temOverflow },
      );
    };

    atualizar();
    area.addEventListener("scroll", atualizar, { passive: true });
    window.addEventListener("resize", atualizar);

    const observador = new ResizeObserver(atualizar);
    observador.observe(area);
    if (area.firstElementChild) observador.observe(area.firstElementChild);

    return () => {
      area.removeEventListener("scroll", atualizar);
      window.removeEventListener("resize", atualizar);
      observador.disconnect();
    };
  }, [areaRef]);

  const avancar = () => {
    const area = areaRef.current;
    if (!area) return;

    const limite = area.scrollWidth - area.clientWidth;
    if (limite <= 24) return;

    if (area.scrollLeft >= limite - 8) {
      area.scrollTo({ left: 0, behavior: "smooth" });
      return;
    }

    const base = area.getBoundingClientRect().left;
    const posicoes = [...area.querySelectorAll(seletorPasso)]
      .map(
        (item) => item.getBoundingClientRect().left - base + area.scrollLeft + 1,
      )
      .sort((a, b) => a - b);

    const indiceAtual = posicoes.findIndex(
      (posicao) => posicao >= area.scrollLeft - 4,
    );
    const proximo = posicoes[indiceAtual + 1];

    area.scrollTo({
      left: Math.min(proximo ?? limite, limite),
      behavior: "smooth",
    });
  };

  return { ...estado, avancar };
}
