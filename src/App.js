import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Grid from "./components/Grid";
import AddMember from "./components/AddMember";

function App() {
  return (
    <div className="App">
      <Menu />
      <Router>
        <Routes>
          <Route path="./Grid" element={<Grid />} />
          <Route path="./Grid/AddMember" element={<AddMember />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
