import { CSButton } from "../../../components/atoms/button/Button";
import {
  CSCheckbox,
  checkboxValueType,
} from "../../../components/atoms/checkbox/Checkbox";
import { Flex } from "../../../components/atoms/flex/Flex";
import downloadIcon from "../../../assets/arrow-bar-to-down.svg";
import { AssessmentDataType, SCREEN_NAME } from "../Assessment";

export type AssessmentHeaderProps = {
  selectedItem: Set<string>;
  onChange: (state: checkboxValueType) => void;
  inputData: AssessmentDataType[];
};

export function AssessmentHeader({
  selectedItem,
  onChange,
  inputData,
}: AssessmentHeaderProps) {
  const itemCheckedState =
    selectedItem.size === 0
      ? "unchecked"
      : selectedItem.size === inputData.length
      ? "checked"
      : "indeterminate";
  return (
    <Flex as="header" alignItems="center" className={`${SCREEN_NAME}__header`}>
      <CSCheckbox
        value={itemCheckedState}
        indeterminate={true}
        onChange={onChange}
      >
        {selectedItem.size === 0
          ? "None Selected"
          : `Selected ${selectedItem.size}`}
      </CSCheckbox>

      <CSButton
        label="Download Selected"
        icon={<img src={downloadIcon} alt="download icon image" />}
      ></CSButton>
    </Flex>
  );
}
