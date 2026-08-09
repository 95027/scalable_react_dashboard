import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Bell,
  Box,
  Car,
  ClipboardList,
  LayoutDashboard,
  MapPin,
  Settings,
  ShieldCheck,
  Truck,
  UserCog,
  Users,
  Warehouse,
} from "lucide-react";

export interface NavigationLink {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface NavigationSection {
  label: string;
  icon: LucideIcon;
  children: NavigationLink[];
}

export type NavigationItem = NavigationLink | NavigationSection;

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },

  {
    label: "Operations",
    icon: ClipboardList,
    children: [
      {
        label: "Shipments",
        href: "/shipments",
        icon: Box,
      },
      {
        label: "Deliveries",
        href: "/deliveries",
        icon: Truck,
      },
      {
        label: "Tracking",
        href: "/tracking",
        icon: MapPin,
      },
    ],
  },

  {
    label: "People",
    icon: Users,
    children: [
      {
        label: "Customers",
        href: "/customers",
        icon: Users,
      },
      {
        label: "Drivers",
        href: "/drivers",
        icon: UserCog,
      },
      {
        label: "Staff",
        href: "/staff",
        icon: UserCog,
      },
    ],
  },

  {
    label: "Fleet",
    icon: Car,
    children: [
      {
        label: "Vehicles",
        href: "/vehicles",
        icon: Car,
      },
    ],
  },

  {
    label: "Infrastructure",
    icon: Warehouse,
    children: [
      {
        label: "Warehouses",
        href: "/warehouses",
        icon: Warehouse,
      },
    ],
  },

  {
    label: "Management",
    icon: BarChart3,
    children: [
      {
        label: "Reports",
        href: "/reports",
        icon: BarChart3,
      },
      {
        label: "Notifications",
        href: "/notifications",
        icon: Bell,
      },
    ],
  },

  {
    label: "Administration",
    icon: UserCog,
    children: [
      {
        label: "Roles & Permissions",
        href: "/roles-permissions",
        icon: ShieldCheck,
      },
    ],
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
