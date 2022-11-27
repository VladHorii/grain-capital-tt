import { Button, Modal } from "@/components";
import { ConfirmModalProps } from "@/types";
import { FC } from "react";
import styled from "styled-components";

interface Props extends ConfirmModalProps {
  onClose: () => void;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 20px;
`;

export const ConfirmModal: FC<Props> = ({ title, onClose, onClick }) => {
  const handleConfirm = () => {
    onClick();
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <Wrapper>
        <p>{title}</p>
        <Button onClick={handleConfirm}>Confirm</Button>
      </Wrapper>
    </Modal>
  );
};
