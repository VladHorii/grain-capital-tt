import { Button, SearchField, UserTable } from "@/components";
import {
  changeUser,
  createUser,
  getUsers,
  openConfirmModal,
  openUserModal,
  removeUser,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { ROUTES, User } from "@/types";
import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();
  const users = useAppSelector(getUsers);
  const dispatch = useAppDispatch();

  const handleSearch = (value: string) => {
    if (!value) return console.warn("no value");
    const valueLowerCase = value.toLowerCase();
    const foundUser = users.find(
      (user) =>
        user.name.toLowerCase().includes(valueLowerCase) ||
        user.username.toLowerCase().includes(valueLowerCase) ||
        user.email.toLowerCase().includes(valueLowerCase)
    );
    if (!foundUser) return console.warn("the user not found");

    navigate(`/${ROUTES.user}/${foundUser.id}`);
  };

  const handleRowClick = (user: User) => {
    navigate(`/${ROUTES.user}/${user.id}`);
  };

  const handleRemoveUser = (user: User) => {
    dispatch(
      openConfirmModal({
        title: `Remove user <${user.name}>?`,
        onClick: () => dispatch(removeUser(user.id)),
      })
    );
  };

  const handleEditUser = (user: User) => {
    dispatch(
      openUserModal({
        fields: user,
        onSubmit: (updatedUser) => dispatch(changeUser(updatedUser)),
      })
    );
  };

  const handleOpenModalCreateUser = () => {
    dispatch(
      openUserModal({
        onSubmit: (user) => dispatch(createUser(user)),
      })
    );
  };

  return (
    <div>
      <SearchField onSearch={handleSearch} />
      <Button onClick={handleOpenModalCreateUser}>Create a new user</Button>
      <UserTable
        data={users}
        onRowClick={handleRowClick}
        onEdit={handleEditUser}
        onRemove={handleRemoveUser}
      />
    </div>
  );
};
