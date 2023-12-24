import { Route, Routes } from "react-router";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyHome from "./components/MyHome";
import { BrowserRouter } from "react-router-dom";
import MyNavBar from "./components/MyNavBar";
import ArticlePage from "./components/ArticlePage";
import MyProfilePage from "./components/MyProfilePage";
import SignUpPage from "./components/SignUpPage";
import LogPage from "./components/LogPage";
import PostArticlePage from "./components/PostArticlePage";
import UsersPage from "./components/UsersPage";

const App = () => {
  return (
    <BrowserRouter>
      <MyNavBar></MyNavBar>
      <Routes>
        <Route path="/" element={<MyHome />} />
        <Route path="/article/:id" element={<ArticlePage />} />
        <Route path="/profile/:id" element={<MyProfilePage />} />
        <Route path="/register" element={<SignUpPage />} />
        <Route path="/log" element={<LogPage />} />
        <Route path="/PostArticle" element={<PostArticlePage />} />
        <Route path="/users" element={<UsersPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
