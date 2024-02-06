import "./App.css";

import Header from "./components/Nav/header";
import Main from "./components/Main/main";
import Footer from "./components/Footer/footer";

import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
