import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";


import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
}

export default App;
