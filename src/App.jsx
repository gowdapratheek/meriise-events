import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Event25 from "./pages/Event25"
import Event24 from "./pages/Event24";
import Event23 from "./pages/Event23";
import Event22 from "./pages/Event22";
import Event21 from "./pages/Event21";
import Event20 from "./pages/Event20";
import Event19 from "./pages/Event19";
import Event18 from "./pages/Event18";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      {/* <Route exact path="/" element={<Event23 />} /> */}
      <Route exact path="/events25" element={<Event25 />} />
      <Route exact path="/events24" element={<Event24 />} />
      <Route exact path="/events23" element={<Event23 />} />
      <Route exact path="/events22" element={<Event22 />} />
      <Route exact path="/events21" element={<Event21 />} />
      <Route exact path="/events20" element={<Event20 />} />
      <Route exact path="/events19" element={<Event19 />} />
      <Route exact path="/events18" element={<Event18 />} />
    </Routes>
  );
}

export default App;
