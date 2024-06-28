import "@/styles/reset.css";
import "@/styles/global.css";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import MainPage from "@/pages/main";
import SubmitPage from "./pages/submit";

export function App() {
  return (
    <Routes>
      <Route path="/list" element={<MainPage />} />
      <Route path="/detail/:seq" element={<SubmitPage />} />
    </Routes>
  );
}
