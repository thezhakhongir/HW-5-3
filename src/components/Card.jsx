import "./Card.css";

function Card({ username, id, userInfo, wallpaper, profilePic }) {
  return (
    <div className="card">
      <div className="wallpaper" style={{ backgroundColor: wallpaper }}></div>
      <div className="info">
        <img className="user-img" src={profilePic} alt="user-avatar" />
        <p className="user-name">
          {username} <span className="user-id">{id}</span>
        </p>
        <p className="user-info">{userInfo}</p>
      </div>
    </div>
  );
}

export default Card;
