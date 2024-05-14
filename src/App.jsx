import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Event23 from "./pages/Event23";
import Event22 from "./pages/Event22";
import Event21 from "./pages/Event21";
import Event20 from "./pages/Event20";

function App() {
  return (
    <Routes>
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/" element={<Event23 />} />
      <Route exact path="/events23" element={<Event23 />} />
      <Route exact path="/events22" element={<Event22 />} />
      <Route exact path="/events21" element={<Event21 />} />
      <Route exact path="/events20" element={<Event20 />} />
    </Routes>
  );
}

export default App;
