import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RootLayout from "../layouts/RootLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import LoadingScreen from "../components/common/LoadingScreen";
import { lazy, Suspense } from "react";
const DashboardPage = lazy(() => import("../pages/Dashboard/DashboardPage"));
const ShipmentsPage = lazy(() => import("../pages/Shipments/ShipmentsPage"));
const CustomersPage = lazy(() => import("../pages/Customers/CustomersPage"));
const DriversPage = lazy(() => import("../pages/Drivers/DriversPage"));
const StaffPage = lazy(() => import("../pages/Staff/StaffPage"));
const DeliveriesPage = lazy(() => import("../pages/Deliveries/DeliveriesPage"));
const TrackingPage = lazy(() => import("../pages/Tracking/TrackingPage"));
const NotificationsPage = lazy(() => import("../pages/Notifications/NotificationsPage"));
const RolesPermissionsPage = lazy(() => import("../pages/RolesPermissions/RolesPermissionsPage"));
const VehiclesPage = lazy(() => import("../pages/Vehicles/VehiclesPage"));
const WarehousesPage = lazy(() => import("../pages/Warehouses/WarehousesPage"));
const ReportsPage = lazy(() => import("../pages/Reports/ReportsPage"));
const SettingsPage = lazy(() => import("../pages/Settings/SettingsPage"));


const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingScreen />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route element={<PublicRoute />}>
              <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route element={<DashboardLayout />}>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/deliveries" element={<DeliveriesPage />} />
                <Route path="/shipments" element={<ShipmentsPage />} />
                <Route path="/tracking" element={<TrackingPage />} />
                <Route path="/customers" element={<CustomersPage />} />
                <Route path="/drivers" element={<DriversPage />} />
                <Route path="/staff" element={<StaffPage />} />
                <Route path="/vehicles" element={<VehiclesPage />} />
                <Route path="/warehouses" element={<WarehousesPage />} />
                <Route path="/reports" element={<ReportsPage />} />
                <Route path="/notifications" element={<NotificationsPage />} />
                <Route path="/roles-permissions" element={<RolesPermissionsPage />} />
                <Route path="/settings" element={<SettingsPage />} />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;
