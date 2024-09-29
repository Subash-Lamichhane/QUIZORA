import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import CreateQuizora from "../pages/CreateQuizora";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/create-quizora" element={<CreateQuizora />}></Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
