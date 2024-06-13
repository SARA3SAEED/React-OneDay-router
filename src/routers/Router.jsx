import Home from '../routers/Home.jsx'
import SignUp from '../routers/Signup.jsx'
import Login from '../routers/Login.jsx'
import Books from '../routers/Books.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"



export default function Router(){ 
    const router = createBrowserRouter([
     {
      path: "/",
      element: <Home />
     }
     ,
     {
        path: "/SignUp",
        element: <SignUp /> 
     }
     ,
     {
        path: "/Login",
        element: <Login /> 
     }
     ,
     {
        path: "/Books",
        element: <Books /> 
     }
  
    ]);

    
    ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>)
    
}
