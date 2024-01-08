import { CSButton } from "../components/atoms/button/Button";
import downloadIcon from "../assets/arrow-bar-to-down.svg";
import { CSCheckbox } from "../components/atoms/checkbox/Checkbox";
import { CSTable } from "../components/organisms/table/table";
import { CSStatus } from "../components/molecules/status/status";
import { Flex } from "../components/atoms/flex/Flex";

import "./assessment.scss";
import { Box } from "../components/atoms/box/box";

export type AssessmentDataType = {
  name: string;
  device: string;
  path: string;
  status: "scheduled" | "available";
};

export type AssessmentProps = {
  inputData: AssessmentDataType[];
};

const SCREEN_NAME = "cs-assessment";
export function Assessment({ inputData }: AssessmentProps) {
  return (
    <Box as="main" className={SCREEN_NAME}>
      {/* Page header */}
      <Flex
        as="header"
        alignItems="center"
        className={`${SCREEN_NAME}__header`}
      >
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
      </Flex>

      {/* Page Table content */}
      <Flex as="summary" className={`${SCREEN_NAME}__body-content`}>
        <CSTable>
          <CSTable.Row isHeader={true}>
            <CSTable.Header>name</CSTable.Header>
            <CSTable.Header>device</CSTable.Header>
            <CSTable.Header textAlign="left">path</CSTable.Header>
            <CSTable.Header textAlign="left" width={"10%"}>
              status
            </CSTable.Header>
          </CSTable.Row>
          <>
            {inputData.map((row) => {
              return (
                <CSTable.Row isSelectable={true} key={row.name}>
                  <CSTable.Cell>{row.name}</CSTable.Cell>
                  <CSTable.Cell>{row.device}</CSTable.Cell>
                  <CSTable.Cell width={"40%"} textAlign="left">
                    {row.path}
                  </CSTable.Cell>
                  <CSTable.Cell>
                    <CSStatus showInfo={row.status === "available"}>
                      {row.status}
                    </CSStatus>
                  </CSTable.Cell>
                </CSTable.Row>
              );
            })}
          </>
        </CSTable>
      </Flex>
    </Box>
  );
}
