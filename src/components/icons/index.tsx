import React from "react";
import { FacebookIcon } from "./facebook";
import { InstagramIcon } from "./instagram";
import { TwitterIcon } from "./twitter";
import { YoutubeIcon } from "./youtube";

const icons = (icon: string) => {
  const iconValue = icon.toUpperCase();

  switch (iconValue) {
    case "INSTAGRAM":
      return <InstagramIcon />;
    case "FACEBOOK":
      return <FacebookIcon />;
    case "YOUTUBE":
      return <YoutubeIcon />;
    case "TWITTER":
      return <TwitterIcon />;
    default:
      return "";
  }
};

export default icons;
