import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/homePage/HomePage";
import MainLayout from "../layouts/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children:[
            {
                path: '/',
                element: <HomePage/>
            }
        ] 
    }
])

export default router;