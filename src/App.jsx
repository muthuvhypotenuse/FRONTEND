import CustomButton from "./components/CustomButton";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [buttonState, setButtonState] = useState("white");
    function onSubmitclick() {
    setButtonState("white");
    alert("You Change the White Color")
  }

  function onCancelclick() {
    setButtonState("black");
    alert("You Change the Black Color")
  }

  return (

    <>
      <div>
        <CustomButton
          lable="Submit"
          bgcolor="green"
          color={buttonState}
          width="200px"
          clickEvent={onSubmitclick}
        />
        
        <CustomButton
          lable="Cancel"
          color={buttonState}
          bgcolor="red"
          width="200px"
          clickEvent={onCancelclick}
        />
      </div>
    </>
  );
}
export default App;
