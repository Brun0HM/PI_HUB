import "./App.css";
import NavBar from "./components/NavBar";
import SobreCurso from "./components/Home/SobreCurso";
import Inicio from "./components/Home/Inicio";
import NotFound from "./pages/NotFound";

function App() {
  if (window.location.pathname !== "/") {
    return <NotFound />;
  }

  return (
    <>
      <NavBar />
      <Inicio />
      <SobreCurso />
    </>
  );
}

export default App;
