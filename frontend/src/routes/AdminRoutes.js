import { lazy } from "react";

const AdminDashboardPage = lazy(() => import("../pages/AdminDashboardPage"));
const AdminDashboardUsers = lazy(() => import("../pages/AdminDashboardUsers"));
const AdminDashboardSellers = lazy(() => import("../pages/AdminDashboardSellers"));
const AdminDashboardOrders = lazy(() => import("../pages/AdminDashboardOrders"));
const AdminDashboardProducts = lazy(() => import("../pages/AdminDashboardProducts"));
const AdminDashboardEvents = lazy(() => import("../pages/AdminDashboardEvents"));
const AdminDashboardWithdraw = lazy(() => import("../pages/AdminDashboardWithdraw"));

export {
  AdminDashboardPage,
  AdminDashboardUsers,
  AdminDashboardSellers,
  AdminDashboardOrders,
  AdminDashboardProducts,
  AdminDashboardEvents,
  AdminDashboardWithdraw,
};
