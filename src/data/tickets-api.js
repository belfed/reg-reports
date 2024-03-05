import axios from "axios";
import { getItemFromLocalStorage } from "./login-api";

/**
 * Asynchronously retrieves a single ticket based on the provided ID.
 *
 * @param {number} id - The ID of the ticket to retrieve.
 * @returns {Promise<object>} A promise that resolves to the ticket data.
 */
export const getTicket = async (id) => {
  const response = await axios.get(
    `${import.meta.env.VITE_TICKETS_URL}&$filter=(IDTodoList eq ${id})`
  ).data.d;

  return response.data.d;
};

/**
 * Asynchronously retrieves a list of tickets based on the provided username.
 *
 * @param {string} username - The username used for filtering tickets.
 * @returns {Promise<object>} A promise that resolves to the ticket data.
 */
export const getTickets = async () => {
  const response = await axios.get(
    `${
      import.meta.env.VITE_TICKETS_URL
    }&$filter=(substringof('${getItemFromLocalStorage(
      "username"
    )}', AssegnatoA) and Status ne 90 and substringof('√', AssegnatoA) eq false)`
  );

  return response.data.d.map((ticket) => ({
    id: ticket.IDTodoList,
    customer: ticket.Cliente,
    title: ticket.Titolo,
    description: "",
    elapsedTime: 0,
    isRunning: false,
  }));
};
