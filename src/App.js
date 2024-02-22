import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JS from "./pages/js";


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <h1>Error.........</h1>,
    },
  
    {
      path: "/html",
      element: <Html />,
    },
  
    {
      path: "/js",
      element: <JS />,
    },
  
    {
      path: "/css",
      element: <Css />,
    },
  ]);
  return (
      <>
      <RouterProvider router={router} />
      </>
    )
}

export default App;
