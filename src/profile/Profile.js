import React from "react";
import PropTypes from "prop-types";
import "./Profile.css";

const Profile = (props) => (
  <>
    <div className="container">
      <div className="row" style={{ display: "flex", marginLeft: "200px" }}>
        <div className="col-lg-3 col-sm-6">
          <div className="card hovercard">
            <div className="cardheader"></div>
            <div className="avatar">{props.children}</div>
            <div className="info">
              <div className="title">
                <h2>{props.fullName}</h2>
              </div>
              <div
                className="desc"
                style={{ fontSize: "17px", color: "rgb(106, 23, 9)" }}
              >
                {props.profession}
              </div>
              <div className="desc" style={{ margin: "20px" }}>
                {props.bio}
              </div>
              <div className="desc">
                <button
                  onClick={() => props.handleName(props.fullName)}
                  className="btn btn-profile"
                >
                  Profile User
                </button>
              </div>
            </div>
            <div className="bottom">
              <a
                className="btn btn-primary btn-twitter btn-sm"
                href="https://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
              <a
                className="btn btn-danger btn-sm"
                rel="publisher"
                href="https://google.com"
              >
                <i className="fa fa-google-plus"></i>
              </a>
              <a
                className="btn btn-primary btn-sm"
                rel="publisher"
                href="https://facebook.com"
              >
                <i className="fa fa-facebook"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

Profile.defaultProps = {
  fullName: "No Name entered ",
  profession: "No Profession entered ",
  bio: "No Bio entered ",
  handleName: () => {
    alert("There is no Props ");
  },
};

Profile.propTypes = {
  fullName: PropTypes.string,
  profession: PropTypes.string,
  bio: PropTypes.string,
  handleName: PropTypes.func,
};

export default Profile;
