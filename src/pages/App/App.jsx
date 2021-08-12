import { useState, useRef, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';



import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Single from '../DetailPage/DetailPage';
import Settings from '../Settings/Settings';
import CreateForm from '../../components/CreateForm/CreateForm';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
    <NavBar user={user} setUser={setUser}/>
    {/* <h4>Idea Spark</h4> */}
    {/* If user is logged in, run this Switch
    Switch checks for pathway and changes to appropriate page */}
      { user ?
        <>
          <Switch>
            <Route path="/home">
             <HomePage user={user} setUser={setUser} />
              {/* <Single ></Single> */}
            </Route>
            <Route path="/AboutPage">
              <AboutPage />
            </Route>
            <Route path="/Create">
              <CreateForm />
            </Route>
            <Route path="/Settings">
              <Settings />
            </Route>
            <Route path="/Moodboard/:boardId">
              <Single />
            </Route>

            {/* sets default path is home */}
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