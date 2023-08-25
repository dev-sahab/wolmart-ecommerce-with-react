import Account from "../pages/account/Account.jsx";
import Cart from "../pages/cart/Cart.jsx";
import Checkout from "../pages/checkout/Checkout.jsx";
import Home from "../pages/home/Home.jsx";
import Product from "../pages/product/Product.jsx";
import Shop from "../pages/shop/Shop.jsx";

// create private router
const publicRouter = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
  {
    path: "/product/:id",
    element: <Product />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/account",
    element: <Account />,
  },
];

// export router
export default publicRouter;
