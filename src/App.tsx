import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import theme from "./styles/MUI/mainTheme";
import HomePage from "./Pages/HomePage/HomePage";
import MenuPage from "./Pages/MenuPage/MenuPage";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
