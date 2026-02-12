import React from "react";
import "./TabsBar.css";

const TABS = [
  "Items",
  "Purchase",
  "Sales",
  "Reports",
  "Basic Data",
  "Maintenance",
  "Manage",
  "Window",
  "Help",
];

export default function TabsBar({ activeTab, onTabChange }) {
  return (
    <div className="tabs-bar">
      {TABS.map((tab) => (
        <button
          key={tab}
          className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          onClick={() => onTabChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
