import { useState, useRef, useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import * as photosAPI from '../../utilities/photos-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';

import { getUser } from '../../utilities/users-service';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import AboutPage from '../AboutPage/AboutPage';
import NavBar from '../../components/NavBar/NavBar';
import LandingPage from '../LandingPage/LandingPage';
import Single from '../Single/Single';
import Create from '../Create/Create';
import Settings from '../Settings/Settings';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [title, setTitle] = useState('');
  const [photos, setPhotos] = useState([]);
  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  // Fetch existing uploaded photos after first render
  // Photos will be sorted in the controller with the most recent first
  useEffect(function() {
    photosAPI.getAll().then(photos => setPhotos(photos));
  }, []);

  /*--- Event Handlers ---*/

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formData = new FormData();
    formData.append('title', title);
    formData.append('photo', fileInputRef.current.files[0]);
    const newPhoto = await photosAPI.upload(formData);
    setPhotos([newPhoto, ...photos]);
    // Clear the description and file inputs
    setTitle('');
    fileInputRef.current.value = '';
  }

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
              <Create />
            </Route>
            <Route path="/Settings">
              <Settings />
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
{/* <h1>Photo Upload test</h1>
<section className="flex-ctr-ctr">
        <input type="file" ref={fileInputRef} />
        <input value={title} onChange={(evt) => setTitle(evt.target.value)} placeholder="Photo Title" />
        <button onClick={handleUpload}>Upload Photo</button>
      </section>
      <section>
        {photos.map(p => <PhotoCard photo={p} key={p._id} />)}
      </section> */}
    
    </main>
  );
}