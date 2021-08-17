import "./Sidebar.css";
import { useState } from "react";
import { getUser } from "../../utilities/users-service";



export default function Sidebar({}) {
  const [user, setUser] = useState(getUser());
  return (
    <div className="sidebar">
    Welcome {user.name}!
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img src="https://cdn.onlinewebfonts.com/svg/img_30505.png" alt="sidebar"/>
        <p>Welcome to Idea Spark</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarCategories">
          <li className="sidebarListItem">Aesthetic</li>
          <li className="sidebarListItem">Creative</li>
          <li className="sidebarListItem">Web Design</li>
          <li className="sidebarListItem">ETC</li>
        </ul>
      </div>
    </div>
  );
}
