import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { setItemInLocalStorage } from "../data/login-api";

/**
 * LoginPage component for handling user authentication.
 * @component
 * @returns {JSX.Element} Rendered LoginPage component.
 */
const LoginPage = () => {
    const [username, setUsername] = useState("");

    const [key, setKey] = useState(0);
    const [isUsernameValid, setIsUsernameValid] = useState(true);
    const [isLoginDisabled, setIsLoginDisabled] = useState(true);

    const checkUsername = (username) => /^[a-zA-Z]+[.][a-zA-Z]+$/.test(username);

    const onChangeUsernameHandler = (e) => {
        const { value } = e.target;
        const newUsername = value;

        if(checkUsername(newUsername)) {
            setIsUsernameValid(true);
        }

        setIsLoginDisabled(!checkUsername(newUsername));
        setUsername(value);
    };

    const onKeyDownUsernameHandler = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();

            if(!isLoginDisabled) {
                setItemInLocalStorage({ key: "username", value: username });
            }

            setIsUsernameValid(!isLoginDisabled);
            setKey(prev => prev + 1);
        }
    };

    const onClickLoginHandler = () => setItemInLocalStorage({ key: "username", value: username });

    return (
        <Container>
            <Title>/REG/Reports</Title>
            <Username key={key}
                placeholder="Username"
                onChange={onChangeUsernameHandler}
                onKeyDown={onKeyDownUsernameHandler}
                $isValid={isUsernameValid}
                value={username} 
                autoFocus/>
            <Login disabled={isLoginDisabled} onClick={onClickLoginHandler}>Login</Login>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    padding: 5px;
`;

const Title = styled.h1`
    font-size: 3.2em;
    text-align: center;
`;

const Username = styled.input`
    padding: 6px;

    font-size: 1em;
    font-family: inherit;

    border: 1px solid #767676;
    border-radius: 2px;

    text-align: center;

    background-color: #3B3B3B;

    animation: ${props => !props.$isValid ? css`${shake} 0.1s linear 0s 1` : `none`};

    &:focus {
        outline: 2px solid;
        color: ${props => !props.$isValid ? `#E51C23` : `inherit`};
        outline-color: ${props => !props.$isValid ? `red` : `var(--primary)`};
        outline-offset: -2px;
    }
`;

const shake = keyframes`
    0% { margin-left: 0rem; }
    25% { margin-left: 0.5rem; }
    75% { margin-left: -0.5rem; }
    100% { margin-left: 0rem; }
`;

const Login = styled.button`
    padding: 6px;

    font-size: 1em;
    font-family: inherit;
    font-weight: bold;

    background-color: var(--primary);
    border: 1px solid transparent;
    border-radius: 2px;

    &:hover {
        background-color: #2196f3;
        cursor: pointer;
    }

    &:active {
        background-color: #1565c0;
    }

    &:disabled{
        cursor: default;
        background-color: #9E9E9E;
        color: #E3E3E3;
    }
`;

export default LoginPage;