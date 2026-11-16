import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonOutline from "../Buttons/ButtonOutline";
import logo from "../../assets/logo_dsm_fatec_jahu_claro.svg";
import { useAutenticacao } from "../../hooks/useAutenticacao";
import { sair } from "../../services/auth";

const navItems = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Sobre", href: "/#sobre-curso" },
  { label: "Materias", href: "/#materias" },
  { label: "Destaque", href: "/#destaque" },
];

const CARGO = "Coordenador";

function InfoUsuario({ email, onSair, className = "" }) {
  return (
    <div className={`min-w-0 text-right ${className}`}>
      <p className="truncate text-sm text-text-primary" title={email}>
        {email}
      </p>
      <p className="text-xs text-text-secondary">{CARGO}</p>
      <button
        type="button"
        onClick={onSair}
        className="mt-1 text-xs text-primary-text transition-colors hover:text-primary"
      >
        Sair
      </button>
    </div>
  );
}

function Navbar() {
  const navigate = useNavigate();
  const { autenticado, email } = useAutenticacao();
  const [menuOpen, setMenuOpen] = useState(false);
  const [underline, setUnderline] = useState({
    left: 0,
    width: 0,
    visible: false,
  });

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const moveUnderline = (event) => {
    const item = event.currentTarget;

    setUnderline({
      left: item.offsetLeft,
      width: item.offsetWidth,
      visible: true,
    });
  };

  const closeMenu = () => setMenuOpen(false);

  const handleSair = () => {
    sair();
    closeMenu();
    navigate("/");
  };

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full bg-surface backdrop-blur-md">
        <div className="flex h-16 w-full items-center justify-between gap-4 px-4 sm:px-6 lg:h-37.5 lg:px-20">
          <a
            href="/#inicio"
            aria-label="P.I Hub — início"
            className="shrink-0"
            onClick={closeMenu}
          >
            <img
              className="h-10 w-auto transition-transform duration-300 ease-in-out hover:scale-105 lg:h-32"
              src={logo}
              alt="Logo DSM Fatec Jahu"
            />
          </a>

          <ul
            className="relative hidden items-center gap-6 text-text-primary lg:flex"
            onMouseLeave={() =>
              setUnderline((current) => ({ ...current, visible: false }))
            }
          >
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-1 h-0.5 bg-primary transition-all duration-700 ease-in-out"
              style={{
                left: underline.left,
                width: underline.width,
                opacity: underline.visible ? 1 : 0,
              }}
            />
            {navItems.map((item) => (
              <li
                key={item.label}
                className="cursor-pointer"
                onMouseEnter={moveUnderline}
              >
                <a
                  href={item.href}
                  className="block text-base text-text-secondary transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {autenticado ? (
            <div className="hidden min-w-0 flex-col items-end text-right lg:flex">
              <span
                className="max-w-[320px] truncate text-sm text-text-primary"
                title={email}
              >
                {email}
              </span>
              <span className="text-xs text-text-secondary">Coordenador</span>
              <span
                className="text-xs cursor-pointer hover:text-primary-text transition-colors"
                onClick={handleSair}
              >
                Sair
              </span>
            </div>
          ) : (
            <div className="hidden flex-col items-end gap-2 lg:flex">
              <ButtonPrimary text="Explorar P.Is" to="/login" />
              <ButtonOutline text="Já sou aluno" to="/login" />
            </div>
          )}

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border text-text-secondary transition-colors duration-300 hover:bg-white/5 hover:text-white lg:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <XMarkIcon className="size-6" />
            ) : (
              <Bars3Icon className="size-6" />
            )}
          </button>
        </div>

        {menuOpen && (
          <div
            id="menu-mobile"
            className="animate-nav-drop border-t border-border bg-surface px-4 pt-2 pb-6 backdrop-blur-md lg:hidden"
          >
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={closeMenu}
                    className="block border-b border-white/5 py-3 text-base text-white/70 transition-colors duration-300 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            {autenticado ? (
              <div className="mt-4 border-t border-white/5 pt-4 text-right">
                <p className="truncate text-sm text-text-primary">{email}</p>
                <p className="text-xs text-text-secondary">Coordenador</p>
                <p className="text-xs text-text-secondary" onClick={handleSair}>
                  Sair
                </p>
              </div>
            ) : (
              <div className="mt-4 grid grid-cols-2 gap-3">
                <ButtonPrimary
                  text="Explorar P.Is"
                  className="w-full"
                  to="/explorar"
                  onClick={closeMenu}
                />
                <ButtonOutline
                  text="Já sou aluno"
                  className="w-full"
                  to="/login"
                  onClick={closeMenu}
                />
              </div>
            )}
          </div>
        )}
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}
    </>
  );
}

export default Navbar;
