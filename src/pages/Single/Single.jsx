import './Single.css'
import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'

export default function Single() {
    return (
        <div className="single">
            {/* post */}
            <SinglePost />
            <Sidebar />
        </div>
    )
}
