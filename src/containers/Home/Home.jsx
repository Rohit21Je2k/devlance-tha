import React, { useState } from "react";
import UserProfile from "../../components/UserProfile/UserProfile";

import "./Home.css";

export default function Home() {
  const [reload, setReload] = useState(false);
  const updateProfile = () => {
    setReload(!reload);
  };
  return (
    <div className="home">
      <div className="home-actions">
        <button onClick={updateProfile} className="new-user-btn">
          Update User
        </button>
      </div>
      <UserProfile reload={reload} />
    </div>
  );
}
