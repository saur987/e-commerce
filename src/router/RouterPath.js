import CheckoutPage from "../page/CheckoutPage";
import Home from "../page/Home";
import OrderDetails from "../page/OrderDetails";
import ProductCategoryPage from "../page/ProductCategoryPage";
import ProductPage from "../page/ProductPage";
import ProfilePage from "../page/ProfilePage";
import Wishlist from "../page/Wishlist";

export const RouterPath = {
  Home: "/",
  ProductPage: "/product",
  ProfilePage: "/profile",
  Wishlist: "/wishlist",
  ProductCategoryPage: "/product/category",
  OrderDetails: "/order/detail",
  CheckoutPage: "/checkout"
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
    path: RouterPath.ProfilePage,
  },
  {
    component: Wishlist,
    path: RouterPath.Wishlist,
  },
  {
    component: ProductCategoryPage,
    path: RouterPath.ProductCategoryPage,
  },
  {
    component: OrderDetails,
    path: RouterPath.OrderDetails,
  },
   {
    component: CheckoutPage,
    path: RouterPath.CheckoutPage,
  },
];
