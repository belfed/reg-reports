import { Navigate } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";

import { getItemFromLocalStorage } from "../data/login-api";

const LoginPage = () => {
  const isLoggedIn = getItemFromLocalStorage("username");

  if (isLoggedIn) {
    return <Navigate replace to="/tickets" />;
  }

  return (
    <Container>
      <LoginForm />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;

  min-width: 100lvw;
  min-height: 100lvh;
`;

export default LoginPage;
