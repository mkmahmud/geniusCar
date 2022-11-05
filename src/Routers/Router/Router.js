import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import LogIn from "../../pages/Auth/LogIn/LogIn";
import Home from "../../pages/Home/Home";

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
        }
      ]
    },
    {
        path:'/about',
        element:<>This is about </>
    }
  ])

  export default router