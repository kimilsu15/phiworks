import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./resources/css/reset.css";
import MainPage from "./pages/main/MainPage";
import ServicePage from "./pages/service/ServicePage";
import ContactPage from "./pages/contact/ContactPage";
import Header from "./component/header/Header";
import MainImage from "./component/mainImage/MainImage";
import Footer from "./component/footer/Footer";

function App() {
  const [nowTab, setNowTab] = useState("");
  return (
    <BrowserRouter>
      <Header />
      <MainImage nowTab={nowTab} />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
        <Route path="/service" element={<ServicePage nowTab={nowTab} setNowTab={setNowTab} />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
