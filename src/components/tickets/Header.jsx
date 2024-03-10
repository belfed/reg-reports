import styled from "styled-components";

const Header = () => {
    return (
        <Container>
            <Title>/REG/Reports</Title>
            <button>REGISTER</button>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
`;

const Title = styled.h1`
  font-size: 1.3em;
  text-align: center;
`;

export default Header;