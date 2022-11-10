import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import Home from "../../pages/Home/Home/Home";
import Services from "../../pages/Services/Services";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Login/Register";
import ServiceDetails from "../../pages/ServiceDetails/ServiceDetails";
import AddServices from "../../pages/AddServices/AddServices";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Reviews from "../../pages/MyReviews/MyReviews";
import ReviewEdit from "../../pages/MyReviews/ReviewEdit";
import Blog from "../../pages/Blog/Blog";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/services/:id',
                element:<ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addservices',
                element: <PrivateRoutes><AddServices></AddServices></PrivateRoutes>
            },
            {
                path: '/myreviews',
                element: <PrivateRoutes><Reviews/></PrivateRoutes>
            },
            {
                path:'/review/:id',
                element: <ReviewEdit></ReviewEdit>,
                loader: ({ params }) => fetch(`http://localhost:5000/review/${params.id}`)
            },
            {
                path:'/blog',
                element: <Blog></Blog>
            }
        ]
    }
])