import "./App.css";
import { CSButton } from "./components/atoms/button/Button";
import downloadIcon from "./assets/arrow-bar-to-down.svg";
import { CSCheckbox } from "./components/atoms/checkbox/Checkbox";

function App() {
  return (
    <>
      <CSCheckbox
        label={"Selected"}
        value="indeterminate"
        indeterminate={true}
        onChange={(v) => console.log(v)}
      />
      <CSButton
        label="Download Selected"
        icon={<img src={downloadIcon} alt="download icon image" />}
      ></CSButton>
    </>
  );
}

export default App;
