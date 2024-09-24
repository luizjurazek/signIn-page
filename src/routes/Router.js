import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/LoginPage";
import HomePage from "../pages/homePage/HomePage";
import SheltersPage from "../pages/SheltersPages/SheltersPage";
import ShelterPage from "../pages/SheltersPages/ShelterPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/shelters" element={<SheltersPage />} />
        <Route path="/shelter/:id" element={<ShelterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
