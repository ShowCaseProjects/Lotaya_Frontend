import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/layout";
import Users from "../users/Users";
import User from "../user/User";
import Product from "../product/Product";

export const AppRoutes=()=>{
  return(
  <>
  <Routes>
     <Route path= "/"  element={<Layout />} />
     <Route path= "/users"  element={<Users/>} />
     <Route path= "/products"  element={<Product />} />
     <Route path= "/users/:id"  element={<User/>} />
     <Route path= "/products/:id"  element={<Product />} />
  </Routes>
  </>
  );
}   
