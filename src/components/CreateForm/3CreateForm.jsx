import "./CreateForm.css";
import { useState, useRef } from "react";
import { addMoodboard } from "../../utilities/moodboards-api";

const initialFormData = {
  moodboardName: "",
  description: "",
  category: "ETC",
};

export default function CreateForm({ setShowForm, moodboards, setMoodboards }) {
  const [formData, setFormData] = useState(initialFormData);

  // Use a ref prop on the <input> in the JSX to
  // create a reference to the <input>, i.e.,
  // inputRef.current will be the <input> DOM element
  const fileInputRef = useRef();

  /*--- Event Handlers ---*/

  async function handleSubmit(evt) {
    evt.preventDefault();
    // Use FormData object to send the inputs in the fetch request
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#uploading_a_file
    const formObj = new FormData();
    formObj.append("moodboardName", formData.moodboardName);
    formObj.append("description", formData.description);
    formObj.append("category", formData.category);
    const newMoodboard = await addMoodboard(formObj);
    setMoodboards(newMoodboard, ...moodboards);
    // Clear the description and file inputs
    setFormData(initialFormData);
    fileInputRef.current.value = "";
  }

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  return (
    <div className="create">
      {/* <img
        className="createImg"
        src="https://cdn.dribbble.com/users/2171669/screenshots/5911127/image.png?compress=1&resize=800x600"
        alt=""
      /> */}
      <h1 className="createFormHeader">Create a Board</h1>
      <br className="" />
      <form className="createForm" autoComplete="off" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          {/* <label htmlFor="fileInput">
            <i
              className="createIcon"
              class="fa fa-plus-circle"
              aria-hidden="true"
            ></i>
          </label>
          <input id="fileInput" type="file" style={{ display: "none" }} /> */}
          <input
            className="createInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name="moodboardName" value={formData.moodboardName} onChange={handleChange} required
          />
        </div>
        <br />
        <div className="createFormGroup">
          <textarea
            className="createInput createText"
            placeholder="What are you creating?"
            type="text"
            autoFocus={true}
            name="description" value={formData.description} onChange={handleChange} required
          />
        </div>
        <br />
        <div className="createFormGroup">
        <select className=" createText" name='category' value={formData.category} onChange={handleChange}>
          <option value='Aesthetic'>Aesthetic</option>
          <option value='Creative'>Creative</option>
          <option value='Web Design'>Web Design</option>
          <option value='ETC'>Et Cetera</option>
        </select>

        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
