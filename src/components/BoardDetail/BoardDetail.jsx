import "./BoardDetail.css"
import { useState, useRef, useEffect } from 'react';
import * as photosAPI from '../../utilities/photos-api';
import * as moodboardsAPI from '../../utilities/moodboards-api';
import PhotoCard from '../../components/PhotoCard/PhotoCard';


export default function BoardDetail( {boardId} ) {
    const [board, setBoard] = useState(null);
    // Use a ref prop on the <input> in the JSX to
    // create a reference to the <input>, i.e.,
    // inputRef.current will be the <input> DOM element
    const fileInputRef = useRef();
  
    // Fetch existing uploaded photos after first render
    // Photos will be sorted in the controller with the most recent first
    useEffect(function() {
      moodboardsAPI.getOne(boardId).then(moodboard => setBoard(moodboard));
    }, []);
  
    /*--- Event Handlers ---*/
  
    async function handleUpload() {
      // Use FormData object to send the inputs in the fetch request
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
      const formData = new FormData();
      formData.append('photo', fileInputRef.current.files[0]);
      const updatedBoard = await photosAPI.upload(formData, boardId);
      setBoard(updatedBoard);
      // Clear the file input
      fileInputRef.current.value = '';
    }

    if (!board) return null;
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="https://cdn.dribbble.com/users/2171669/screenshots/5911127/image.png?compress=1&resize=800x600"
                     className="singlePostImage"
                     alt="singlepost"/>
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet
                    <div className="singlePostEdit">
                    <i className="singlePostIcon" class="fa fa-pencil-square-o" aria-hidden="true"></i>
                    <i className="singlePostIcon" class="fa fa-trash" aria-hidden="true" ></i>

                    </div>
                </h1>
                <div className="singlePostInfo">
<span classname="singlePostAuthorDate"> 1 Hour Ago </span>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum 
                 </p>
                </div> 
                <h1>Photo Upload test</h1>
<section className="flex-ctr-ctr">
        <input type="file" ref={fileInputRef} />
        <button onClick={handleUpload}>Upload Photo</button>
      </section>
      <section>
        {board.photos.map(p => <PhotoCard photo={p} key={p._id} />)}
      </section>   
        </div>
    )
}
