//import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import RestaurantsPage from "./pages/RestaurantsPage/RestaurantsPage";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="about-us" element={<AboutUsPage />} />
          <Route path="restaurants" element={<RestaurantsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
