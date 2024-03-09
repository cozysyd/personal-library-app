import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home";
import RecentReviews from "./Pages/RecentReviews";
import FavBooks from "./Pages/FavBooks";
import AboutBC from "./Pages/AboutBC";
import RomanceBC from "./Pages/RomanceBC";
import FantasyBC from "./Pages/FantasyBC";
import ThrillerBC from "./Pages/ThrillerBC";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  <div>
    <NavBar />
    <div className="container">
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/recentreviews" element={<RecentReviews />} />
        <Route path="/favbooks" element={<FavBooks />} />
        <Route path="/aboutbc" element={<AboutBC />} />
        <Route path="/romancebc" element={<RomanceBC />} />
        <Route path="/fantasybc" element={<FantasyBC />} />
        <Route path="/thrillerbc" element={<ThrillerBC />} />
      </Routes>
    </div>
  </div>;
}
export default App;
