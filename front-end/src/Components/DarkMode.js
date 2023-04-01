import React from "react";
import MaterialUISwitch from "./MaterialUISwitch";
import "../Styles/darkmode.css"

const DarkMode = () => {
   //using state to set dark mode toggle to false as default
   const [state, setStatte] = React.useState({
    darkmode: false
});
//function toggles dark mode by setting state and changing class list properties
const toggleDarkMode = (event) => {
  setStatte({
    ...state,
    [event.target.name]: event.target.checked,
  });
  let element = document.body;
  element.classList.toggle("dark-mode");
  element.classList.toggle("dark-mode-input")
};

    return (
      <div>
         <MaterialUISwitch className="darkmode-switch" checked={state.darkmode} onChange={toggleDarkMode} label="MUI switch" name="darkmode"/> *new
      </div>
    )
}

export default DarkMode;