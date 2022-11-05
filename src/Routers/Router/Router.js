import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LogIn from "../../pages/Auth/LogIn/LogIn";
import SignUp from "../../pages/Auth/SignUp/SignUp";
import Checkout from "../../pages/Checkout/Checkout";
import Home from "../../pages/Home/Home";
import Orders from "../../pages/Orders/Orders";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

const router = createBrowserRouter([
    {
      path:'/',
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/login',
          element:<LogIn></LogIn>
        },
        {
          path:'/signup',
          element:<SignUp></SignUp>
        },
        {
          path:'/services/:id',
          loader: ({params}) => fetch(`http://localhost:5000/services/${params.id}`),
          element:<Checkout></Checkout>
        },
        {
          path:'/orders',
          element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
        }
      ]
    },
    {
        path:'/about',
        element:<>This is about </>
    }
  ])

  export default router