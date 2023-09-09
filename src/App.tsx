import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
