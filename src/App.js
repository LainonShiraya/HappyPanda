//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import ScrollToTop from "./hooks/ScrollToTop";
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
