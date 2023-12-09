import React from "react";
import "./App.css"; // Make sure to create an App.css file for styling

// Header Component
const Header = () => (
  <div className="header">
    <h1>Dashboard</h1>
  </div>
);

// Sidebar Component
const Sidebar = () => (
  <div className="sidebar">
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Settings</li>
      <li>Contact</li>
    </ul>
  </div>
);

// Card Component
const Card = ({ title, content }) => (
  <div className="card">
    <h3>{title}</h3>
    <p>{content}</p>
  </div>
);

// Main Content Component
const MainContent = () => (
  <div className="main-content">
    <Card title="Card 1" content="This is a card." />
    <Card title="Card 2" content="This is another card." />
    <Card title="Card 3" content="Yet another card." />
  </div>
);

// Dashboard Layout Component
const DashboardLayout = () => (
  <div className="dashboard-layout">
    <Sidebar />
    <div className="dashboard-main">
      <Header />
      <MainContent />
    </div>
  </div>
);

// App Component
function App() {
  return <DashboardLayout />;
}

export default App;
