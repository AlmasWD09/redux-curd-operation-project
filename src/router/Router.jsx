import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import EditUser from "../components/edditUser/EditUser";
import UserList from "../components/userList/UserList";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

        ],
    },
    {
        path: "/edit-user",
        element: <EditUser />,
    },
    {
        path: "/user-list",
        element: <UserList />,
    },
]);

export default router;