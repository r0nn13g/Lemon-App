import React from "react";
import MaterialUISwitch from "./MaterialUISwitch";

const DarkMode = () => {
   //using state to set dark mode toggle to false as default
   const [color, setColor] = React.useState({
    darkmode: false
});
//function toggles dark mode by setting state and changing class list properties
const toggleDarkMode = (event) => {
  setColor({
    ...color,
    [event.target.name]: event.target.checked,
  });
  let element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.toggle("dark-mode-input")
};

    return (
      <div>
         <MaterialUISwitch className="darkmode-switch" checked={color.darkmode} onChange={toggleDarkMode} label="MUI switch" name="darkmode"/> *new
      </div>
    )
}

export default DarkMode;