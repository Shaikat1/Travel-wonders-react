import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Register/Register";
import AllServices from "../Pages/AllServices/AllServices";
import AddServices from "../Pages/AddServices/AddServices";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
        },
        {
          path:"/add-services",
          element:<AddServices></AddServices>,
        },
        {
          path:"/services/:id",
          element:<ServiceDetails></ServiceDetails>,
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`)
        },
        // {
        //   path:"/my-services",
        //   element:<AllServices></AllServices>,
        // },
        // {
        //   path:"/my-schedules",
        //   element:<AllServices></AllServices>,
        // },
      ]
    },
  ]);

  export default router;