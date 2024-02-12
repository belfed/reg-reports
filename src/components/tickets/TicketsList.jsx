import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

import { useCompositeStore } from "../../stores/store";

import Ticket from "./Ticket";
import { useEffect } from "react";

// Temporary mock data.
const mockData = [
    {
        id: 53920,
        title: "App Approntamento e Allestimento",
        customer: "Acciai Vender SpA",
    },
    {
        id: 65101,
        title: "Assistenza Go-Live",
        customer: "Acciai Vender SpA",
    },
    {
        id: 12345,
        title: "Prefatturazione CAP",
        customer: "Regesta SpA",
    }
]

const TicketsList = () => {
    const tickets = useCompositeStore((state) => state.tickets);
    const setTickets = useCompositeStore((state) => state.setTickets);

    setTickets(tickets.length === 0 ? useLoaderData() || mockData : tickets);

    return (
        <Container>
            {
                tickets?.map((ticket) => <Ticket key={ticket.id} ticket={ticket} />)
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