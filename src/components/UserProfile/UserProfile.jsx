import React, { useState, useEffect } from "react";
import ProfileIntro from "./ProfileIntro";
import ProfileSection from "./ProfileSection";
import ProfileLoader from "./ProfileLoader";

import "./UserProfile.css";

export default function UserProfile(props) {
  const { reload } = props;
  const [loading, setLoading] = useState(false);
  const [userDetails, setUserDetails] = useState({
    intro: {
      title: "",
      first: "",
      last: "",
      picture: "",
    },
    dob: {
      data: "",
      age: "",
    },
    location: {
      street: "",
      city: "",
      state: "",
      country: "",
      postcode: "",
    },
    online: {
      email: "",
      username: "",
      password: "",
    },
    contact: {
      cell: "",
      phone: "",
    },
  });

  useEffect(async () => {
    if (loading) return;
    setLoading(true);
    try {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      const user = data.results[0];

      //  update user details
      setUserDetails({
        intro: {
          title: user.name.title,
          first: user.name.first,
          last: user.name.last,
          picture: user.picture.medium,
        },
        dob: {
          data: new Date(user.dob.date).toDateString(),
          age: user.dob.age,
        },
        location: {
          street: `${user.location.street.number} ${user.location.street.name}`,
          city: user.location.city,
          state: user.location.state,
          country: user.location.country,
          postcode: user.location.postcode,
        },
        online: {
          email: user.email,
          username: user.login.username,
          password: user.login.password,
        },
        contact: {
          cell: user.cell,
          phone: user.phone,
        },
      });

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [reload]);

  return (
    <div className="user-profile__container">
      {/* loading state */}
      {loading && <ProfileLoader />}
      {/* user profile */}
      <div className="user-profile">
        {/* profile intro - img and name */}
        <ProfileIntro values={userDetails.intro} />
        {/* profile details - birthday,location, online, phone, */}
        <div className="user-details">
          <hr className="hr" />
          <ProfileSection title="Birthday" values={userDetails.dob} />
          <hr className="hr" />
          <ProfileSection title="location" values={userDetails.location} />
          <hr className="hr" />
          <ProfileSection title="Online" values={userDetails.online} />
          <hr className="hr" />
          <ProfileSection title="Contact" values={userDetails.contact} />
        </div>
      </div>
    </div>
  );
}
