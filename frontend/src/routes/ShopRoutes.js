import { lazy } from "react";

const ShopDashboardPage = lazy(() => import("../pages/Shop/ShopDashboardPage"));
const ShopCreateProduct = lazy(() => import("../pages/Shop/ShopCreateProduct"));
const ShopAllProducts = lazy(() => import("../pages/Shop/ShopAllProducts"));
const ShopCreateEvents = lazy(() => import("../pages/Shop/ShopCreateEvents"));
const ShopAllEvents = lazy(() => import("../pages/Shop/ShopAllEvents"));
const ShopAllCoupouns = lazy(() => import("../pages/Shop/ShopAllCoupouns"));
const ShopPreviewPage = lazy(() => import("../pages/Shop/ShopPreviewPage"));
const ShopAllOrders = lazy(() => import("../pages/Shop/ShopAllOrders"));
const ShopOrderDetails = lazy(() => import("../pages/Shop/ShopOrderDetails"));
const ShopAllRefunds = lazy(() => import("../pages/Shop/ShopAllRefunds"));
const ShopSettingsPage = lazy(() => import("../pages/Shop/ShopSettingsPage"));
const ShopWithDrawMoneyPage = lazy(() => import("../pages/Shop/ShopWithDrawMoneyPage"));
const ShopInboxPage = lazy(() => import("../pages/Shop/ShopInboxPage"));

export {
  ShopDashboardPage,
  ShopCreateProduct,
  ShopAllProducts,
  ShopCreateEvents,
  ShopAllEvents,
  ShopAllCoupouns,
  ShopPreviewPage,
  ShopAllOrders,
  ShopOrderDetails,
  ShopAllRefunds,
  ShopSettingsPage,
  ShopWithDrawMoneyPage,
  ShopInboxPage,
};
