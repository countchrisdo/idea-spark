import * as userService from '../../utilities/users-service';

export default function HomePage({user}) {
  return (
    <div className="home-page">
      <div className="home-page-header">
        <h1>Home Page</h1>
      </div>
      <div className="home-page-body">
        <p>Welcome {user.name}!</p>
      </div>
    </div>
  );
}
