import { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import MoodboardIndex from '../../components/MoodboardIndex/MoodboardIndex';
import Sidebar from '../../components/Sidebar/Sidebar';
import * as moodboardsAPI from '../../utilities/moodboards-api'

import './HomePage.css';

export default function HomePage() {
  const [moodboards, setMoodboards] = useState([]);

  useEffect(function() {
    async function getMoodBoards() {
      const response = await moodboardsAPI.getAll();
      setMoodboards(moodboards);
    }
    getMoodBoards();
  }, []);

  return (
    <>
    <Header />
    <p></p>
      <div className="home">
        <MoodboardIndex />
        <Sidebar />
      </div>
    </>
  );
}
