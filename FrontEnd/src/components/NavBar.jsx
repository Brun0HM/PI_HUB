function Navbar() {
  return (
    <nav className="bg-black">
      <div className="container mx-auto flex items-center justify-between">
        <img
          className="max-w-30"
          src="./src/assets/logo_dsm_fatec_jahu_claro.svg"
        ></img>
        <div>
          <button className="rounded bg-pi-red px-3 text-sm py-2 font-bold text-white :">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
