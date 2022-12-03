import React from "react";
import Image from "next/image";

const Logo = (_props) => {
  return (
    <Image
      width={250}
      height={123}
      src="/opengraph.png"
      aria-label="Native Talent in Tech Logo"
    />
  );
};

export default Logo;
