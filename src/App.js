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
import "./App.css";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/personal-library-app/home" element={<Home />} />
          <Route
            path="/personal-library-app/recentreviews"
            element={<RecentReviews />}
          />
          <Route path="/personal-library-app/favbooks" element={<FavBooks />} />
          <Route path="/personal-library-app/aboutbc" element={<AboutBC />} />
          <Route
            path="/personal-library-app/romancebc"
            element={<RomanceBC />}
          />
          <Route
            path="/personal-library-app/fantasybc"
            element={<FantasyBC />}
          />
          <Route
            path="/personal-library-app/thrillerbc"
            element={<ThrillerBC />}
          />
        </Routes>
      </div>
    </div>
  );
}
export default App;
