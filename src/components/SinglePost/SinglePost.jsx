import "./SinglePost.css"

export default function SinglePost() {
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
{/* <span classname="singlePostAuthor">Author: <b>Chris</b> </span> */}
<span classname="singlePostAuthorDate"> 1 Hour Ago </span>
                </div>
                <p>lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum 
                 </p>
                </div>    
        </div>
    )
}
