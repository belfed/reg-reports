import { Navigate } from "react-router-dom";

import LoginForm from "../components/login/LoginForm";

import { getItemFromLocalStorage } from "../data/login-api";

const LoginPage = () => {
    const isLoggedIn = getItemFromLocalStorage("username");

    return isLoggedIn ? <Navigate replace to="/tickets" /> : <LoginForm />
}

export default LoginPage;