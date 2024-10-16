import { useEffect } from "react";
import { useParams, Route, Routes, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { GlobalStyles } from "./styles/global";

import { Home } from "./pages/Home";
import { Solutions } from "./pages/Solutions";
import { Services } from "./pages/Services";
import { AboutVerial } from "./pages/AboutVerial";
import { Distribution } from "./pages/Distribution";
import { BusinessMgt } from "./pages/BusinessMgt";
import { Hospitality } from "./pages/Hospitality";
import { BookStores } from "./pages/BookStores";
import { Accounting } from "./pages/Accounting";
import { Cloud } from "./pages/Cloud";
import { KitDigital } from "./pages/KitDigital";
import { FAQs } from "./pages/FAQs";
import { CodeOfEthics } from "./pages/CodeOfEthics";
import { DocumentsToDownload } from "./pages/Documents";
import { Restaurants } from "./pages/Restaurantes";
import { Spa } from "./pages/Spa";
import { Camping } from "./pages/Camping";

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
          <Route path="soluciones-y-productos" element={<Solutions />} />
          <Route path="gestion-comercial" element={<BusinessMgt />} />


          <Route path="gestion-de-hoteles" element={<Hospitality />} />
          <Route path="gestion-de-restaurantes-y-pubs" element={<Restaurants />} />
          <Route path="spa-balneario" element={<Spa />} />
          <Route path="gestion-de-camping" element={<Camping />} />
          <Route path="gestion-de-librerias" element={<BookStores />} />
          <Route path="programa-de-contabilidad" element={<Accounting />} />
          <Route path="cloud" element={<Cloud />} />

          <Route path="servicios" element={<Services />} />
          <Route path="kit-digital" element={<KitDigital />} />
          <Route path="f-a-q" element={<FAQs />} />
          <Route path="codigo_etico" element={<CodeOfEthics />} />
          <Route path="DOCS" element={<DocumentsToDownload />} />

          <Route path="sobre-verial" element={<AboutVerial />} />
          <Route path="distribuidor-verial" element={<Distribution />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
};
