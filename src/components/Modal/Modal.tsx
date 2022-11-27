import { Wrapper } from "./Wrapper";
import { Modal as MuiModal, Paper } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export interface ModalProps extends PropsWithChildren {
  onClose: () => void;
}

export const Modal: FC<ModalProps> = ({ onClose, children }) => {
  return (
    <MuiModal open={true} onClose={onClose}>
      <Wrapper component={Paper}>{children}</Wrapper>
    </MuiModal>
  );
};
