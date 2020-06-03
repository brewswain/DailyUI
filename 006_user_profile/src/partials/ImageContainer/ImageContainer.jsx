import React from "react";

import { ProfilePicture } from "../../assets";

import "./ImageContainer.style.scss";

const ImageContainer = () => (
  <div className="image-container">
    <img src={ProfilePicture} alt="" className="profile-picture" />
  </div>
);

export default ImageContainer;
