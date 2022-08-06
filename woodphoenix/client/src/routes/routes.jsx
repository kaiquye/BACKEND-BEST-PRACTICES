import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "../context/auth";

import Home from "../pages/home";
import Sign from "../pages/login";
import TopBar from "../components/topBar";
import { AuthRoutes } from "./authRoutes";
import RegisterCollaborator from "../pages/registerCollaborator";
import TeamMessage from "../pages/teamMessage";
import NewMessage from "../pages/newMessages";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <TopBar />
        <Routes>
          <Route path={"/"} element={<Sign />} />
          <Route path={"/register"} element={<RegisterCollaborator />} />
          <Route path={"/team/message"} element={<TeamMessage />} />
          <Route path={"/new/message"} element={<NewMessage />} />
          <Route
            path={"/home"}
            element={<AuthRoutes Children={Home} acess={"COLLABORATOR"} />}
          />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
