import { Button } from "@/components";
import { User } from "@/types";
import Paper from "@mui/material/Paper";
import MuiTable from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { MouseEvent } from "react";

export interface TableProps<T extends {}> {
  data: T[];
  onRowClick?: (row: T) => void;
  onRemove?: (row: T) => void;
  onEdit?: (row: T) => void;
}

export const UserTable = <T extends User>({
  data,
  onRowClick,
  onEdit,
  onRemove,
}: TableProps<T>) => {
  const handleRemove = (event: MouseEvent<HTMLButtonElement>, row: T) => {
    event.stopPropagation();
    if (onRemove) {
      onRemove(row);
    }
  };

  const handleEdit = (event: MouseEvent<HTMLButtonElement>, row: T) => {
    event.stopPropagation();

    if (onEdit) {
      onEdit(row);
    }
  };

  return (
    <div>
      <TableContainer component={Paper} sx={{ maxWidth: "650px" }}>
        <MuiTable aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>user_id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>user_name</TableCell>
              <TableCell>action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                key={row.name}
                sx={{ cursor: "pointer" }}
                onClick={() => onRowClick && onRowClick(row)}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>
                  <Button onClick={(event) => handleEdit(event, row)}>
                    Edit
                  </Button>
                  <Button onClick={(event) => handleRemove(event, row)}>
                    Remove
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </MuiTable>
      </TableContainer>
    </div>
  );
};
