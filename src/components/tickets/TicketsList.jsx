import styled from "styled-components";
import Ticket from "./Ticket";
import { useLoaderData } from "react-router-dom";

const mockData = [
    {
        id: 53920,
        title: "App Approntamento e Allestimento",
        customer: "Acciai Vender SpA"
    },
    {
        id: 65101,
        title: "Assistenza Go-Live",
        customer: "Acciai Vender SpA"
    },
    {
        id: 12345,
        title: "Prefatturazione CAP",
        customer: "Regesta SpA"
    }
]

const TicketsList = () => {
    /** 
     * TODO: Remove mock data usage when tickets APIs are up and running again.
     */
    const tickets = useLoaderData() || mockData;
    return (
        <Container>
            {
                tickets.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
            }
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100%;
    width: 100%;

    padding: 5px;

    box-sizing: border-box;
`;

export default TicketsList;