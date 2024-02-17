import { Navigate } from "react-router-dom";

import { getItemFromLocalStorage } from "../data/login-api";
import TicketsList from "../components/tickets/TicketsList";

const TicketsPage = () => {
    const isLoggedIn = getItemFromLocalStorage("username");

    return isLoggedIn ? <TicketsList /> : <Navigate replace to="/login" />
}

export default TicketsPage;