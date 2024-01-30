import { Navigate } from "react-router-dom";
import styled from "styled-components";

import LoginForm from "../components/login/LoginForm";

import { getItemFromLocalStorage } from "../data/login-api";

const LoginPage = () => {
    const isLoggedIn = getItemFromLocalStorage("username");

    return (
        <Container>
            {
                isLoggedIn ? <Navigate replace to="/tickets" /> : <LoginForm />
            }
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export default LoginPage;