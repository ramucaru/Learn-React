import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./ErrorRoutes";
import Contact from "../Container/Contact/Conatct";
import FoodDelivery from "../Container/FoodDelivery/FoodDelivery";
import Body from "./Body";
import AboutUs from "../Container/AboutUs/AboutUs";
import Cart from "../Container/Cart/Cart";

export const config = createBrowserRouter([
  {
    path: "/",
    element: <FoodDelivery />,
    errorElement: <ErrorComponent />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/contact", element: <Contact /> },
      { path: "/aboutus", element: <AboutUs /> },
      { path: "/cart", element: <Cart /> },
    ],
  },
]);
