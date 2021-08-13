import { useParams } from 'react-router-dom';

import './DetailPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import BoardDetail from '../../components/BoardDetail/BoardDetail'

export default function DetailPage() {

    const { boardId } = useParams();

    return (
        <div className="single">
            {/* post */}
            <BoardDetail boardId={boardId} />
            
            <Sidebar />
        </div>
    )
}
