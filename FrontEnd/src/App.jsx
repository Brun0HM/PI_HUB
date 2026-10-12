import "./App.css";
import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";

function App() {
  if (window.location.pathname !== "/") {
    return <NotFound />;
  }

  return (
    <>
      <NavBar />
    </>
  );
}

export default App;
