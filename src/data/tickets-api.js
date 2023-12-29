import axios from "axios";

export const api = {
    getTicket: async (id) => {
        const response = await axios.get(`${import.meta.env.VITE_TICKETS_URL}&$filter=(IDTodoList eq ${id})`).data.d;

        return response.data.d;
    },
    getTickets: async (username) => {
        const response = await axios.get(`${import.meta.env.VITE_TICKETS_URL}&$filter=(substringof('${username}', AssegnatoA) and Status ne 90 and substringof('√', AssegnatoA) eq false)`);

        return response.data.d;
    }
}