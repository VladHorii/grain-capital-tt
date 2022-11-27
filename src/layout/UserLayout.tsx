import { ConfirmModal, UserModal } from "@/components";
import {
  closeConfirmModal,
  closeUserModal,
  getConfirmModal,
  getUserModal,
  getUsersAsync,
  useAppDispatch,
  useAppSelector,
} from "@/store";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

export const UserLayout = () => {
  const dispatch = useAppDispatch();
  const userModalData = useAppSelector(getUserModal);
  const confirmModalData = useAppSelector(getConfirmModal);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, [dispatch]);

  const handleCloseUserModal = () => {
    dispatch(closeUserModal());
  };

  const handleCloseConfirmModal = () => {
    dispatch(closeConfirmModal());
  };

  return (
    <>
      <Outlet />

      {userModalData && (
        <UserModal {...userModalData} onClose={handleCloseUserModal} />
      )}
      {confirmModalData && (
        <ConfirmModal {...confirmModalData} onClose={handleCloseConfirmModal} />
      )}
    </>
  );
};
