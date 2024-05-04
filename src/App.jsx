import { Route, Routes } from "react-router-dom";
import Event23 from "./pages/Event23";

function App() {
  return (
    <Routes>
      <Route path="/meriise-events-page/" element={<Event23 />} />
    </Routes>
  );
}

export default App;
