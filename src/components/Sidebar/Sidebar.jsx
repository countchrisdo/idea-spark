import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="https://cdn.onlinewebfonts.com/svg/img_30505.png" />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATAGORIES</span>
        <ul className="sidebarCategories">
          <li className="sidebarListItems">Item</li>
          <li className="sidebarListItems">Item</li>
          <li className="sidebarListItems">Item</li>
        </ul>
        <div className="sidebarItem">
          <span className="sidebarTitle">FOLLOW US</span>
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
