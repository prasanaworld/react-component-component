import { ReactNode } from "react";
import { Box, BoxProps } from "../../atoms/box/box";
import "./alert-box.scss";
import { Flex } from "../../atoms/flex/Flex";
import { CSButton } from "../../atoms/button/Button";
import closeIcon from "../../../assets/icons8-close-50.png";

export type CSAlertBoxProps = {
  showAlert: boolean;
  className?: string;
  onClose?: () => void;
  children: ReactNode;
} & BoxProps;

const MOLECULE_NAME = "cs-alert-box";
export function CSAlertBox({
  showAlert,
  onClose,
  children,
  className = "",
  ...styleProps
}: CSAlertBoxProps) {
  if (!showAlert) {
    return null;
  }

  return (
    <Box as="modal" className={`${MOLECULE_NAME} ${className}`}>
      <Box className={`${MOLECULE_NAME}__fadeout-region`}>
        <Box className={`${MOLECULE_NAME}__container`}>
          <Box className={`${MOLECULE_NAME}__content`} {...styleProps}>
            <Flex flexDirection="column">
              <Box className={`${MOLECULE_NAME}__header`}>
                <CSButton
                  className={`${MOLECULE_NAME}__close-button`}
                  onClick={() => onClose?.()}
                >
                  <img src={closeIcon} alt="download icon image" />
                </CSButton>
              </Box>
              {children}
            </Flex>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
