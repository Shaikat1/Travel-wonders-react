import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import AllServices from "../Pages/AllServices/AllServices";
import AddServices from "../Pages/AddServices/AddServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import ErrorPage from "../Pages/ErrorPages/ErrorPage";
import MyServices from "../Pages/MyServices/MyServices";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Schedules from "../Pages/Schedules/Schedules";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<Home></Home>
        },
        {
          path:"/login",
          element:<Login></Login>,
        },
        {
          path:"/register",
          element:<Register></Register>,
        },
        {
          path:"/services",
          element:<AllServices></AllServices>,
          loader: ()=> fetch("http://localhost:5000/services")
        },
        {
          path:"/add_services",
          element:<PrivateRoute><AddServices></AddServices></PrivateRoute>,
        },
        {
          path:"/services/:id",
          element:<PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
        },
        {
          path:"/my_services",
          element:<PrivateRoute><MyServices></MyServices></PrivateRoute>,
          loader: ()=> fetch("http://localhost:5000/my_services")
        },
        {
          path:"/my_schedules",
          element:<Schedules></Schedules>,
          loader: ()=> fetch("http://localhost:5000/my_booking")
        },
      ]
    },
  ]);

  export default router;