import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignupPage = lazy(() => import("../pages/SignupPage"));
const ActivationPage = lazy(() => import("../pages/ActivationPage"));
const HomePage = lazy(() => import("../pages/HomePage"));
const ProductsPage = lazy(() => import("../pages/ProductsPage"));
const EventsPage = lazy(() => import("../pages/EventsPage"));
const FAQPage = lazy(() => import("../pages/FAQPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const PaymentPage = lazy(() => import("../pages/PaymentPage"));
const OrderSuccessPage = lazy(() => import("../pages/OrderSuccessPage"));
const ProductDetailsPage = lazy(() => import("../pages/ProductDetailsPage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const ShopCreatePage = lazy(() => import("../pages/ShopCreate"));
const SellerActivationPage = lazy(() => import("../pages/SellerActivationPage"));
const ShopLoginPage = lazy(() => import("../pages/ShopLoginPage"));
const OrderDetailsPage = lazy(() => import("../pages/OrderDetailsPage"));
const TrackOrderPage = lazy(() => import("../pages/TrackOrderPage"));
const UserInbox = lazy(() => import("../pages/UserInbox"));

export {
  LoginPage,
  SignupPage,
  ActivationPage,
  HomePage,
  ProductsPage,
  // BestSellingPage,
  EventsPage,
  FAQPage,
  CheckoutPage,
  PaymentPage,
  OrderSuccessPage,
  ProductDetailsPage,
  ProfilePage,
  ShopCreatePage,
  SellerActivationPage,
  ShopLoginPage,
  OrderDetailsPage,
  TrackOrderPage,
  UserInbox,
};
