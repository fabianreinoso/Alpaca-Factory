import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/HomePage";
import ProductDetail from "./components/productDetail/ProductDetail";
import AccesoriosPage from "./pages/Accesorios";
import UnisexPage from "./pages/Unisex";
import WomenPage from "./pages/Women";
import SearchPage from "./pages/Search";
import ErrorPage from "./components/UI/Error";
import OderConfirm from "./components/UI/OrderConfirm";
import SimpleInput from "./components/menuNavBar/header/Account";
import Account from "./components/menuNavBar/header/Account";
import AccountPage from "./pages/Account";
import Men from "./pages/Men";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "product/:productId", element: <ProductDetail /> },
        {
          path: "Accesorios",
          element: <AccesoriosPage />,
          children: [{ path: ":productId", element: <ProductDetail /> }],
        },
        { path: "Women", element: <WomenPage /> },
        { path: "Unisex", element: <UnisexPage /> },
        { path: "Men", element: <Men /> },
        { path: "search", element: <SearchPage /> },
        { path: "confirmation", element: <OderConfirm /> },
        { path: "account", element: <AccountPage /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
