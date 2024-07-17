import Homepage from "./pages/Homepage/Homepage";
import Success from "./pages/Success/Success";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </div>
  );
};

export default App;
