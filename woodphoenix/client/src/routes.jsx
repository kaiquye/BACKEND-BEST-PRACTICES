import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/auth";

import Home from "./pages/home";
import Sign from "./pages/login";
import TopBar from "./components/topBar";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <TopBar />
      <AuthContextProvider>
        <Routes>
          <Route path={"/sign"} element={<Sign />} />
          <Route path={"/home"} element={<Home />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
