"use client";

import "./dashboard.css";
import { scans } from "../../data/mockScans";
import {
  FiHome,
  FiFolder,
  FiSearch,
  FiCalendar,
  FiBell,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

import { BsBan } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Dashboard() {
     const [theme, setTheme] = useState("light");
     const pathname = usePathname();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);
  return (
        
    <div className="dashboard-layout">

        <aside className="sidebar">

        <nav className="sidebar-nav">
            <button
  className="theme-toggle"
  onClick={() => setTheme(theme === "light" ? "dark" : "light")}
  aria-label="Toggle theme"
>
  {theme === "light" ? <FiMoon size={18} /> : <FiSun size={18} />}
</button>
          <ul>
              <li className={pathname === "/dashboard" ? "active" : ""}>
    <Link href="/dashboard">
      <FiHome size={18}/> Dashboard
    </Link>
  </li>
            <li>
              <FiFolder size={18} />
              Projects
            </li>
            <li className={pathname === "/scan" ? "active" : ""}>
    <Link href="/scan">
      <FiSearch size={18}/> Scans
    </Link>
  </li>
            <li>
              <FiCalendar size={18} />
              Schedule
            </li>
            <hr/>
            <br/>
            <li>
              <FiBell size={18} />
              Notifications
            </li>
            <li>
              <FiSettings size={18} />
              Settings
            </li>
            <li>
              <FiHelpCircle size={18} />
              Support
            </li>
          </ul>
        </nav>

        <div className="sidebar-user">
          <div className="avatar"></div>
          <div>
            <p>admin@edu.com</p>
            <span>Security Lead</span>
          </div>
        </div>
      </aside>


      <main className="dashboard-main">

        <div className="page-header">
          <div>
            <h1>Scan</h1>
            <p className="breadcrumb">
              Home / Private Assets / <span>New Scan</span>
            </p>
          </div>

          <div className="top-actions">
            <button className="outline-btn">Export Report</button>
            <button className="danger-btn">Stop Scan</button>
          </div>
        </div>

        <div className="org-info">
          <span>Org: <b>Project X</b></span>
          <span>Owner: <b>Nammagiri</b></span>
          <span>Total Scans: <b>100</b></span>
          <span>Scheduled: <b>1000</b></span>
          <span>Rescans: <b>100</b></span>
          <span>Failed Scans: <b>100</b></span>
          <span className="time">10 mins ago</span>
        </div>

        <div className="stats-row">

  <StatCard
    title="Critical Severity"
    value="86"
    delta="+2% increase than yesterday"
    color="critical"
    icon={<BsBan size={14} />}
  />

  <StatCard
    title="High Severity"
    value="16"
    delta="+0.9% increase than yesterday"
    color="high"
    icon={<FiAlertTriangle size={14} />}
  />

  <StatCard
    title="Medium Severity"
    value="26"
    delta="+0.9% decrease than yesterday"
    color="medium"
    icon={<FiAlertTriangle size={14} />}
  />

  <StatCard
    title="Low Severity"
    value="16"
    delta="+0.9% increase than yesterday"
    color="low"
    icon={<FiSearch size={14} />}
  />

</div>

        <div className="table-section">
          <div className="table-toolbar">
            <div className="search-wrapper">
              <input placeholder="Search scans by name or type..." />
            </div>

            <button className="ghost-btn">Filter</button>
            <button className="ghost-btn">Column</button>
            <button className="primary-btn">+ New Scan</button>
          </div>

          <table>
            <thead>
              <tr>
                <th>Scan Name</th>
                <th>Type</th>
                <th>Status</th>
                <th>Progress</th>
                <th>Vulnerability</th>
                <th>Last Scan</th>
              </tr>
            </thead>

            <tbody>
              {scans.map((scan) => (
                <tr key={scan.id}>
                  <td>{scan.name}</td>
                  <td>{scan.type}</td>
                  <td><StatusBadge status={scan.status} /></td>
                  <td><ProgressBar value={scan.progress} /></td>
                  <td>
                    <div className="badges">
                      <span className="badge red">{scan.vulnerabilities.critical}</span>
                      <span className="badge orange">{scan.vulnerabilities.high}</span>
                      <span className="badge yellow">{scan.vulnerabilities.medium}</span>
                      <span className="badge green">{scan.vulnerabilities.low}</span>
                    </div>
                  </td>
                  <td>{scan.lastScan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </main>
    </div>
  );
}

function StatCard({ title, value, delta, color }) {
  return (
    <div className="stat-card">
      <p>{title}</p>
      <div className="stat-row">
        <h3>{value}</h3>
        <div className={`stat-icon ${color}`} />
      </div>
      <span className={`delta ${color}`}>{delta}</span>
    </div>
  );
}

function StatusBadge({ status }) {
  return <span className={`status ${status.toLowerCase()}`}>{status}</span>;
}

function ProgressBar({ value }) {
  return (
    <div className="progress">
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${value}%` }} />
      </div>
      <span>{value}%</span>
    </div>
  );
}