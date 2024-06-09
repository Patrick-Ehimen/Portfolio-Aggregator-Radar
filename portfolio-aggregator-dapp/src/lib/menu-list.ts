import {
  Landmark,
  Tag,
  Users,
  Settings,
  Coins,
  List,
  LayoutDashboard,
  Newspaper,
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
};

type Menu = {
  href: string;
  label: string;
  active: boolean;
  icon: any;
  submenus: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "", // Group without a specific label
      menus: [
        {
          href: "/dashboard", // Menu item for Dashboard
          label: "Dashboard", // Label for the menu item
          active: pathname.includes("/dashboard"), // Check if the current path includes "/dashboard"
          icon: LayoutDashboard, // Icon for the Dashboard menu item
          submenus: [], // No submenus for Dashboard
        },
      ],
    },
    {
      groupLabel: "All Rankings", // Group label for content related menus
      menus: [
        {
          href: "", // Parent menu for Categories
          label: "Categories", // Label for the Categories menu
          active: pathname.includes("/categories"), // Check if the current path includes "/posts"
          icon: List, // Icon for Categories menu
          submenus: [
            {
              href: "/categories", // Submenu item for all trending
              label: "Trending", // Label for Trending submenu
              active: pathname === "/categories", // Check if the current path is exactly "/categories"
              icon: List,
            },
            {
              href: "/categories/defi", // Submenu item for defi post
              label: "DeFi", // Label for defi Categories submenu
              active: pathname === "/categories/defi", // Check if the current path is exactly "/categories/defi"
              icon: List,
            },
          ],
        },
        {
          href: "/cryptoprice", // Menu item for Cryptoprice
          label: "Cryptocurreny Prices", // Label for Cryptoprice menu
          active: pathname.includes("/cryptoprice"), // Check if the current path includes "/cryptoprice"
          icon: Coins, // Icon for Coins menu
          submenus: [], // No submenus for Cryptoprice
        },
        {
          href: "/exchanges", // Menu item for Exchanges
          label: "Exchanges", // Label for Exchanges menu
          active: pathname.includes("/exchanges"), // Check if the current path includes "/exchanges"
          icon: Landmark, // Icon for Exchanges menu
          submenus: [], // No submenus for Exchanges
        },
        {
          href: "/marketplaces", // Menu item for MarketPlaces
          label: "NFT MarketPlaces", // Label for MarketPlaces menu
          active: pathname.includes("/marketplaces"), // Check if the current path includes "/marketplaces"
          icon: Tag, // Icon for MarketPlaces menu
          submenus: [], // No submenus for MarketPlaces
        },
        {
          href: "/news", // Menu item for News
          label: "News", // Label for News menu
          active: pathname.includes("/news"), // Check if the current path includes "/news"
          icon: Newspaper, // Icon for News menu
          submenus: [], // No submenus for News
        },
      ],
    },
    {
      groupLabel: "Others", // Group label for settings related menus
      menus: [
        {
          href: "/profile", // Menu item for Profile
          label: "User Profile", // Label for Users menu
          active: pathname.includes("/profile"), // Check if the current path includes "/profile"
          icon: Users, // Icon for Profile menu
          submenus: [], // No submenus for Profile
        },
        {
          href: "/settings", // Menu item for Settings
          label: "Settings", // Label for Users menu
          active: pathname.includes("/settings"), // Check if the current path includes "/settings"
          icon: Settings, // Icon for Settings menu
          submenus: [], // No submenus for Settings
        },
      ],
    },
  ];
}
