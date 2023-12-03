import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHome from "./components/MyHome";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MyHome />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
