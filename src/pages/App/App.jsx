import { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";


import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import HomePage from "../HomePage/HomePage";
import AboutPage from "../AboutPage/AboutPage";
import NavBar from "../../components/NavBar/NavBar";
import LandingPage from "../LandingPage/LandingPage";
import DetailPage from "../DetailPage/DetailPage";
import Settings from "../Settings/Settings";
import CreatePage from "../CreatePage/CreatePage";
import Footer from "../../components/Footer/Footer";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <NavBar user={user} setUser={setUser} />
      {/* If user is logged in, run this Switch
    Switch checks for pathway and changes to appropriate page */}
      {user ? (
        <>
          <Switch>
            <Route path="/home">
              <HomePage user={user} setUser={setUser} />
            </Route>
            <Route path="/AboutPage">
              <AboutPage />
            </Route>
            <Route path="/Create">
              <CreatePage />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
            <Route path="/Moodboard/:boardId">
              <DetailPage user={user}/>
            </Route>
            {/* sets default path is home */}
            <Redirect to="/home" />
          </Switch>
        </>
      ) : (
        <div>
          <Switch>
            <Route path="/AboutPage">
              <AboutPage />
            </Route>
            <Route path="/">
              <LandingPage />
              <AuthPage setUser={setUser} />
            </Route>
          </Switch>
        </div>
      )}
      <Footer />
    </main>
  );
}
