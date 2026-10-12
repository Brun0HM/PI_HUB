import "./App.css";
import NavBar from "./components/NavBar";
import SobreCurso from "./components/SobreCurso";
import NotFound from "./pages/NotFound";

function App() {
  if (window.location.pathname !== "/") {
    return <NotFound />;
  }

  return (
    <>
      <NavBar />

      <SobreCurso />
    </>
  );
}

export default App;
