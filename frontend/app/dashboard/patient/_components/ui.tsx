"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export function Icon({ name, className = "h-5 w-5" }: { name: string; className?: string }) {
  const common = {
    className: `${className} text-gray-600`,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  } as const;

  switch (name) {
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zM3 21h8v-6H3v6zm10-8h8V3h-8v10z" />
        </svg>
      );
    case "info":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4" />
          <path d="M12 8h.01" />
        </svg>
      );
    case "records":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 4h16v16H4z" />
          <path d="M8 8h8" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
        </svg>
      );
    case "folder":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M3 7h5.5l2 2H21v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <path d="M21 7V5a2 2 0 0 0-2-2H9l-2 2H5" />
        </svg>
      );
    case "calendar":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </svg>
      );
    case "shield":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      );
    case "inbox":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M22 13h-6l-2 3h-4l-2-3H2" />
          <path d="M5 7h14l3 6v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7l3-6z" />
        </svg>
      );
    case "star":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06A2 2 0 1 1 7.04 2.4l.06.06c.45.45 1.1.6 1.69.39.52-.19 1.01-.45 1.51-.45.5 0 .99.26 1.51.45.59.21 1.24.06 1.69-.39l.06-.06A2 2 0 1 1 20.6 7.04l-.06.06c-.45.45-.6 1.1-.39 1.69.19.52.45 1.01.45 1.51 0 .5-.26.99-.45 1.51-.21.59-.06 1.24.39 1.69l.06.06z" />
        </svg>
      );
    case "logout":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="M16 17l5-5-5-5" />
          <path d="M21 12H9" />
        </svg>
      );
    case "search":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      );
    case "mic":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M12 1a3 3 0 00-3 3v6a3 3 0 006 0V4a3 3 0 00-3-3z" />
          <path d="M19 10a7 7 0 01-14 0" />
          <path d="M12 19v4" />
          <path d="M8 23h8" />
        </svg>
      );
    case "bell":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 01-3.46 0" />
        </svg>
      );
    case "check":
      return (
        <svg
          viewBox="0 0 24 24"
          className={`${className} text-green-600`}
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );
    default:
      return null;
  }
}

export function Card({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-[28px] border border-white/75 bg-white shadow-[0px_32px_80px_-48px_rgba(15,23,42,0.35)] ${className}`}>
      {children}
    </div>
  );
}

type SidebarKey = "dashboard" | "info" | "records" | "appointments" | "access" | "messages";

export function Sidebar({ active = "dashboard" }: { active?: SidebarKey }) {
  const router = useRouter();
  const [showLogoutModal, setShowLogoutModal] = React.useState(false);
  const primary = [
    { icon: "dashboard", label: "Dashboard", href: "/dashboard/patient", key: "dashboard" as SidebarKey },
    { icon: "info", label: "General information", href: "#", key: "info" as SidebarKey },
    { icon: "records", label: "Medical records", href: "#", key: "records" as SidebarKey },
    { icon: "calendar", label: "Appointments", href: "#", key: "appointments" as SidebarKey },
    { icon: "shield", label: "Access", href: "#", key: "access" as SidebarKey },
    { icon: "inbox", label: "Messages / Inbox", href: "#", key: "messages" as SidebarKey },
  ];

  const secondary = [
    { icon: "star", label: "Profile", href: "#" },
    { icon: "settings", label: "Settings", href: "#" },
  ];

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setShowLogoutModal(true);
  };

  const confirmLogout = () => {
    setShowLogoutModal(false);
    router.replace("/login");
  };

  return (
    <aside className="hidden w-72 flex-col justify-between rounded-[30px] border border-white/70 bg-gradient-to-br from-white via-white to-[#f1f5ff] p-5 shadow-[0px_36px_80px_-56px_rgba(15,23,42,0.4)] lg:flex">
      <div className="space-y-4">
        <div className="flex items-center gap-3 px-2 pt-1">
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[#e5f5ff]">
            <span className="inline-block h-4 w-4 rounded-full bg-[#1f9bff]" />
          </div>
          <span className="font-semibold tracking-wide text-gray-800">HEALTH CHAIN</span>
        </div>

        <div className="relative">
          <input
            className="w-full rounded-full border border-gray-200 bg-gray-50 py-2 pl-10 pr-11 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1f9bff]"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="absolute left-3 top-2.5 text-gray-400">
            <Icon name="search" className="h-5 w-5" />
          </div>
          <div className="absolute right-3 top-2.5 text-gray-400">
            <Icon name="mic" className="h-5 w-5" />
          </div>
        </div>

        <nav className="space-y-1">
          {primary.map((item) => {
            const isActive = item.key === active;
            return (
              <Link
                key={item.label}
                className={`flex items-center gap-3 rounded-full px-3 py-3 text-sm font-medium transition ${
                  isActive ? "bg-[#e6f0ff] text-[#1678ff]" : "text-gray-700 hover:bg-gray-50"
                }`}
                href={item.href}
              >
                <Icon
                  name={item.icon}
                  className={`h-5 w-5 ${isActive ? "text-[#1678ff]" : "text-gray-600"}`}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-1">
        {secondary.map((item) => (
          <a
            key={item.label}
            className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-700 hover:bg-gray-50"
            href={item.href}
          >
            <Icon
              name={item.icon}
              className={item.icon === "star" ? "h-5 w-5 text-amber-400" : "h-5 w-5"}
            />
            <span>{item.label}</span>
          </a>
        ))}
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
        >
          <Icon name="logout" className="h-5 w-5" />
          <span>Log out</span>
        </button>
      </div>

      {showLogoutModal ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/30 backdrop-blur-[6px]">
          <div className="w-[320px] rounded-[32px] border border-white/70 bg-white px-6 py-7 text-center shadow-[0px_42px_120px_-60px_rgba(15,23,42,0.55)]">
            <h3 className="text-lg font-semibold text-gray-800">Are you sure you want to logout?</h3>
            <div className="mt-7 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={confirmLogout}
                className="rounded-full bg-[#1678ff] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#0f63d6]"
              >
                Log out
              </button>
              <button
                type="button"
                onClick={() => setShowLogoutModal(false)}
                className="rounded-full border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </aside>
  );
}
