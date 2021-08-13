
import "./Header.css";

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitles">
                <span className="headerTitleSm">Moodboards Built With REACT</span>
                <span className="headerTitleLg">Idea Spark</span>
            </div>
         <img className="headerImg" src="https://cdn.dribbble.com/users/433036/screenshots/9963476/media/22584ca9bda66536f052d1c9c9a86507.jpg?compress=1&resize=1200x900" alt="headerImg" />
        </div>
    )
}
