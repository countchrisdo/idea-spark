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
        <img className="sidebarImg" src="https://i.imgur.com/bGkScfh.png" alt="sidebarIMG"/>
        <p>For the person who needs to curate their spring/summer vs. fall/winter aesthetique. For the person upgrading their interior design to a Scandinavian post-modern architecture that doesn't scream "IKEA". But mainly for the person trying to draw inspiration from a bunch of images mish-mashed together in a semi-random, pleasing manner.</p>
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
