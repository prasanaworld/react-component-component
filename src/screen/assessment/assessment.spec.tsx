import { describe, it, expect } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { Assessment, AssessmentDataType } from "./assessment";

const demo_data: AssessmentDataType[] = [
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

describe("Test Assessment", () => {
  describe("Basic test", () => {
    it("The Assessment module should be loaded", () => {
      /** Act */
      render(<Assessment inputData={[]} />);

      /** Assert */
      const downloadButtonText = screen.getByText(/Download Selected/i);
      expect(downloadButtonText).toBeInTheDocument();
    });
  });

  describe("select-all checkbox test cases", () => {
    it("The select-all checkbox should be in an unselected state if no items are selected", () => {
      /** Act */
      render(<Assessment inputData={demo_data} />);

      /** Assert */
      const noItemSelected = screen.getByText(/None Selected/i);
      expect(noItemSelected).toBeInTheDocument();
    });

    it("The select-all checkbox should be in a selected state if all items are selected.", () => {
      /** Arrange */
      const sample_data = demo_data.slice(0, 1);

      /** Act */
      render(<Assessment inputData={sample_data} />);
      screen.getByTestId("row-smss.exe").click();

      /** Assert */
      const selectedText = screen.getByTestId(
        /select-all/i
      ) as HTMLInputElement;

      expect(selectedText.ariaChecked).toBeTruthy();
    });

    it("The select-all checkbox should be in an indeterminate state if some but not all items are selected.", () => {
      /** Arrange */
      const sample_data = demo_data.slice(0, 3);

      /** Act */
      render(<Assessment inputData={sample_data} />);
      screen.getByTestId("row-smss.exe").click();
      screen.getByTestId("row-netsh.exe").click(); // select 2 out of 3 items

      /** Assert */
      const selectAllText = screen.getByTestId(
        /select-all/i
      ) as HTMLInputElement;
      expect(selectAllText.indeterminate).toBeTruthy();
    });

    it("Clicking the select-all checkbox should select all items if none or some are selected.", () => {
      /** Arrange */
      const sample_data = demo_data.slice(0, 1);

      /** Act */
      render(<Assessment inputData={sample_data} />);
      screen.getByTestId(/select-all/i).click();

      /** Assert */
      const selectedAllCheckbox = screen.getByTestId(
        "row-smss.exe"
      ) as HTMLInputElement;
      expect(selectedAllCheckbox.checked).toBeTruthy();
    });

    it("Clicking the select-all checkbox should de-select all items if all are currently selected.", () => {
      /** Arrange */
      const sample_data = demo_data.slice(0, 1);

      /** Act */
      render(<Assessment inputData={sample_data} />);
      screen.getByTestId(/select-all/i).click(); // toggle to select
      screen.getByTestId(/select-all/i).click(); // toggle to unselect

      /** Assert */
      const selectedAllCheckbox = screen.getByTestId(
        "row-smss.exe"
      ) as HTMLInputElement;
      expect(selectedAllCheckbox.checked).toBeFalsy();
    });
  });

  describe("Download button test cases", () => {
    it(`Clicking "Download Selected" when some or all items are displayed should generate an alert box with the path and device of all selected files.`, () => {
      /** Arrange */
      const sample_data = demo_data.slice(0);

      /** Act */
      render(<Assessment inputData={sample_data} />);
      screen.getByText(/Download Selected/i).click();

      /** Assert */

      expect(screen.getByText("Targaryen")).toBeInTheDocument(); //check the value of available item 1
      expect(screen.getByText("Lanniester")).toBeInTheDocument(); //check the value of available item 2
    });
  });
});
