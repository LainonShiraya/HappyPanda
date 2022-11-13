//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ScrollToTop from "./hooks/ScrollToTop";
import MenuPage from './pages/MenuPage/MenuPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />
		  <Route path="menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
