import { buildNewTicketUrl } from "../../utils/string-utils";

const createTicketSlice = (set) => ({
  tickets: [],
  setTickets: (tickets) => set({ tickets }),
  toggleTicketIsRunning: (id, isRunning) =>
    set((state) => {
      const updatedTickets = state.tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, isRunning: isRunning } : ticket
      );
      updatedTickets.sort(
        (a, b) =>
          Number(b.isRunning ? b.isRunning : 0) -
          Number(a.isRunning ? a.isRunning : 0)
      );

      return {
        tickets: updatedTickets,
      };
    }),
  collectedTimes: [],
  saveTime: (ticket, elapsedTime) =>
    set((state) => {
      const updatedTickets = state.tickets.map((t) =>
        t.id === ticket.id ? { ...ticket, elapsedTime } : t
      );

      const newTime = {
        id: ticket.id,
        title: ticket.title,
        elapsedTime,
        url: buildNewTicketUrl(ticket),
      };

      return {
        tickets: updatedTickets,
        collectedTimes: [...state.collectedTimes, newTime],
      };
    }),
});

export { createTicketSlice };
