import "./MoodboardCard.css";
import { Link } from "react-router-dom";

export default function MoodboardCard({board}) {
  return (
    <div className="mood">
      <img
        className="postImg"
        src="https://i.pinimg.com/564x/b0/65/3c/b0653c72f8898fc18f01eaf051a621e9.jpg" alt="postimg"
      />

      <div className="boardInfo">
        <h4>Creator: {board.user.name} </h4>
        <div className="boardCats">
          <span className="boardCat">{board.category}</span>
        </div>
        <Link to={`/moodboard/${board._id}`}> <span className="boardTitle">
            {board.moodboardName}
        </span></Link>
      </div>
    </div>
  );
}
