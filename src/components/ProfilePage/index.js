
import { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../Header";
import "./index.css";

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ user: data });
      });
  }

  render() {
    const { user } = this.state;
    if (!user) return <div>Loading...</div>;

    return (
      <div className="profile-container">
        <Header />
        <div className="profile-wrapper">
          <Link to="/" className="back-link">← Welcome, {user.name}</Link>
          <div className="profile-card">
            <div className="profile-header">
              <div className="avatar">{user.name.split(" ")[0][0]}{user.name.split(" ")[1]?.[0]}</div>
              <div>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
              </div>
            </div>
            <div className="profile-info">
              <div>
                <label>User ID</label>
                <div className="info-box">{user.id}</div>
              </div>
              <div>
                <label>Name</label>
                <div className="info-box">{user.name}</div>
              </div>
              <div>
                <label>Email ID</label>
                <div className="info-box">{user.email}</div>
              </div>
              <div>
                <label>Address</label>
                <div className="info-box">{user.address.street}, {user.address.city}</div>
              </div>
              <div>
                <label>Phone</label>
                <div className="info-box">{user.phone}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
