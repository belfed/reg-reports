import { RouterProvider, createBrowserRouter } from "react-router-dom";

import LoginPage from "./pages/LoginPage";
import TicketsPage from "./pages/TicketsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TicketsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/tickets",
    element: <TicketsPage />,
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;