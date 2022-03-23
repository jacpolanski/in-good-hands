import "./scss/main.scss";
import { Routes, Route, Link } from "react-router-dom";

import HomeMain from "./components/HomeMain";
import FormMain from "./components/FormMain";
import LogIn from "./components/LogIn";
import Register from "./components/Register";
import LogOut from "./components/LogOut";
import NotFound from "./components/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/oddaj-rzeczy" element={<FormMain />} />
        <Route path="/logowanie" element={<LogIn />} />
        <Route path="/rejestracja" element={<Register />} />
        <Route path="/wylogowano" element={<LogOut />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
