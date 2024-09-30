import { useEffect } from "react";
import { useParams, Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyles } from "./styles/global";

import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { Services } from "./pages/Services";
import { Resources } from "./pages/Resources";
import { AboutVerial } from "./pages/AboutVerial";
import { Distribution } from "./pages/Distribution";
import { BusinessMgt } from "./pages/BusinessMgt";
import { Hospitality } from "./pages/Hospitality";
import { BookStores } from "./pages/BookStores";
import { Accounting } from "./pages/Accounting";
import { Cloud } from "./pages/Cloud";

export const App = () => {
  const { i18n } = useTranslation();
  const { lng } = useParams();

  useEffect(() => {
    if (i18n.language !== lng) {
      i18n.changeLanguage(lng);
    }
  }, [lng, i18n]);

  const language = i18n.language || "es";

  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to={`/${language}`} replace />} />
        <Route path="/:lng" element={<Outlet />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Outlet />}>
            <Route index element={<Products />} />
            <Route path="business-mgt" element={<BusinessMgt/>} />
            <Route path="hospitality" element={<Hospitality/>} />
            <Route path="bookstores" element={<BookStores/>} />
            <Route path="accounting" element={<Accounting/>} />
            <Route path="cloud" element={<Cloud/>} />
          </Route>

          <Route path="services" element={<Services />} />
          <Route path="resources" element={<Resources />} />
          <Route path="about-verial" element={<AboutVerial />} />
          <Route path="distribution" element={<Distribution />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
