import { Header } from "./components/Header";
import { Routes, Route } from "react-router-dom";
import { Store } from "./pages/Store";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/store" element={<Store />} />
      </Routes>
    </>
  );
}

export default App;
