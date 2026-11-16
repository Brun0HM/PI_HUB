import { BrowserRouter, Route, Routes } from "react-router";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login/Login";
import DashBoard from "../pages/Dashboard/DashBoard";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
