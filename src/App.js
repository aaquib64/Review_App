import "./App.css";
import { Route, BrowserRouter as Router, Routes, Link } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Login from "./Component/Header/Login/Login";
import Signup from "./Component/Header/Signup/Signup";
import Dashboard from "./Component/Dashboard_Owner/Dashboard";
import SearchBar from "./Component/Main/Searchbar/Searchbar";
import Review from "./Component/Review_Page/Review";
import UserData from "./Routing/UserData";
import UserByName from "./Routing/UserByName";

function App() {
  return (
    <div>
     
      <Router>
     <Navbar/>
        <Routes>
          <Route path="/SearchBar" element={<SearchBar />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Store" element={<Dashboard />} />
          <Route path="/Review" element={<Review />} />
          <Route path="/user" element={<UserData />} />
          <Route path="/getuserByName/:name" element={<UserByName />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
