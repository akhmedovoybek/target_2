import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Landing from "./Landing";
import Content from "./Content";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";

function App() {
  return (
    <BrowserRouter>
    <div>
        <Header />
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
        <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
