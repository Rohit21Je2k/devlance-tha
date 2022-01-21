import React from "react";

import "./ProfileSection.css";

export default function ProfileSection(props) {
  const { title, values } = props;

  return (
    <div className="location-section section">
      <h3 className="section-title">{title}</h3>
      {values &&
        Object.entries(values).map((value, index) => {
          const [fieldName, fieldValue] = value;
          return (
            <div key={index} className="section-fields">
              <p className="section-fields__title">{fieldName}</p>
              <p className="section-fields__value">{fieldValue}</p>
            </div>
          );
        })}
    </div>
  );
}
