import React from "react";
import { TinyButton as ScrollUpButton } from "react-scroll-up-button";

class TinyButton extends React.Component {
  render() {
    return (
      <ScrollUpButton
        EasingType="easeInOutQuad"
        StopPosition={0}
        ShowAtPosition={550}
        AnimationDuration={1200}
        className="tinybutton"
      />
    );
  }
}

export default TinyButton;
