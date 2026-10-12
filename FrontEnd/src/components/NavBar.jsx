import { useState } from "react";

function Navbar() {
  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  const moveUnderline = (event) => {
    const item = event.currentTarget;

    setUnderline({
      left: item.offsetLeft,
      width: item.offsetWidth,
      visible: true,
    });
  };

  return (
    <nav className="bg-black/90 backdrop-blur-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img
            className="max-w-30 hover:scale-105 transition-transform duration-300 ease-in-out"
            src="./src/assets/logo_dsm_fatec_jahu_claro.svg"
          />
        </div>

        <div>
          <ul
            className="relative flex space-x-4 text-white"
            onMouseLeave={() =>
              setUnderline((current) => ({ ...current, visible: false }))
            }
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 h-0.5 bg-pi-red transition-all duration-700 ease-in-out"
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.visible ? 1 : 0,
              }}
            />
            <li
              className="cursor-pointer text-white/60 transition-colors duration-300 hover:text-white"
              onMouseEnter={moveUnderline}
            >
              Inicio
            </li>
            <li
              className="cursor-pointer text-white/60 transition-colors duration-300 hover:text-white"
              onMouseEnter={moveUnderline}
            >
              Sobre o curso
            </li>
            <li
              className="cursor-pointer text-white/60 transition-colors duration-300 hover:text-white"
              onMouseEnter={moveUnderline}
            >
              Grades horárias
            </li>
            <li
              className="cursor-pointer text-white/60 transition-colors duration-300 hover:text-white"
              onMouseEnter={moveUnderline}
            >
              PIs em destaque
            </li>
          </ul>
        </div>

        <div>
          <button className="rounded bg-pi-red px-3 py-2 text-sm text-white hover:bg-red-700 transition-colors duration-300 ease-in-out">
            Ver Projetos
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
