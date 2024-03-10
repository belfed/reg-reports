import styled from "styled-components";
import { useLoaderData } from "react-router-dom";

import { useCompositeStore } from "../../stores/store";

import Ticket from "./Ticket";
import Header from "./Header";

const TicketsList = () => {
  const tickets = useCompositeStore((state) => state.tickets);
  const setTickets = useCompositeStore((state) => state.setTickets);
  setTickets(useLoaderData());

  return (
    <Container>
      <Header />
      {tickets?.map((ticket) => (
        <Ticket key={ticket.id} ticket={ticket} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  row-gap: 5px;

  padding: 0rem 1rem 1rem 1rem;

  width: 100%;
`;

export default TicketsList;
