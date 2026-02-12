import React from "react";
import FileMenu from "./menus/FileMenu";
import "./TopNav.css";

export default function TopNav() {
  return (
    <div className="topnav">
      <FileMenu />

      {/* Later you can add more menus here */}
      <span className="menu-item">Item</span>
      <span className="menu-item">Purchase</span>
      <span className="menu-item">Sales</span>
      <span className="menu-item">Reports</span>
      <span className="menu-item">Basic Data</span>
      <span className="menu-item">Maintenance</span>
      <span className="menu-item">Manage</span>
      <span className="menu-item">Window</span>
      <span className="menu-item">Help</span>
    </div>
  );
}
