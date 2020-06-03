import React from "react";

import { CustomButton } from "../../components";

import "./ProfileContent.style.scss";

const ProfileContent = () => (
  <div className="profile-content">
    <h1 className="profile-content-header">
      Kirby <span>Popstar</span>
    </h1>

    <div className="profile-content-body">
      <div className="video-container">
        <iframe
          title="Kirby 2 hour music mix"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/BtPbTikDDd0"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div className="profile-body">
        <div className="profile-subheader">
          <CustomButton>Follow</CustomButton>
        </div>
        <div className="profile-body-content">
          Kirby is a small pink spherical creature with two stubby arms, two red
          feet and two oval-shaped eyes with black pupils (with a faint shade of
          blue at the bottom starting with Kirby Super Star, which was
          brightened in later appearances). Kirby's cheek-blushes weren't
          introduced until his second game, Kirby's Adventure, where they
          appeared as two black whisker lines in artwork. In subsequent games
          until Kirby 64: The Crystal Shards, they were depicted as three red
          diagonal lines in artwork, although they were usually always solid red
          ovals in-game (except Kirby's Dream Land 2, where they were missing
          from his sprite).
        </div>
      </div>
    </div>
  </div>
);

export default ProfileContent;
