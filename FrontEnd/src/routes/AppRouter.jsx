import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/Login";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
