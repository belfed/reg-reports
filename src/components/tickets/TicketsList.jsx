import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

import { useCompositeStore } from "../../stores/store";

import Ticket from "./Ticket";
import { useEffect } from "react";

// Temporary mock data.
const mockData = [
    {
        id: "1",
        title: "Task 1",
        customer: "Customer A"
    },
    {
        id: "2",
        title: "Task 2",
        customer: "Customer B"
    },
    {
        id: "3",
        title: "Task 3",
        customer: "Customer C"
    },
    {
        id: "4",
        title: "Task 4",
        customer: "Customer D"
    },
    {
        id: "5",
        title: "Task 5",
        customer: "Customer E"
    },
    {
        id: "6",
        title: "Task 6",
        customer: "Customer F"
    },
    {
        id: "7",
        title: "Task 7",
        customer: "Customer G"
    },
    {
        id: "8",
        title: "Task 8",
        customer: "Customer H"
    },
    {
        id: "9",
        title: "Task 9",
        customer: "Customer I"
    },
    {
        id: "10",
        title: "Task 10",
        customer: "Customer J"
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
    margin: auto;
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    width: 100%;
`;

export default TicketsList;