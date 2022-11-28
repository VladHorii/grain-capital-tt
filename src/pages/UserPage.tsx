import { Button } from "@/components";
import { useGetUser } from "@/hooks";
import { getEditedFields, getUsers, useAppSelector } from "@/store";
import { ROUTES } from "@/types";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;
`;

const Text = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: red;
`;

export const UserPage = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { user, userIndex } = useGetUser(userId);
  const users = useAppSelector(getUsers);
  const editedFields = useAppSelector(getEditedFields);

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

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      {editedFields.includes(user.id) && <Text>User has been edited</Text>}

      <pre>{JSON.stringify(user, null, 2)}</pre>

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
    </Container>
  );
};
