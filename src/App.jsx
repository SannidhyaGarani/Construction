import { Routes, Route } from "react-router-dom";
import { useEffect, useState, lazy, Suspense } from "react";
import "./App.css";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/BackToTop";
import Preloader from "./Components/Preloader";
import WhatsAppButton from "./Components/WhatsAppButton";
import PopupForm from "./Components/PopupForm";

import Home from "./pages/Home";

// Lazy Load Other Pages for Performance
const About = lazy(() => import("./pages/About.jsx"));
const Services = lazy(() => import("./pages/Services.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail.jsx"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy.jsx"));
const TermsConditions = lazy(() => import("./pages/TermsConditions.jsx"));
const NotFound = lazy(() => import("./Components/Notfound.jsx"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Reduced timeout for faster perceived performance
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <>
      <Header />
      <ScrollToTop />

      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsConditions />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppButton />
      <PopupForm />
    </>
  );
}

export default App;
