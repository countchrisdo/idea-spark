import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT</span>
        <img src="https://cdn.onlinewebfonts.com/svg/img_30505.png" />
        <p>Important information goes here. You see this? This is very important information. You know it's important because I'm telling you it is! Funny how that works?</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarCategories">
          <li className="sidebarListItem">Item1</li>
          <li className="sidebarListItem">Item2</li>
          <li className="sidebarListItem">Item3</li>
          <li className="sidebarListItem">Item4</li>
          <li className="sidebarListItem">Item5</li>
          <li className="sidebarListItem">Item6</li>
        </ul>
        <div className="sidebarItem">
          <span className="sidebarTitle">Placeholder</span>
          <div className="sidebarSocial">
            <i
              className="sidebarIcon"
              class="fa fa-facebook-official"
              aria-hidden="true"
            ></i>
            <i
              className="sidebarIcon"
              class="fa fa-twitter-square"
              aria-hidden="true"
            ></i>
            <i
              className="sidebarIcon"
              class="fa fa-pinterest-square"
              aria-hidden="true"
            ></i>
            <i
              className="sidebarIcon"
              class="fa fa-instagram"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
