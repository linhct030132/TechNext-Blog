import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation.jsx";
import { createContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import Profile from "./components/Profile/Profile.jsx";
import PostDetails from "./components/PostDetails/PostDetails";
import Home from "./components/Home/Home.jsx";

export const UserContext = createContext();
function App() {
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);
  return (
    <UserContext.Provider value={[post, setPost]}>
      <div className="App">
        <Router>
          <div className="container">
            <Navigation />
            <Switch>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/profile/:userId">
                <Profile />
              </Route>
              <Route path="/blog/:postId/details">
                <PostDetails />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
