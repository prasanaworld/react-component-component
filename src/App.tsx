import "./App.css";
import { CSButton } from "./components/atoms/button/Button";
import downloadIcon from "./assets/arrow-bar-to-down.svg";

function App() {
  return (
    <>
      <CSButton
        label="Download Selected"
        icon={<img src={downloadIcon} alt="download icon image" />}
      ></CSButton>
    </>
  );
}

export default App;
