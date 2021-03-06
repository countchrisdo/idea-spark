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

console.log(props.user);

//if user is logged in, render navbar with logout button
if (props.user) {
  return (
    <nav className="navbar">
      <div className="topLeft">
      {/* <ul className="topList">
      
      </ul> */}

      </div>
      <div className="topCenter">
      <ul className="topList">
      <li className="topListItem" ><Link className="link" to="/home">Home</Link></li>
        <li className="topListItem"><Link className="link" to="/AboutPage">About</Link></li>
        <li className="topListItem"><Link className="link" to="/create">Create</Link></li>
        
      </ul>
      </div>
      <div className="topRight">
      {/* <Link className="link" to="/settings"><i className="topListItem" class="fa  fa-user-circle" aria-hidden="true"></i></Link>
      &nbsp; | &nbsp;
      <Link className="link" to="/search/searchterm"><i className="topSearchIcon" class="fa fa-search" aria-hidden="true"></i></Link> */}

      <ul className="topList">
        <li className="topListItem"><Link className="link" onClick={handleLogOut} to="">
          Log Out
        </Link></li>
      </ul>

      </div>
    </nav>
  );
} else {
  //if user is not logged in, render this navbar
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
      <Link className="link" to="/Authentication">Login</Link>
      &nbsp; | &nbsp;
      <Link className="link" to="/"><i className="topListItem" class="fa  fa-user-circle" aria-hidden="true"></i></Link>
      &nbsp; | &nbsp;
      <Link className="link" to="/"><i className="topSearchIcon" class="fa fa-search" aria-hidden="true"></i></Link>

      </div>
    </nav>
  ); }
}
