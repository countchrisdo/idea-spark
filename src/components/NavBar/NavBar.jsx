import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import "./NavBar.css";

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <nav className="navbar">
      <div className="topLeft">
      <i class="fa fa-facebook-official" aria-hidden="true"></i>
      <i class="fa fa-twitter-square" aria-hidden="true"></i>
      <i class="fa fa-pinterest-square" aria-hidden="true"></i>
      <i class="fa fa-instagram" aria-hidden="true"></i>

      </div>
      <div className="topCenter">
        <Link to="/home">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/AboutPage">About</Link>
        &nbsp; | &nbsp; 3rdLink
      </div>
      <div className="topRight">
        <Link onClick={handleLogOut} to="">
          Log Out
        </Link>
      </div>
    </nav>
  );
}
