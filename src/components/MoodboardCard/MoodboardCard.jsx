import "./MoodboardCard.css";
import { Link } from "react-router-dom";

export default function MoodboardCard({board}) {
  return (
    <div className="mood">
      <img
        className="postImg"
        src="https://cdn.dribbble.com/users/2171669/screenshots/5911127/image.png?compress=1&resize=800x600" alt="postimg"
      />
{/* <Link to={`/moodboard/${board.id}`}></Link> */}
      <div className="boardInfo">
        <h4>Creator: {board.user.name}</h4>
        <div className="boardCats">
          <span className="boardCat">{board.category}</span>
        </div>
        <span className="boardTitle">
            {board.moodboardName}
        </span>
      </div>
    </div>
  );
}
