import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHome from "./components/MyHome";
import { BrowserRouter } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import ArticlePage from "./components/ArticlePage";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/article/:id" element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
