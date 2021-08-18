import "./MoodboardCard.css";
import { Link } from "react-router-dom";


export default function MoodboardCard({board}) {
  return (
    <div className="mood">
    <Link to={`/moodboard/${board._id}`}>
      <img
        className="boardImg"
        src={board.photos[0] ? board.photos[0].url : "https://i.imgur.com/XjwMOYg.jpg"} alt="postimg"
      /></Link>
      <div className="boardInfo">
        <h4>Creator: {board.user.name} </h4>
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
