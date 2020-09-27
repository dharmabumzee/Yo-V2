import React from "react";
import useDarkMode from "use-dark-mode";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <div className="dark-light-toggle animated zoomIn delay-1s">
      <button className="toggle-button" type="button" onClick={darkMode.enable}>
        ☾&#xFE0E;
      </button>
      <button
        className="toggle-button"
        type="button"
        onClick={darkMode.disable}
      >
        ☀&#xFE0E;
      </button>
    </div>
  );
};

export default DarkModeToggle;
