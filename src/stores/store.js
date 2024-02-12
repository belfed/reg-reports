import { create } from "zustand";
import { createTicketSlice } from "./slices/createTicketSlice";

const useCompositeStore = create((...a) => ({
    ...createTicketSlice(...a)
}));

export {
    useCompositeStore
};