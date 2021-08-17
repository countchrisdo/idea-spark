import Sidebar from "../../components/Sidebar/Sidebar";
import "./Settings.css";

export default function Settings() {
  return (
    <div className="settings">
    <span className="settingsTitleUpdate">Your Account</span>
      <div className="settingsWrapper">
        <div className="settingsTitle">

          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="https://styles.redditmedia.com/t5_3qpirx/styles/communityIcon_3333krxq70c61.png" alt="PP"/>
            
            <label htmlFor="fileInput">
          
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
            </div>
            <label>Username</label>
            <input type="text" placeholder="Username" />
            <label>Email</label>
            <input type="email" placeholder="Email" />
            <label>Password</label>
            <input type="password" placeholder="***" />
            <button className="settingsSubmit">Update</button>        
          </form>
          
        </div>
      </div>
      
      <Sidebar />
    </div>
  );
}
