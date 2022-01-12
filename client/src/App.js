import Navbar from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Insight from "./pages/Insight";
import Stats from "./pages/Stats";
import Home from "./pages/Home";
import InsightPlacement from "./components/InsightsComponents/InsightPlacement";
import InsightInternship from "./components/InsightsComponents/InsightInternship";
import Footer from "./components/HomeComponents/Footer";
import Contact from "./components/HomeComponents/Contact";
import AdminRegister from "./pages/AdminRegister";
import AdminLogin from "./pages/AdminLogin";
import Comment from "./components/CommentComponent/Comment";
import Admin from "./pages/Admin";
import Data from "./components/Data";
export default function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/admin" element={<Admin />} />
          <Route path="/data" element={<Data />} />
          <Route path="/:type/:id" element={<Data />} />

          <Route path="/admin_register" exact element={<AdminRegister />} />

          <Route path="/admin_login" exact element={<AdminLogin />} />

          <Route path="/" exact element={<Home />} />

          <Route path="/insight" exact element={<Insight />} />
          <Route
            path="/insight/placement"
            exact
            element={<InsightPlacement />}
          />

          <Route
            path="/insight/internship"
            exact
            element={<InsightInternship />}
          />

          <Route path="/stats" exact element={<Stats />}></Route>
        <Route path="/placement_process" exact element={<Comment/>}></Route>
          <Route path="*" exact element={<>Not found</>}></Route>
        </Routes>
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}
