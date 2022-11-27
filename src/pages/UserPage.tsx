import { Button } from "@/components";
import { useGetUser } from "@/hooks";
import { getUsers, useAppSelector } from "@/store";
import { ROUTES } from "@/types";
import { Link, useNavigate, useParams } from "react-router-dom";

export const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { user, userIndex } = useGetUser(userId);
  const users = useAppSelector(getUsers);

  const handlePrevBtnClick = () => {
    if (userIndex === null) return;

    const prevUser = users[userIndex - 1];
    if (!prevUser) return;
    navigate(`/${ROUTES.user}/${prevUser.id}`);
  };

  const handleNextBtnClick = () => {
    if (userIndex === null) return;

    const nextUser = users[userIndex + 1];
    if (!nextUser) return;
    navigate(`/${ROUTES.user}/${nextUser.id}`);
  };

  return (
    <>
      {!user && <div>Loading...</div>}

      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <div>
        <Button onClick={handlePrevBtnClick} disabled={userIndex === 0}>
          Previous user
        </Button>

        <Button
          onClick={handleNextBtnClick}
          disabled={userIndex === users.length - 1}
        >
          Next user
        </Button>
      </div>

      <Link to={`/${ROUTES.home}`}>Go to home page</Link>
    </>
  );
};
