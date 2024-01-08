import { Box } from "../../components/atoms/box/box";
import { useCallback, useState } from "react";
import { AssessmentHeader } from "./assessment-header/assessment-header";
import { AssessmentTable } from "./assessment-table/assessment-table";
import { checkboxValueType } from "../../components/atoms/checkbox/Checkbox";
import "./assessment.scss";

export type AssessmentDataType = {
  name: string;
  device: string;
  path: string;
  status: "scheduled" | "available";
};

export type AssessmentProps = {
  inputData: AssessmentDataType[];
};

export const SCREEN_NAME = "cs-assessment";
export function Assessment({ inputData }: AssessmentProps) {
  const [selectedItem, setSelectedItem] = useState<Set<string>>(new Set());

  const handleChange = useCallback(
    (state: checkboxValueType) => {
      if (state === "unchecked") {
        return setSelectedItem(new Set());
      } else if (state === "checked") {
        return setSelectedItem(new Set(inputData.map((item) => item.name)));
      }
    },
    [inputData]
  );

  return (
    <Box as="main" className={SCREEN_NAME}>
      <AssessmentHeader
        selectedItem={selectedItem}
        onChange={handleChange}
        inputData={inputData}
      />
      <AssessmentTable
        selectedItem={selectedItem}
        setSelectedItem={setSelectedItem}
        inputData={inputData}
      />
    </Box>
  );
}
