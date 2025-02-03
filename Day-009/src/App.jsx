import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import Alert from "./components/layouts/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);
  const [repos, setRepos] = useState([]);
  const [user, setUser] = useState({});

  // Search users
  const searchUsers = async (text) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`
    );
    setUsers(res.data.items);
    setLoading(false);
  };

  // Get single Github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`
    );
    setUser(res.data);
    setLoading(false);
  };

  // Get user repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&client_secret=${import.meta.env.VITE_GITHUB_CLIENT_SECRET}`
    );

    setRepos(res.data);
    setLoading(false);
  };

  // Clear users from state
  const clearUsers = () => {
    setUsers([]);
    setLoading(false);
  };

  // Set Alert
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);
  };

  return (
    <Router>
      <Navbar icon="fab fa-github" title="Github Finder" />
      <div className="mt-5 col-md-9" style={{ margin: "auto" }}>
        <Alert alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search
                  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  showClear={users.length > 0}
                  setAlert={showAlert}
                />
                <Users loading={loading} users={users} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/user/:login"
            element={<User getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
