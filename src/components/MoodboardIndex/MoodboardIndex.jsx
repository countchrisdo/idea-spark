//moodboard table
import { useEffect, useState } from 'react'
import * as moodboardsAPI from '../../utilities/moodboards-api'

import "./MoodboardIndex.css"
import MoodboardCard from '../MoodboardCard/MoodboardCard'

export default function MoodboardIndex({}) {
  const [moodboards, setMoodboards] = useState([])

  useEffect(() => {
      async function getBoards() {
          
         const boards = await moodboardsAPI.getAll()
         console.log(boards)
         setMoodboards(boards)
      }
      getBoards()
  }, [])

    return (
        <div className="moodboards">
            {moodboards.map(moodboard => <MoodboardCard board={moodboard} />)}
        </div>
    )
}
