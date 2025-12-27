import type { MicroAppName } from "../../types/micro";
import {
  Home,
  LayoutDashboard,
  Layers,
  Code,
} from "lucide-react";

interface DrawerProps {
  open: boolean;
  active: MicroAppName | null;
  onToggle(): void;
  onSelect(app: MicroAppName | null): void;
}

function DrawerToggleIcon({ open }: { open: boolean }) {
  return (
    <div className="relative w-6 h-6">
      <span
        className={`absolute top-1/2 left-0 w-6 h-[2px] bg-current transition-all duration-300
          ${open ? "rotate-45" : "-translate-y-2"}`}
      />
      <span
        className={`absolute top-1/2 left-0 w-6 h-[2px] bg-current transition-opacity duration-300
          ${open ? "opacity-0" : "opacity-100"}`}
      />
      <span
        className={`absolute top-1/2 left-0 w-6 h-[2px] bg-current transition-all duration-300
          ${open ? "-rotate-45" : "translate-y-2"}`}
      />
    </div>
  );
}

export default function SideDrawer({
  open,
  active,
  onToggle,
  onSelect,
}: DrawerProps) {
  const items: {
    label: string;
    value: MicroAppName | null;
    icon: React.ElementType;
  }[] = [
    { label: "Home", value: null, icon: Home },
    { label: "App 1", value: "app1", icon: LayoutDashboard },
    { label: "App 2", value: "app2", icon: Layers },
    { label: "devTinder", value: "devtinder", icon: Code },
  ];

  return (
    <aside
      className={`
        ${open ? "w-64" : "w-16"}
        transition-all duration-300
        bg-white dark:bg-gray-900
        border-r border-gray-200 dark:border-gray-700
        flex flex-col
      `}
    >
      {/* Header */}
      <div className="h-[3.575rem] flex items-center px-4 border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={onToggle}
          aria-label="Toggle drawer"
          className="text-gray-700 dark:text-gray-200 hover:opacity-80"
        >
          <DrawerToggleIcon open={open} />
        </button>
      </div>

      {/* Menu */}
      <nav className="flex-1 p-2 space-y-1">
        {items.map(({ label, value, icon: Icon }) => {
          const isActive = active === value;

          return (
            <button
              key={label}
              onClick={() => onSelect(value)}
              className={`
                w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm
                transition-colors
                ${
                  isActive
                    ? "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }
              `}
            >
              <Icon className="w-5 h-5 shrink-0 opacity-80" />
              {open && <span className="truncate">{label}</span>}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}
