import { CSButton } from "../../../components/atoms/button/Button";
import {
  CSCheckbox,
  checkboxValueType,
} from "../../../components/atoms/checkbox/Checkbox";
import { Flex } from "../../../components/atoms/flex/Flex";
import downloadIcon from "../../../assets/arrow-bar-to-down.svg";
import { AssessmentDataType, SCREEN_NAME } from "../Assessment";
import { CSAlertBox } from "../../../components/molecules/alert-box/alert-box";
import { useState } from "react";
import { CSLabel } from "../../../components/atoms/label/label";
import { Box } from "../../../components/atoms/box/box";

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
  const [showAlert, setAlert] = useState(false);
  const itemCheckedState =
    selectedItem.size === 0
      ? "unchecked"
      : selectedItem.size === inputData.length
      ? "checked"
      : "indeterminate";

  const filteredItems = inputData.filter(
    (item) => selectedItem.has(item.name) && item.status === "available"
  );

  return (
    <Flex as="header" alignItems="center" className={`${SCREEN_NAME}__header`}>
      <CSCheckbox
        value={itemCheckedState}
        indeterminate={true}
        onChange={onChange}
        elementProps={{
          "aria-label": selectedItem.size
            ? `click to select all items`
            : "click to uncheck all",
        }}
      >
        {selectedItem.size === 0
          ? "None Selected"
          : `Selected ${selectedItem.size}`}
      </CSCheckbox>

      <CSButton
        icon={<img src={downloadIcon} alt="download icon image" />}
        onClick={() => setAlert(true)}
      >
        Download Selected
      </CSButton>

      <CSAlertBox showAlert={showAlert} onClose={() => setAlert(false)}>
        <Flex
          flexDirection="column"
          className={`${SCREEN_NAME}__data-container`}
        >
          <Box as="h1" className={`${SCREEN_NAME}__header-title`}>
            Alert Box
          </Box>
          {filteredItems.map((item) => (
            <Flex
              flexDirection="row"
              gap="16px"
              className={`${SCREEN_NAME}__assessment-model-fields`}
            >
              <CSLabel
                className={`${SCREEN_NAME}__field ${SCREEN_NAME}_field--highlight`}
              >
                {item.device}
              </CSLabel>
              <CSLabel>{item.path}</CSLabel>
            </Flex>
          ))}
        </Flex>
      </CSAlertBox>
    </Flex>
  );
}
