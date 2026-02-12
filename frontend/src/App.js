import React, { useState } from "react";
import TopNav from "./components/TopNav";
import ItemPage from "./pages/ItemPage";
import PurchasePage from "./pages/PurchasePage";
import SalesPage from "./pages/SalesPage";
import ReportsPage from "./pages/ReportsPage";
import BasicDataPage from "./pages/BasicDataPage";
import MaintenancePage from "./pages/MaintainancePage";
import HelpPage from "./pages/HelpPage";

import "./styles/App.css";

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

      case "Manage":
        return <div style={{ padding: 16 }}>Manage Module</div>;

      case "Window":
        return <div style={{ padding: 16 }}>Window Management</div>;

      case "Help":
        return <HelpPage />;

      default:
        return <div style={{ padding: 16 }}>Page not found</div>;
    }
  }

  return (
    <div className="app-root">
      <TopNav activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="workspace">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
