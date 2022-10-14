import users from "./Utils/data";
import Card from "./Card";
import Title from "./Title";
import "./Wrapper.css";

function Wrapper(props) {
  return (
    <div className="wrapper">
      <Title />
      <>
        <h2 className="subtitle">Whatch Users</h2>
        <div className="user-cards">
          {users.map((user) => {
            return (
              <Card
                key={user.id}
                username={user.username}
                id={user.id}
                wallpaper={user.wallpaper}
                userInfo={user.userInfo}
                profilePic={user.profilePic}
              />
            );
          })}
        </div>
      </>
    </div>
  );
}
export default Wrapper;
