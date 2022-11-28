import { getUsersAPI } from "@/api/userAPI";
import { ConfirmModalProps, EditedField, User, UserModalProps } from "@/types";
import {
  createAsyncThunk,
  createSlice,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "./store";

export const getUsersAsync = createAsyncThunk(
  "user/getUsers",
  async () => await getUsersAPI()
);

export interface UserState {
  users: User[];
  userModal: UserModalProps | null;
  confirmModal: ConfirmModalProps | null;
  editedFields: EditedField;
}

const initialPokeState: UserState = {
  users: [],
  userModal: null,
  confirmModal: null,
  editedFields: {},
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialPokeState,

  reducers: {
    setUsers: (state, action: PayloadAction<UserState["users"]>) => {
      state.users = action.payload;
    },
    removeUser: (state, { payload }: PayloadAction<string>) => {
      const theIndex = state.users.findIndex((user) => user.id === payload);
      if (theIndex === -1) return console.warn("cannot find user");

      state.users.splice(theIndex, 1);
    },
    createUser: (state, { payload }: PayloadAction<User>) => {
      state.users.push({ ...payload, id: payload.id ?? nanoid(6) });
    },
    changeUser: (
      state,
      { payload }: PayloadAction<Partial<User> & Pick<User, "id">>
    ) => {
      const theUserIndex = state.users.findIndex(
        (user) => user.id === payload.id
      );
      if (theUserIndex === -1) return console.warn("cannot find the user");
      state.users[theUserIndex] = { ...state.users[theUserIndex], ...payload };
    },
    openUserModal: (state, { payload }: PayloadAction<UserModalProps>) => {
      state.userModal = payload;
    },
    closeUserModal: (state) => {
      state.userModal = null;
    },

    openConfirmModal: (
      state,
      { payload }: PayloadAction<ConfirmModalProps>
    ) => {
      state.confirmModal = payload;
    },
    closeConfirmModal: (state) => {
      state.confirmModal = null;
    },

    markFieldAsEdited: (
      state,
      { payload }: PayloadAction<{ id: string; field: string }>
    ) => {
      state.editedFields[payload.id] = [
        ...(state.editedFields[payload.id] ?? []),
        payload.field,
      ];
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getUsersAsync.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});
export const userReducer = userSlice.reducer;

export const {
  setUsers,
  removeUser,
  createUser,
  openUserModal,
  closeUserModal,
  changeUser,
  openConfirmModal,
  closeConfirmModal,
  markFieldAsEdited,
} = userSlice.actions;

export const getUsers = (state: RootState) => state.user.users;
export const getUserModal = (state: RootState) => state.user.userModal;
export const getConfirmModal = (state: RootState) => state.user.confirmModal;
export const getEditedFields = (state: RootState) => state.user.editedFields;
