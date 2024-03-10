import { RouterProvider, createBrowserRouter } from "react-router-dom";

import { getTickets } from "./data/tickets-api";

import LoginPage from "./pages/LoginPage";
import TicketsPage from "./pages/TicketsPage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getTickets,
    element: <TicketsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/tickets",
    loader: getTickets,
    element: <TicketsPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
