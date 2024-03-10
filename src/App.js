import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import RecentReviews from "./Components/RecentReviews";
import FavBooks from "./Components/FavBooks";
import AboutBC from "./Components/AboutBC";
import RomanceBC from "./Components/RomanceBC";
import FantasyBC from "./Components/FantasyBC";
import ThrillerBC from "./Components/ThrillerBC";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/recentreviews" element={<RecentReviews />} />
          <Route path="/favbooks" element={<FavBooks />} />
          <Route path="/aboutbc" element={<AboutBC />} />
          <Route path="/romancebc" element={<RomanceBC />} />
          <Route path="/fantasybc" element={<FantasyBC />} />
          <Route path="/thrillerbc" element={<ThrillerBC />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;
