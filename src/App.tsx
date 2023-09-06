import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Results } from "./pages/Results";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App;
