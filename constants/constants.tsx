import {
  BaggageClaim,
  BellDot,
  BlocksIcon,
  Caravan,
  Podcast,
  Scale,
  Settings,
  ShoppingBag,
  Stamp,
  User,
} from "lucide-react";

interface MenuItem {
  title: string;
  notification?: number;
  icon: JSX.Element;
  gap?: boolean;
  path: string;
}

export const Menus: MenuItem[] = [
  {
    title: "Profiel",
    notification: 0,
    icon: <User className="w-5 h-5" />,
    path: "/dashboard/profile",
  },
  {
    title: "Producten",
    notification: 0,
    icon: <ShoppingBag className="w-5 h-5" />,
    path: "/dashboard/products",
  },
  {
    title: "Orders",
    notification: 0,
    icon: <BaggageClaim className="w-5 h-5" />,
    path: "/subscriptions",
  },
  {
    title: "Camperplekken",
    icon: <Caravan className="w-5 h-5" />,
    gap: false,
    notification: 0,
    path: "/loyalty-cards",
  },
  {
    title: "Agro Diëtetiek",
    notification: 0,
    gap: false,
    icon: <BlocksIcon className="w-5 h-5" />,
    path: "/debts",
  },
];
