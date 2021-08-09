import NavBar from "../NavBar/NavBar";
//import css
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">React & Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
         <img className="headerImg" src="https://cdnb.artstation.com/p/assets/images/images/014/855/527/medium/gilles-ketting-orion3-export-e1.jpg?1545927368" alt="headerImg" />
        </div>
    )
}
