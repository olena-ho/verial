import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyles } from "./styles/global";

export const App = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lng } = useParams();

  useEffect(() => {
    if (!lng) {
      const userLanguage = i18n.language || "es";
      navigate(`/${userLanguage}`);
    } else if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n, navigate]);

  return (
    <>
      <GlobalStyles />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
