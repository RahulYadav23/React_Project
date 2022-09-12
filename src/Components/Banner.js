import React from "react";

export default function Banner(props) {
  return (
    <div className="banner-container display-flex">
      <img src={props.bannerLink} alt=''></img>
      <div className="banner-text-container display-flex flex-column">
        <h2 className="banner-text">Anime List</h2>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <h4 className="banner-sub-text">find your favourite anime</h4>
      </div>
    </div>
  );
}
