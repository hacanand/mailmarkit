import { ICONS } from "@/shared/utils/icons";
import { atom } from "jotai";
// import { PartnersTypes, PlanType, NavItems, DashboardSideBarTypes, subscribersDataTypes } from "@/types";
type NavItems = {
    title: string;
};
    
export const navItems: NavItems[] = [
    {
        title: "Features",
    },
    {
        title: "Pricing",
    },
    {
        title: "Resources",
    },
    {
        title: "Docs",
    },
  
];

type PartnersTypes = {
  url: string;
};
export const partners: PartnersTypes[] = [
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/resume-worded.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/clickhole.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/cre.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/rap-tv.svg",
  },
  {
    url: "https://media.beehiiv.com/cdn-cgi/image/fit=scale-down,onerror=redirect,format=auto,width=1080,quality=75/www/company-logos-cyber-ink-bg/CompanyLogosCyberInkBG/awa.svg",
  },
];

type PlanType = {
  title: string;
};
export const freePlan: PlanType[] = [
  {
    title: "Up to 2,500 subscribers",
  },
  {
    title: "Unlimited sends",
  },
  {
    title: "Custom newsletter",
  },
  {
    title: "Newsletter analytics",
  },
];

export const GrowPlan: PlanType[] = [
  {
    title: "Up to 10,000 subscribers",
  },
  {
    title: "Custom domains",
  },
  {
    title: "API access",
  },
  {
    title: "Newsletter community",
  },
];

export const scalePlan: PlanType[] = [
  {
    title: "Up to 100,000 subscribers",
  },
  {
    title: "Referal program",
  },
  {
    title: "AI support",
  },
  {
    title: "Advanced support system",
  },
  {
    title: "Ad Network",
  },
];

export const sideBarActiveItem = atom<string>("/dashboard");

export const reportFilterActiveItem = atom<string>("Overview");

export const emailEditorDefaultValue = atom<string>("");

export const settingsActiveItem = atom<string>("Profile");

type DashboardSideBarTypes = {
    title: string;
    url: string;
    icon: JSX.Element;
    };
export const sideBarItems: DashboardSideBarTypes[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ICONS.dashboard,
  },
  {
    title: "Write",
    url: "/dashboard/write",
    icon: ICONS.write,
  },
  {
    title: "Grow",
    url: "/dashboard/grow",
    icon: ICONS.analytics,
  },
  {
    title: "Audience",
    url: "/dashboard/audience",
    icon: ICONS.audience,
  },
];

export const sideBarBottomItems: DashboardSideBarTypes[] = [
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: ICONS.settings,
  },
  {
    title: "View Site",
    url: "/",
    icon: ICONS.world,
  },
];

type subscribersDataTypes = {
    _id: string;
    email: string;
    createdAt: string;
    source: string;
    status: string;
    };
export const subscribersData: subscribersDataTypes[] = [
  {
    _id: "64f717a45331088de2ce886c",
    email: "anand@gmail.com",
    createdAt: "5Feb 2024",
    source: "mailmarkit website",
    status: "subscribed",
  },
  {
    _id: "64f717a45331088de2ce886c",
    email: "support@mailmarkit.com",
    createdAt: "8Feb 2024",
    source: "External website",
    status: "subscribed",
  },
];