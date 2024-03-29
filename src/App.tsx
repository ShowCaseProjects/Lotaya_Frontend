// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { AuthProvider } from "./hooks/useAuth";
// import { AppRoutes } from "./pages/routes/routes";

// function App() {
// const queryClient = new QueryClient();
// return(
//   <>
//    <AuthProvider>
//       <QueryClientProvider client={queryClient}>
//               <AppRoutes />
//             </QueryClientProvider>
//  </AuthProvider>
//  </>);
// }

// export default App;

import Home from "./pages/home/Home";
import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/payment/Payment";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import "./styles/global.scss";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { SignIn } from "./pages/login/Login";


const queryClient = new QueryClient();

function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <QueryClientProvider client={queryClient}>
              <Outlet />
            </QueryClientProvider>
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([{
    path: "/signIn",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
    ],
  },
  ]);

  return <RouterProvider router={router} />;
}

export default App;