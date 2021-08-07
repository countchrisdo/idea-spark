import { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
    <NavBar user={user} setUser={setUser}/>
    <h1>Idea Spark</h1>
    {/* If user is logged in, run this Switch
    Switch checks for pathway and changes to appropriate page */}
      { user ?
        <>
          <Switch>
            <Route path="/home">
              <HomePage user={user} setUser={setUser} />
            </Route>
            <Route path="/AboutPage">
              <AboutPage />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </>
        :
        <div>
        <LandingPage />
        <AuthPage setUser={setUser} />
        </div>
      }
    </main>
  );
}