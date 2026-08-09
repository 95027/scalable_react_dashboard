import type { LucideIcon } from "lucide-react";
import {
  BarChart3,
  Box,
  Car,
  ClipboardList,
  LayoutDashboard,
  MapPin,
  Settings,
  Store,
  Users,
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
        label: "Orders",
        href: "/orders",
        icon: ClipboardList,
      },
      {
        label: "Shipments",
        href: "/shipments",
        icon: Box,
      },
      {
        label: "Delivery Tracking",
        href: "/tracking",
        icon: MapPin,
      },
    ],
  },

  {
    label: "Fleet",
    icon: Car,
    children: [
      {
        label: "Drivers",
        href: "/drivers",
        icon: Users,
      },
      {
        label: "Vehicles",
        href: "/vehicles",
        icon: Car,
      },
    ],
  },

  {
    label: "Partners",
    icon: Store,
    children: [
      {
        label: "Vendors",
        href: "/vendors",
        icon: Store,
      },
    ],
  },

  {
    label: "Analytics",
    icon: BarChart3,
    children: [
      {
        label: "Reports",
        href: "/reports",
        icon: BarChart3,
      },
    ],
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];
