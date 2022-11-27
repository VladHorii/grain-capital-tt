import { useAppSelector } from "@/store/hooks";
import { getUsers } from "@/store/userSlice";
import { User } from "@/types";
import { useEffect, useState } from "react";

export const useGetUser = (userId?: string) => {
  const [user, setUser] = useState<User | null>(null);
  const [userIndex, setUserIndex] = useState<number | null>(null);
  const users = useAppSelector(getUsers);

  useEffect(() => {
    if (!userId) return;

    const theUserIndex = users.findIndex((user) => user.id === userId);
    if (theUserIndex === -1) return console.warn("no user");

    setUser(users[theUserIndex]);
    setUserIndex(theUserIndex);
  }, [userId, users]);

  return {
    user,
    userIndex,
  };
};