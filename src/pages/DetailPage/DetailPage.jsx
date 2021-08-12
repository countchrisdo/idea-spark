import './DetailPage.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import BoardDetail from '../../components/BoardDetail/BoardDetail'

export default function Single() {
    return (
        <div className="single">
            {/* post */}
            <BoardDetail />
            
            <Sidebar />
        </div>
    )
}
