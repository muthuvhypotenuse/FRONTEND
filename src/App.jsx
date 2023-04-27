import CustomButton from "./components/CustomButton";
import "./App.css";

function App() {

  function onSubmitclick() {
    alert("Submit Button clicked!");
  }

  function onCancelclick() {
    alert("Cancel Button clicked!");
  }

  return (
    <>
      <div>
        <CustomButton
          lable="Submit"
          bgcolor="green"
          width="200px"
          clickEvent={onSubmitclick}
        />
        <CustomButton
          lable="Cancel"
          bgcolor="red"
          width="200px"
          clickEvent={onCancelclick}
        />
      </div>
    </>
  );
}
export default App;
