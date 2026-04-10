import Home from "../page/Home";
import ProductPage from "../page/ProductPage";
import ProfilePage from "../page/ProfilePage";
import Wishlist from "../page/Wishlist";



export const RouterPath = {
  Home: "/",
  ProductPage: "/product",
  ProfilePage: "/profile",
  Wishlist: "/wishlist"
};

export const routeConfig = [
  {
    component: Home,
    path: RouterPath.Home,
  },
  {
    component: ProductPage,
    path: RouterPath.ProductPage,
  },
  {
    component: ProfilePage,
    path: RouterPath.ProfilePage

  },
   {
    component: Wishlist,
    path: RouterPath.Wishlist

  }
];
