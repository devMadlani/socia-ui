import Home from "./pages/home/Home";
import Login from "./pages/login/Login"
import Register from "./pages/Register/Register"
import Profile from "./pages/profile/Profile"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/profile/:username",
    element: <Profile />,
  },
]);
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
