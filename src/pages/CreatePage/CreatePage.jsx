import CreateForm from "../../components/CreateForm/CreateForm";
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
      <CreateForm
        moodboards={moodboards}
        setMoodboards={setMoodboards}
      />

      
    </div> 
  );
}
