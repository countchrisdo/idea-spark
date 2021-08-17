import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";
import { getUser } from "../../utilities/users-service";

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    props.setUser(null);
  }

if (props.user != null) {
  return (
    <nav className="navbar">
      <div className="topLeft">
      <ul className="topList">
      
      </ul>

      </div>
      <div className="topCenter">
      <ul className="topList">
      <li className="topListItem" ><Link className="link" to="/home">Home</Link></li>
        <li className="topListItem"><Link className="link" to="/AboutPage">About</Link></li>
        <li className="topListItem"><Link className="link" to="/create">Create</Link></li>
        
        <li className="topListItem"><Link className="link" onClick={handleLogOut} to="">
          Log Out
        </Link></li>
      </ul>
      </div>
      <div className="topRight">
      <Link className="link" to="/settings"><i className="topListItem" class="fa  fa-user-circle" aria-hidden="true"></i></Link>
      &nbsp; | &nbsp;
        <i className="topSearchIcon" class="fa fa-search" aria-hidden="true"></i>

      </div>
    </nav>
  );
} else {
  return (
    <nav className="navbar">
      <div className="topLeft">
      <ul className="topList">
      
      </ul>

      </div>
      <div className="topCenter">
      <ul className="topList">
      <li className="topListItem" ><Link className="link" to="/home">Home</Link></li>
        <li className="topListItem"><Link className="link" to="/AboutPage">About</Link></li>
        <li className="topListItem"><Link className="link" to="/create">Create</Link></li>

      </ul>
      </div>
      <div className="topRight">
      <Link className="link" to="/settings"><i className="topListItem" class="fa  fa-user-circle" aria-hidden="true"></i></Link>
      &nbsp; | &nbsp;
        <i className="topSearchIcon" class="fa fa-search" aria-hidden="true"></i>

      </div>
    </nav>
  ); }
}
