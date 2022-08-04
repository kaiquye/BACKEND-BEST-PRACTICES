import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import TopBar from "./components/topBar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path={"/home"} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
