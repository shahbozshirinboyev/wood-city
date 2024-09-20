// react router dom
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// layouts
import RootLayout from "./layouts/RootLayout";

// pages
import HomePage from "./pages/HomePage";
import WoodenHouses from "./pages/WoodenHouses/WoodenHouses";
import WoodenFurniture from "./pages/WoodenFurniture/WoodenFurniture";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "aboutus",
          element: <AboutUs />,
        },
        {
          path: "woodenhouses",
          element: <WoodenHouses />,
        },
        {
          path: "woodenfurniture",
          element: <WoodenFurniture />,
        },
        {
          path: "contactus",
          element: <ContactUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={routes} />;
}

export default App;
