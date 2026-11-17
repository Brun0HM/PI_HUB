import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import FundoLogin from "../../components/Login/FundoLogin";
import logoClaro from "../../assets/logo_dsm_fatec_jahu_claro.svg";
import { useState } from "react";
import { useNavigate } from "react-router";
import { validateField, validateLogin } from "../../services/Validate";
import { entrar } from "../../services/auth";

const inputClasses =
  "h-14 w-full rounded-md border border-border bg-surface px-4 text-sm text-text-primary transition-colors placeholder:text-text-secondary focus:border-primary focus:outline-none lg:h-auto lg:rounded-none lg:border-x-0 lg:border-t-0 lg:border-b-text-secondary/50 lg:bg-transparent lg:px-1 lg:py-3 lg:focus:border-text-primary";

const formInicial = { email: "", ra: "", senha: "" };

function IconeVoltar({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M19 12H5" />
      <path d="m11 18-6-6 6-6" />
    </svg>
  );
}

function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState(formInicial);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((atual) => ({ ...atual, [name]: value }));

    // limpa o erro do campo assim que o usuário começa a corrigir
    setErrors((atual) => ({ ...atual, [name]: undefined }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const erros = validateLogin(form);
    setErrors(erros);

    if (Object.keys(erros).length > 0) {
      event.currentTarget
        .querySelector(`[name="${Object.keys(erros)[0]}"]`)
        ?.focus();
      return;
    }

    entrar(form.email);
    navigate("/dashboard");
  };

  const handleEmailBlur = () => {
    if (!form.email.trim()) return;

    setErrors((atual) => ({
      ...atual,
      email: validateField("email", form),
    }));
  };

  const handleRaBlur = () => {
    if (!form.ra.trim()) return;

    setErrors((atual) => ({
      ...atual,
      ra: validateField("ra", form),
    }));
  };

  const handleSenhaBlur = () => {
    if (!form.senha.trim()) return;

    setErrors((atual) => ({
      ...atual,
      senha: validateField("senha", form),
    }));
  };

  function voltar() {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  }

  return (
    <main className="min-h-screen bg-bg text-text-primary lg:grid lg:grid-cols-[44%_56%]">
      <section
        id="boas-vindas"
        className="relative flex flex-col justify-center overflow-hidden bg-primary-dark px-12 pt-5 pb-16 lg:order-2 lg:px-16 lg:py-0"
      >
        <div className="absolute inset-0">
          <FundoLogin className="h-full w-full [&>img]:object-top lg:[&>img]:object-right" />
        </div>

        <div className="relative z-10 flex flex-col items-start gap-5 text-white lg:items-center lg:gap-4">
          <img
            src={logoClaro}
            alt="Logo DSM Fatec Jahu"
            className="h-20 w-auto lg:h-52"
          />

          <div className="flex flex-col items-start">
            <h1 className="text-[2rem] leading-[1.1] font-bold lg:text-[4.5rem] lg:leading-[1.05]">
              Bem vindo ao
              <br />
              P.I Hub
            </h1>
            <p className="mt-2 text-xs text-white/80 lg:text-2xl">
              Faça login para acessar sua conta
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center px-12 py-12 lg:order-1 lg:justify-center lg:px-16 lg:py-0">
        <div className="w-full max-w-sm">
          <button
            type="button"
            onClick={voltar}
            className="mb-6 inline-flex h-10 items-center gap-2 rounded-lg px-4 text-sm text-text-secondary transition-colors hover:border-text-secondary hover:bg-surface-raised/30 hover:text-text-primary"
          >
            <IconeVoltar className="h-4 w-4" />
            Voltar
          </button>
          <form
            className="flex w-full flex-col gap-6"
            noValidate
            onSubmit={handleSubmit}
          >
          <div>
            <h2 className="text-3xl font-medium lg:text-5xl">Login</h2>
            <p className="mt-2 text-xs text-text-secondary">
              Insira as informações da sua conta
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              name="email"
              autoComplete="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              onBlur={handleEmailBlur}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? "erro-email" : undefined}
              className={`${inputClasses} ${
                errors.email ? "border-primary!" : ""
              }`}
            />
            {errors.email && (
              <p
                id="erro-email"
                role="alert"
                className="text-xs text-primary-text"
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="text"
              name="ra"
              inputMode="numeric"
              maxLength={13}
              minLength={13}
              placeholder="RA"
              value={form.ra}
              onChange={handleChange}
              onBlur={handleRaBlur}
              aria-invalid={Boolean(errors.ra)}
              aria-describedby={errors.ra ? "erro-ra" : undefined}
              className={`${inputClasses} ${errors.ra ? "border-primary!" : ""}`}
            />
            {errors.ra && (
              <p
                id="erro-ra"
                role="alert"
                className="text-xs text-primary-text"
              >
                {errors.ra}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <input
              type="password"
              name="senha"
              autoComplete="current-password"
              placeholder="Senha"
              required
              minLength={8}
              value={form.senha}
              onChange={handleChange}
              onBlur={handleSenhaBlur}
              aria-invalid={Boolean(errors.senha)}
              aria-describedby={errors.senha ? "erro-senha" : undefined}
              className={`${inputClasses} ${
                errors.senha ? "border-primary!" : ""
              }`}
            />

            {errors.senha && (
              <p
                id="erro-senha"
                role="alert"
                className="text-xs text-primary-text"
              >
                {errors.senha}
              </p>
            )}
          </div>
          <ButtonPrimary
            type="submit"
            text="Login"
            className="h-12 w-full px-5"
          />
          </form>
        </div>
      </section>
    </main>
  );
}

export default Login;
