import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';

// Not destructuring props this time
export default function NavBar(props) {
  function handleLogOut() {
    userService.logOut();
    props.setUser(null);
  }

  return (
    <nav>
      <Link to="/home">Home</Link>
      &nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      
      &nbsp;&nbsp;<Link onClick={handleLogOut} to="">Log Out</Link>
    </nav>
  );
}