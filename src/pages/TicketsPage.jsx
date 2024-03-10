import { Navigate } from "react-router-dom";

import { getItemFromLocalStorage } from "../data/login-api";
import TicketsList from "../components/tickets/TicketsList";

const TicketsPage = () => {
    const isLoggedIn = getItemFromLocalStorage("username");

    if (!isLoggedIn) {
        return <Navigate replace to="/login" />
    }

    return <TicketsList />;
}

export default TicketsPage;