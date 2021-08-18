import "./BoardDetail.css";
import { useState, useRef, useEffect } from "react";
import * as photosAPI from "../../utilities/photos-api";
import * as moodboardsAPI from "../../utilities/moodboards-api";
import PhotoCard from "../../components/PhotoCard/PhotoCard";
import { getUser } from "../../utilities/users-service";

export default function BoardDetail({ boardId }) {
  const [board, setBoard] = useState(null);
  const [user, setUser] = useState(getUser());
  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  // Fetch existing uploaded photos after first render
  // Photos will be sorted in the controller with the most recent first
  useEffect(function () {
    moodboardsAPI.getOne(boardId).then((moodboard) => setBoard(moodboard));
  }, []);

  /*--- Event Handlers ---*/

  async function handleUpload() {
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formData = new FormData();
    formData.append("photo", fileInputRef.current.files[0]);
    const updatedBoard = await photosAPI.upload(formData, boardId);
    setBoard(updatedBoard);
    // Clear the file input
    fileInputRef.current.value = "";
  }
// if empty, return null to not crash
  if (!board) return null;

  console.log("Logged in User", user);
  console.log("Board Creator User", board.user);
// if logged in user is owner, return upload button
if (user._id === board.user) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          {board.moodboardName}
          {/* {user}
    {board.user.name} */}
          <div className="singlePostEdit">
            <i
              className="singlePostIcon"
              class="fa fa-pencil-square-o"
              aria-hidden="true"
            ></i>
            <i
              className="singlePostIcon"
              class="fa fa-trash"
              aria-hidden="true"
            ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span classname="singlePostAuthorDate"> {board.category} </span>
        </div>
        <p>{board.description}</p>
      </div>
     
      <hr className="hr" />

      {/* Photo grid - to be styled */}
      <section className="PhotoCard">
        {board.photos.map((p) => (
          <PhotoCard photo={p} key={p._id} />
        ))}
      </section>

      <hr className="hr" />

      <section className="flex-ctr-ctr">
        <input type="file" ref={fileInputRef} />
        <button onClick={handleUpload}>Upload Photo</button>
      </section>
     

    </div>
  );
} else {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <h1 className="singlePostTitle">
          {board.moodboardName}
          {/* {user}
    {board.user.name} */}
          <div className="singlePostEdit">
            <i
              className="singlePostIcon"
              class="fa fa-pencil-square-o"
              aria-hidden="true"
            ></i>
            <i
              className="singlePostIcon"
              class="fa fa-trash"
              aria-hidden="true"
            ></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span classname="singlePostAuthorDate"> {board.category} </span>
        </div>
        <p>{board.description}</p>
      </div>
     
      <hr className="hr" />

      {/* Photo grid - to be styled */}
      <section className="PhotoCard">
        {board.photos.map((p) => (
          <PhotoCard photo={p} key={p._id} />
        ))}
      </section>

      <hr className="hr" />

    </div>
  );
}
}

