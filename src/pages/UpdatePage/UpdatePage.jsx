import UpdateForm from "../../components/UpdateForm/UpdateForm";
import { useState, useRef, useEffect } from "react";
import * as moodboardsAPI from "../../utilities/moodboards-api";


export default function CreatePage() {
  const [moodboards, setMoodboards] = useState();
  
  useEffect(function() {
    async function getMoodboards() {
        const moodboards = await moodboardsAPI.getAll();
        setMoodboards(moodboards);
    }
    getMoodboards();
}, []);
   

  return (
    <div>
      <UpdateForm
        moodboards={moodboards}
        setMoodboards={setMoodboards}
      />

    </div> 
  );
}
