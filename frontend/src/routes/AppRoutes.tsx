import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateQuizora from "../pages/CreateQuizora";
import FAQ from "../pages/FAQ";
import NavBar from "../components/NavBar";
import Quizora from "../pages/Quizora";
import AboutPage from "../pages/AboutPage"
const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create-quizora" element={<CreateQuizora />}></Route>
        <Route path="/quizora/:id" element={<Quizora />}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route
          path="/faq"
          element={
            <div className="bg-black text-white">
              <NavBar />
              <FAQ />
            </div>
          }
        ></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
