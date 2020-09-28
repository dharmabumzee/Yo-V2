import React from "react";
import Link from "./Link";

const Menu = () => {
  return (
    <div id="menu" className="menu animated flipInX delay-1s">
      <Link href="/">APOD</Link>
      <Link href="/images">IMAGES</Link>
    </div>
  );
};

export default Menu;
