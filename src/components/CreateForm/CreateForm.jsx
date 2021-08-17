import "./CreateForm.css";
import { useState, useRef } from "react";
import { addMoodboard } from "../../utilities/moodboards-api";

const initialFormData = {
  moodboardName: '',
  description: '',
  category: 'ETC'
};

export default function CreateForm({ setShowForm, setMoodboards, Moodboards }) {
  const [formData, setFormData] = useState({
    moodboardName: "",
    description: "",
    category: "ETC"
  });

  function handleChange(evt) {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    try {
      // const formInfo = { ...formData };
      const saveData = await addMoodboard(formData);
      // setShowForm(true);
      setMoodboards([...Moodboards, saveData]);
    } catch {
      console.log("error");
    }
  }

  return (
    <div className="create">
      <h1 className="createFormHeader">Create a Board</h1>
      <br className="" />
      <form className="createForm" autoComplete="off" onSubmit={handleSubmit}>
        <div className="createFormGroup">
          <label>Title</label>
          <input
            className="createInput"
            placeholder="Title"
            type="text"
            autoFocus={true}
            name="moodboardName"
            value={formData.moodboardName}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="createFormGroup">
          <label>Description</label>
          <textarea
            className="createInput createText"
            placeholder="What are you creating?"
            type="text"
            autoFocus={true}
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        <br />
        <div className="createFormGroup">
          <label>Category</label>
          <select
            className=" createText"
            name="category"
            value={formData.category}
            onChange={handleChange}
          >
            <option value="Aesthetic">Aesthetic</option>
            <option value="Creative">Creative</option>
            <option value="Web Design">Web Design</option>
            <option value="ETC">Et Cetera</option>
          </select>
        </div>
        <button className="createSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
