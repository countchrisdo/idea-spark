import * as userService from '../../utilities/users-service';
import Header from '../../components/Header/Header';
import Moodboards from '../../components/Moodboards/Moodboards';
import Sidebar from '../../components/Sidebar/Sidebar';

import './HomePage.css';

export default function HomePage({user}) {
  return (
    <>
    <Header />
      <div className="home">
        {/* <h1>Home Page</h1>
        <p>Welcome {user.name}!</p> */}
        <Moodboards />
        <Sidebar />
      </div>
    </>
  );
}
