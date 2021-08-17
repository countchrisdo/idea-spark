import './PhotoCard.css';

export default function PhotoCard({ photo }) {
  return (
    <div className="PhotoCardImg" >
      <img src={photo.url} alt="boardIMG" />
    </div>
  );
}