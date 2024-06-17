import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import { Navigate } from "react-router-dom";
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [{ path: "", element: <HomePage />, exact: true }],
  },
  { path: "*", element: <Navigate to="/" /> }, // Redirect unknown paths to home
];

export default routes;
