import {
  Button,
  createInitialValues,
  createUserFromInitialValues,
  fieldsMask,
  Modal,
} from "@/components";
import { markFieldAsEdited, useAppDispatch } from "@/store";
import { User, UserModalProps } from "@/types";
import { TextField } from "@mui/material";
import { useFormik } from "formik";
import { Container } from "./Container";

interface Props extends UserModalProps {
  onClose: () => void;
}

export const UserModal = <T extends User>({
  fields,
  onSubmit,
  onClose,
}: Props) => {
  const dispatch = useAppDispatch();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: { ...createInitialValues(fields) },
    onSubmit: (values) => {
      if (onSubmit) {
        if (fields) {
          dispatch(markFieldAsEdited(fields.id));
        }

        onSubmit(createUserFromInitialValues(values, fields?.id) as T);
      }
      onClose();
    },
  });

  return (
    <Modal onClose={onClose}>
      <Container onSubmit={handleSubmit}>
        {fieldsMask.map((field) => (
          <TextField
            key={field}
            required={true}
            label={field}
            name={field}
            value={(values as Record<string, string>)[field]}
            onChange={handleChange}
          />
        ))}

        <Button type={"submit"}>Submit</Button>
      </Container>
    </Modal>
  );
};
