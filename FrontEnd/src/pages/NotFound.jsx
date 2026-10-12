function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#121212] px-6 py-12 text-white">
      <section className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-white/5 px-6 py-12 text-center shadow-2xl sm:px-12">
        <span className="absolute -right-10 -top-16 h-40 w-40 rounded-full bg-pi-red/20 blur-3xl" />
        <span className="absolute -bottom-20 -left-10 h-40 w-40 rounded-full bg-pi-red/10 blur-3xl" />

        <div className="relative">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-pi-red">
            Erro
          </p>
          <h1 className="text-8xl font-black tracking-tight text-white sm:text-9xl">
            404
          </h1>
          <h2 className="mt-4 text-2xl font-bold sm:text-3xl">
            Página não encontrada
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-gray-400 sm:text-base">
            A página que você está procurando não existe ou foi movida para
            outro endereço.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex rounded-lg bg-pi-red px-5 py-3 font-semibold text-white transition hover:bg-pi-red/80 focus:outline-none focus:ring-2 focus:ring-pi-red focus:ring-offset-2 focus:ring-offset-[#121212]"
          >
            Voltar para o início
          </a>
        </div>
      </section>
    </main>
  );
}

export default NotFound;
