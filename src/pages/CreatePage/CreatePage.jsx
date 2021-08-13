import CreateForm from "../../components/CreateForm/CreateForm";
import { useState, useRef, useEffect } from "react";
import * as moodboardsAPI from "../../utilities/moodboards-api";

export default function CreatePage() {
  const [moodboards, setMoodboards] = useState();
  const [showPage, setShowPage] = useState(false);
  
  useEffect(function() {
    async function getMoodboards() {
        const moodboards = await moodboardsAPI.getAll();
        setMoodboards(moodboards);
    }
    getMoodboards();
}, []);
   
if (!showPage) {
  return (
    <div>
      <button onClick={() => setShowPage(true)}>Show</button>
    </div>
  );
} else {
  return (
    <div>
    <button onClick={() => setShowPage(false)}>Hide</button>
      <CreateForm
        moodboards={moodboards}
        setMoodboards={setMoodboards}
        setShowPage={setShowPage}
      />
    </div> 
  );
}
}