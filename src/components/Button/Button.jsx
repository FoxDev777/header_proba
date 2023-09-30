import React from "react";

import "./button.css"

export default function Button({ functionClick, nameBtn, functionMouseOut }) {
  return (
    <button
      className="btnPrevSlider"
      onClick={functionClick}
      onMouseOut={functionMouseOut}
      type="button"
    >
      {nameBtn}
    </button>
  );
}
