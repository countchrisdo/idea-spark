import "./CreateForm.css";

export default function CreateForm() {
  return (
    <div className="create">
      <img
        className="createImg"
        src="https://cdn.dribbble.com/users/2171669/screenshots/5911127/image.png?compress=1&resize=800x600"
        alt=""
      />
      <form className="createForm">
        <div className="createFormGroup">
          <label htmlFor="fileInput">
            <i
              className="createIcon"
              class="fa fa-plus-circle"
              aria-hidden="true"
            ></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} />
          <input
            className="createInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
          />
        </div>
        <br />
        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
          />
        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
