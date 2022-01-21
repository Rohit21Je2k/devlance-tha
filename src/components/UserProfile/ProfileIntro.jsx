import React from "react";

import "./ProfileIntro.css";

export default function ProfileIntro(props) {
  const { values: user } = props;
  return (
    <div className="user-profile-intro">
      {user && (
        <>
          <div className="user-profile-intro__img-container">
            <img
              src={user.picture}
              alt="profile-img"
              className="user-profile-intro__img"
            />
          </div>
          <div className="user-profile-intro__details">
            <p className="user-profile-intro__title">Hi, My name is</p>
            <p className="user-profile-intro__name">
              {user.title} {user.first} {user.last}
            </p>
          </div>
        </>
      )}
    </div>
  );
}
