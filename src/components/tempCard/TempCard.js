import React from "react";
import "./TempCard.css";

export default function TempCard({ cardInfo, isDark }) {
  const colorArrays = [];

  function rgb(values) {
    return typeof values === "undefined" ? null : "rgb(" + values.join(', ') + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets ? descBullets.map((item) => <li className={isDark ? "subTitle dark-mode-text": "subTitle"}>{item}</li>) : null
  };

  return (
    <div className={isDark ? "experience-card-dark":"experience-card"}>
      <div style={{background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.projectName}</h5>
        </div>
        
        {/* <img crossOrigin={"anonymous"} ref={imgRef} className="experience-roundedimg" src={cardInfo.companylogo} alt={cardInfo.company} onLoad={() => getColorArrays()}/> */}
      </div>
      <div className="experience-text-details">
        {/* <h5 className={isDark ? "experience-text-role dark-mode-text":"experience-text-role"}>{cardInfo.projectType}</h5> */}
        <h5 className={isDark ? "experience-text-date dark-mode-text":"experience-text-date"}>{cardInfo.date}</h5>
        <ul>
          <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
        </ul>
      </div>
    </div>
  );
}
