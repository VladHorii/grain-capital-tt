import { ROUTES } from "@/types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  & {
    h1,
    h3 {
      margin: 0;
      padding: 0;
    }
  }
`;

export const LandingPage = () => {
  return (
    <Container>
      <h1>Hi there</h1>
      <h3>This is a simple application for CRUD users</h3>
      <Link to={`/${ROUTES.home}`}>Let's try it rn</Link>
    </Container>
  );
};
