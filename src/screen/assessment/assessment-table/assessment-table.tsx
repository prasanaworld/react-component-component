import { Flex } from "../../../components/atoms/flex/Flex";
import { CSStatus } from "../../../components/molecules/status/status";
import { CSTable } from "../../../components/organisms/table/table";
import { AssessmentDataType, SCREEN_NAME } from "../Assessment";

export type AssessmentTableProps = {
  selectedItem: Set<string>;
  setSelectedItem: (item: Set<string>) => void;
  inputData: AssessmentDataType[];
};

export function AssessmentTable({
  selectedItem,
  inputData,
  setSelectedItem,
}: AssessmentTableProps) {
  return (
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
              <CSTable.Row
                key={row.name}
                ariaLabel="click to select row"
                isSelectable={true}
                isChecked={selectedItem.has(row.name)}
                onSelected={(state) => {
                  const currentSelectedItem = new Set(selectedItem);
                  if (state) {
                    currentSelectedItem.add(row.name);
                  } else {
                    currentSelectedItem.delete(row.name);
                  }
                  setSelectedItem(new Set(currentSelectedItem));
                }}
              >
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
  );
}
