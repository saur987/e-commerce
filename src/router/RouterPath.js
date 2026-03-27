import Home from "../page/Home";
import ProductPage from "../page/ProductPage";

export const RouterPath = {
  Home: "/",
  ProductPage: "/product",
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
];
