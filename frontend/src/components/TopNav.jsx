import React, { useState } from "react";
import "../styles/TopNav.css";

/* =========================
   MENU CONFIG (HIERARCHICAL)
========================= */
const MENUS = [
  {
    title: "File",
    items: [
      { label: "New", shortcut: "Ctrl+N" },
      { label: "Open", shortcut: "Ctrl+O" },
      { label: "Save", shortcut: "Ctrl+S" },

      { type: "separator" },

      {
        label: "Invoice",
        children: [
          { label: "Preview Invoice Info" },
          { label: "Print Invoice" },
          { label: "Edit Invoice" },
        ],
      },

      { type: "separator" },
      { label: "Change User" },
      { label: "Exit", shortcut: "Alt+F4" },
    ],
  },

  {
    title: "Item",
    tab: "Items",
    items: [
      { label: "New Item", shortcut: "Ctrl+I" },
      { label: "Delete Item", shortcut: "Ctrl+D" },
      { label: "Restore Item", shortcut: "Ctrl+Z" },
    ],
  },

  {
    title: "Purchase",
    tab: "Purchase",
    items: [
      { label: "Purchase" },
      { label: "Purchase Return" },
      { label: "Opening Purchase" },
      { label: "Purchase Orders" },
    ],
  },

  {
    title: "Sales",
    tab: "Sales",
    items: [
      { label: "Cash Sale" },
      { label: "Credit Sale" },
      {
        label: "Sale Return",
        children: [
          { label: "Open Sale Return" },
          { label: "Refused Sales" },
        ],
      },
      { label: "Quotation" },
    ],
  },

  {
    title: "Reports",
    tab: "Reports",
    items: [
      {
        label: "Daily Reports",
        children: [
          { label: "Daily Sale Report" },
          { label: "Daily Purchase Report" },
        ],
      },
      {
        label: "Stock Reports",
        children: [
          { label: "Stock Summary" },
          { label: "Stock Detail" },
        ],
      },
      {
        label: "Sales Reports",
        children: [
          { label: "Sales Summary" },
          { label: "Sales Detail" },
        ],
      },
      {
        label: "Purchase Reports",
        children: [
          { label: "Purchase Summary" },
          { label: "Purchase Detail" },
        ],
      },
    ],
  },

  {
    title: "Maintenance",
    tab: "Maintenance",
    items: [
      { label: "Change Password" },
      { label: "Preferences" },
      {
        label: "Database Utilities",
        children: [
          { label: "Backup Database" },
          { label: "Restore Database" },
        ],
      },
    ],
  },

  {
    title: "Manage",
    tab: "Manage",
    items: [
      { label: "Groups" },
      { label: "Users" },
      {
        label: "Cashier Management",
        children: [
          { label: "Cashier Job" },
          { label: "Cashier Activity Window" },
        ],
      },
    ],
  },

  {
    title: "Window",
    tab: "Window",
    items: [
      { label: "Arrange Icons" },
      { label: "Refresh" },
    ],
  },
];
 
/* =========================
   THE FIXED COMPONENT
========================= */
function MenuList({ items, setActiveTab, parentTab, isSubmenu = false }) {
  // LINE A: Dynamic Class Logic
  const menuClass = isSubmenu ? "submenu" : "dropdown";

  return (
    // LINE B: Apply the dynamic class
    <div className={menuClass}>
      {items.map((item, idx) => {
        // LINE C: Handle separators
        if (item.type === "separator") {
          return <div key={idx} className="menu-separator" />;
        }

        // LINE D: Check for children
        const hasChildren = !!item.children;

        return (
          <div
            key={item.label}
            className="dropdown-item"
            // LINE E: Click Handler
            onClick={() => {
              if (!hasChildren && parentTab) setActiveTab(parentTab);
            }}
          >
            {/* LINE F: Label & Arrow */}
            <span>{item.label}</span>
            {hasChildren && <span className="submenu-arrow">▸</span>}

            {/* LINE G: Recursive Call (The Fix) */}
            {hasChildren && (
              <MenuList
                items={item.children}
                setActiveTab={setActiveTab}
                parentTab={parentTab}
                isSubmenu={true} // <--- CRITICAL: We tell it "You are a submenu"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function TopNav({ setActiveTab }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="topnav">
      {MENUS.map((menu) => (
        <div
          key={menu.title}
          className="menu-item"
          onMouseEnter={() => setOpenMenu(menu.title)}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <span className="menu-title">{menu.title}</span>

          {openMenu === menu.title && (
            <MenuList
              items={menu.items}
              setActiveTab={setActiveTab}
              parentTab={menu.tab}
              // We do NOT pass isSubmenu here, so it defaults to false (Main Menu)
            />
          )}
        </div>
      ))}
      <div className="menu-item" onClick={() => setActiveTab("Help")}>
        <span className="menu-title">Help</span>
      </div>
    </div>
  );
}