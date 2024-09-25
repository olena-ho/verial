import { GlobalStyles } from "./styles/global";
import { Routes, Route, useParams, useNavigate, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { useEffect } from "react";

const AppContainer = styled.div`
  text-align: center;
`;

function App() {
  const { i18n } = useTranslation();
  const { lng } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const language = lng || "es";
    console.log("Detected URL language:", lng); // Debug output
    console.log("Current i18n language:", i18n.language); // Debug output

    if (!["es", "en"].includes(language)) {
      navigate("/es", { replace: true });
    } else {
      if (i18n.language !== language) {
        console.log("Changing language to:", language); // Debug output
        i18n.changeLanguage(language);
      }
    }
  }, [lng, i18n, navigate]);

  return (
    <AppContainer key={i18n.language}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/:lng" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/es" replace />} />
      </Routes>
    </AppContainer>
  );
}

export default App;
