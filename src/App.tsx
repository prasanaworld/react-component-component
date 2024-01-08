import "./App.css";
import { CSButton } from "./components/atoms/button/Button";
import downloadIcon from "./assets/arrow-bar-to-down.svg";
import { CSCheckbox } from "./components/atoms/checkbox/Checkbox";
import { CSTable } from "./components/organisms/table/table";

function App() {
  const tableData = [
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

  const tableRow = tableData.map((row) => {
    return (
      <CSTable.Row isSelectable={true} key={row.name}>
        <CSTable.Cell>{row.name}</CSTable.Cell>
        <CSTable.Cell>{row.device}</CSTable.Cell>
        <CSTable.Cell width={"40%"} textAlign="left">
          {row.path}
        </CSTable.Cell>
        <CSTable.Cell>{row.status}</CSTable.Cell>
      </CSTable.Row>
    );
  });

  return (
    <>
      <CSCheckbox
        value="indeterminate"
        indeterminate={true}
        onChange={(v) => console.log(v)}
      >
        Selected
      </CSCheckbox>
      <CSButton
        label="Download Selected"
        icon={<img src={downloadIcon} alt="download icon image" />}
      ></CSButton>

      <CSTable>
        <CSTable.Row isHeader={true}>
          <CSTable.Header>name</CSTable.Header>
          <CSTable.Header>device</CSTable.Header>
          <CSTable.Header textAlign="left">path</CSTable.Header>
          <CSTable.Header>status</CSTable.Header>
        </CSTable.Row>
        <>{tableRow}</>
      </CSTable>
    </>
  );
}

export default App;
