import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <main className="pt-16 lg:pt-[150px]">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
