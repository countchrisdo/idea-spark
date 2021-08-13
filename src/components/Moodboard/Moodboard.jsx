import "./Moodboard.css";

export default function Moodboard() {
  return (
    <div className="mood">
      <img
        className="postImg"
        src="https://cdn.dribbble.com/users/2171669/screenshots/5911127/image.png?compress=1&resize=800x600" alt="postimg"
      />

      <div className="boardInfo">
        <div className="boardCats">
          <span className="boardCat">Music</span>
          <span className="boardCat">Life</span>
        </div>
        <span className="boardTitle">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </span>
        <hr />
        <span className="boardDate">1 Hour Ago</span>
      </div>
    </div>
  );
}
