import { TextField } from "@mui/material";
import { ChangeEvent, FC, FormEvent, useState } from "react";

export interface SearchFieldProps {
  onSearch: (value: string) => void;
}

export const SearchField: FC<SearchFieldProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!value) return;
    onSearch(value);
  };

  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleChangeValue}
        value={value}
      />
    </form>
  );
};
