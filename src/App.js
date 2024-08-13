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
  return (
    <BrowserRouter>
      <Header />
      <MainImage />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
