import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { BookDetail } from "./pages/BookDetail";
import { Checkout } from "./pages/Checkout";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="store/:pageNumber" element={<Store />} />
        <Route path="bookdetail/:id" element={<BookDetail />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </>
  );
}

export default App;
