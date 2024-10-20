import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/Register/Register";
import Profile from "./pages/profile/Profile";
import { createBrowserRouter, RouterProvider ,Navigate} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messanger from "./pages/messanger/Messanger";
function App() {
  const { user } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <Home /> : <Register />,
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />,
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />,
    },
    {
      path: "/messanger",
      element: !user ? <Navigate to="/" /> : <Messanger />,
    },
    {
      path: "/profile/:username",
      element: <Profile />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
