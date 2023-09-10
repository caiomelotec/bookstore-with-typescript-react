import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { BookDetail } from "./pages/BookDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/store" element={<Store />} />
        <Route path="/store/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
