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
      element: user ? <Home /> : <Navigate to="/login" />, 
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
      element: user ? <Messanger /> : <Navigate to="/login" />, 
    },
    {
      path: "/profile/:username",
      element: user ? <Profile /> : <Navigate to="/login" />, 
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
