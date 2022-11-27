import {
  Button as MuiButton,
  ButtonProps as MuiButtonProps,
} from "@mui/material";
import { FC } from "react";

export const Button: FC<MuiButtonProps> = ({ children, ...props }) => {
  return (
    <MuiButton variant={"contained"} {...props}>
      {children}
    </MuiButton>
  );
};
