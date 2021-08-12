import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    props.setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="topLeft">
      <i className="topIcon" class="fa fa-facebook-official" aria-hidden="true"></i>
      <i className="topIcon" class="fa fa-twitter-square" aria-hidden="true"></i>
      <i className="topIcon" class="fa fa-pinterest-square" aria-hidden="true"></i>
      <i className="topIcon" class="fa fa-instagram" aria-hidden="true"></i>

      </div>
      <div className="topCenter">
      <ul className="topList">
        <li className="topListItem" ><Link className="link" to="/home">Home</Link></li>
        <li className="topListItem"><Link className="link" to="/AboutPage">About</Link></li>
        <li className="topListItem"><Link className="link" to="/home">blank</Link></li>
        
        <li className="topListItem"><Link className="link" to="/create">Create</Link></li>
        <li className="topListItem"><Link className="link" onClick={handleLogOut} to="">
          Log Out
        </Link></li>
      </ul>
        {/* &nbsp; | &nbsp; */}
      </div>
      <div className="topRight">
        <img className="topImg" src="https://png.pngtree.com/png-vector/20190118/ourlarge/pngtree-polygon-letter-s-icon-vector-logo-png-image_326968.jpg"/>
        <i className="topSearchIcon" class="fa fa-search" aria-hidden="true"></i>

      </div>
    </nav>
  );
}
