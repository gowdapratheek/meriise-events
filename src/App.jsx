import { Route, Routes } from "react-router-dom";
import Event23 from "./pages/Event23";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Event23 />} />
    </Routes>
  );
}

export default App;
