import React, { useState } from "react";
// import TopNav from "./components/TopNav";
// import TopBar from "./components/TopBar";

import ItemPage from "./pages/ItemPage";
import PurchasePage from "./pages/PurchasePage";
import SalesPage from "./pages/SalesPage";
import ReportsPage from "./pages/ReportsPage";
import BasicDataPage from "./pages/BasicDataPage";
import MaintenancePage from "./pages/MaintainancePage";
import HelpPage from "./pages/HelpPage";

import "./App.css";

function App() {
  const [activeTab, setActiveTab] = useState("Items");

  function renderPage() {
    switch (activeTab) {
      case "Items":
        return <ItemPage />;

      case "Purchase":
        return <PurchasePage />;

      case "Sales":
        return <SalesPage />;

      case "Reports":
        return <ReportsPage />;

      case "Basic Data":
        return <BasicDataPage />;

      case "Maintenance":
        return <MaintenancePage />;

      case "Help":
        return <HelpPage />;

      default:
        return <div>Page not found</div>;
    }
  }

  return (
    <div className="app-root">
      {/* Top menu bar (File, Item, Purchase...) */}
      
      {/* Main working area */}
      <main className="main-content">
        <button onClick={() => setActiveTab("Items")}>Items</button>
        <button onClick={() => setActiveTab("Purchase")}>Purchase</button>
        <button onClick={() => setActiveTab("Sales")}>Sales</button>
        <button onClick={() => setActiveTab("Reports")}>Reports</button>
        <button onClick={() => setActiveTab("Basic Data")}>Basic Data</button>
        <button onClick={() => setActiveTab("Maintenance")}>Maintenance</button>
        <button onClick={() => setActiveTab("Help")}>Help</button>

        {renderPage()}    
      </main>
    </div>
  );
}

export default App;
