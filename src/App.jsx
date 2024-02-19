import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Routes>
        {isLoading ? (
          <Route path="/" element={<Loader />} />
        ) : (
          <>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </>
        )}
      </Routes>
    </Router>
  );
}
