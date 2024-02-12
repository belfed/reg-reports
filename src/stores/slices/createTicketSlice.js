const createTicketSlice = (set) => ({
    tickets: [],
    setTickets: (tickets) => set({ tickets }),
    toggleTicketIsRunning: (id, isRunning) => set((state) => {
        const updatedTickets = state.tickets.map((ticket) => ticket.id === id ? { ...ticket, isRunning: isRunning } : ticket);
        updatedTickets.sort((a, b) => Number(b.isRunning ? b.isRunning : 0) - Number(a.isRunning ? a.isRunning : 0));

        return {
            tickets: updatedTickets
        }
    }),
});

export {
    createTicketSlice
};