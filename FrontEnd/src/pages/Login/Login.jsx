import ButtonPrimary from "../../components/Buttons/ButtonPrimary";
import FundoLogin from "../../components/Login/FundoLogin";
import logoClaro from "../../assets/logo_dsm_fatec_jahu_claro.svg";

const inputClasses =
  "h-14 w-full rounded-md border border-border bg-surface px-4 text-sm text-text-primary transition-colors placeholder:text-text-secondary focus:border-primary focus:outline-none lg:h-auto lg:rounded-none lg:border-x-0 lg:border-t-0 lg:border-b-text-secondary/50 lg:bg-transparent lg:px-1 lg:py-3 lg:focus:border-text-primary";

function Login() {
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
        <form
          className="flex w-full max-w-sm flex-col gap-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <h2 className="text-3xl font-medium lg:text-5xl">Login</h2>
            <p className="mt-2 text-xs text-text-secondary">
              Insira as informações da sua conta
            </p>
          </div>

          <input
            type="email"
            name="email"
            autoComplete="email"
            placeholder="Email"
            className={inputClasses}
          />
          <input
            type="text"
            name="ra"
            inputMode="numeric"
            placeholder="RA"
            className={inputClasses}
          />
          <input
            type="password"
            name="password"
            autoComplete="current-password"
            placeholder="Senha"
            className={inputClasses}
          />

          <ButtonPrimary
            text="Login"
            className="h-12 w-full justify-start! px-5"
          />
        </form>
      </section>
    </main>
  );
}

export default Login;
