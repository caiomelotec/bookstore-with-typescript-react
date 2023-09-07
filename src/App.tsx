import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
