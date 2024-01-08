import { Box } from "./components/atoms/box/box";
import { Assessment, AssessmentDataType } from "./screen/Assessment";

import "./App.scss";

const TABLE_DATA: AssessmentDataType[] = [
  {
    name: "smss.exe",
    device: "Stark",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\smss.exe",
    status: "scheduled",
  },

  {
    name: "netsh.exe",
    device: "Targaryen",
    path: "\\Device\\HarddiskVolume2\\Windows\\System32\\netsh.exe",
    status: "available",
  },

  {
    name: "uxtheme.dll",
    device: "Lanniester",
    path: "\\Device\\HarddiskVolume1\\Windows\\System32\\uxtheme.dll",
    status: "available",
  },

  {
    name: "cryptbase.dll",
    device: "Martell",
    path: "\\Device\\HarddiskVolume1\\Windows\\System32\\cryptbase.dll",
    status: "scheduled",
  },

  {
    name: "7za.exe",
    device: "Baratheon",
    path: "\\Device\\HarddiskVolume1\\temp\\7za.exe",
    status: "scheduled",
  },
];

function App() {
  return (
    <Box as="section" className="page-container">
      <Assessment inputData={TABLE_DATA} />
    </Box>
  );
}

export default App;
