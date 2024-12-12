import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GlobalStyle from "./styles/common/GlobalStyle";
import AboutPage from "./pages/AboutPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import ScrollToTop from "./components/ScrollToTop";
import FindTripPage from "./pages/FindTripPage";
import AffiliatesPage from "./pages/AffiliatesPage";
import BlogPage from "./pages/BlogPage";
import TripsPage from "./pages/TripsPage";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/find-trip" element={<FindTripPage />} />
        <Route path="/affiliates" element={<AffiliatesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/trips" element={<TripsPage />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
