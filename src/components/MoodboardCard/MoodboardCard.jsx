import "./MoodboardCard.css";
import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import * as photosAPI from "../../utilities/photos-api";
import * as moodboardsAPI from "../../utilities/moodboards-api";
import PhotoCard from "../../components/PhotoCard/PhotoCard";

export default function MoodboardCard({board}) {
  return (
    <div className="mood">
      <img
        className="postImg"
        src={board.photos[0] ? board.photos[0].url : "https://i.imgur.com/XjwMOYg.jpg"} alt="postimg"
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
