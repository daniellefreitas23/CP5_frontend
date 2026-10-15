import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import VillasDetail from "./pages/VillasDetail";
import Booking from "./pages/Booking";

/** Navegação por estado: "home" | "villas-detail" | "booking-simulator" */
export default function App() {
  const [page, setPage] = useState("home");
  const [pre, setPre] = useState(null); // villa pré-selecionada no simulador

  const go = (p, villaId) => {
    setPage(p);
    if (villaId) setPre(villaId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-porcelain font-sans text-ink">
      <Header page={page} go={go} />
      <main key={page} className="pop">
        {page === "home" && <Home go={go} />}
        {page === "villas-detail" && <VillasDetail go={go} />}
        {page === "booking-simulator" && <Booking pre={pre} />}
      </main>
      <Footer />
    </div>
  );
}
