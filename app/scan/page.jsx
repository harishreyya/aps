"use client";
import "./scan.css";
import { useState } from "react";
import {
  FiHome,
  FiFolder,
  FiSearch,
  FiCalendar,
  FiBell,
  FiSettings,
  FiHelpCircle,
} from "react-icons/fi";

import { FiSun, FiMoon } from "react-icons/fi";

import { scanMeta, activityLogs, findings } from "../../data/mockScanDetail";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ScanPage() {
  const [activeTab, setActiveTab] = useState("activity");
  const [theme, setTheme] = useState("light");
  const pathname = usePathname();

  return (
    <div className={`scan-layout ${theme === "dark" ? "dark" : ""}`}>

      <aside className="sidebar">

        <ul className="sidebar-nav">
             <div className="theme-toggle-wrapper">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FiMoon size={18}/> : <FiSun size={18}/>}
          </button>
        </div>
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
          <li><FiCalendar size={18}/> Schedule</li>
          <li><FiBell size={18}/> Notifications</li>
          <li><FiSettings size={18}/> Settings</li>
          <li><FiHelpCircle size={18}/> Support</li>
        </ul>

        <div className="sidebar-user">
          <div className="avatar"></div>
          <div>
            <p>admin@edu.com</p>
            <span>Security Lead</span>
          </div>
        </div>
      </aside>

      <main className="scan-main">

      
        <div className="scan-header">
          <div className="scan-top">

            <div className="scan-progress">
              <div className="progress-circle">
                <div className="progress-value">0%</div>
                <div className="progress-label">In Progress</div>
              </div>
            </div>

            <div className="scan-steps">
              {["Spidering","Mapping","Testing","Validating","Reporting"].map(
                (step, index) => (
                  <div
                    key={step}
                    className={`step ${index===0 ? "active" : ""}`}
                  >
                    <div className="step-dot"></div>
                    <span>{step}</span>
                  </div>
                )
              )}
            </div>

          </div>

          <div className="scan-meta">
            <Meta label="Scan Type" value="Grey Box"/>
            <Meta label="Targets" value="google.com"/>
            <Meta label="Started At" value="Nov 22, 09:00AM"/>
            <Meta label="Credentials" value="2 Active"/>
            <Meta label="Files" value="Control.pdf"/>
            <Meta label="Checklists" value="40/350" highlight/>
          </div>
        </div>

        <div className="scan-body">

          <div className="console-panel">

            <div className="console-header">
              <span>Live Scan Console</span>
              <span className="running">Running...</span>
            </div>

            <div className="console-tabs">
              <button
                className={activeTab==="activity" ? "active":""}
                onClick={()=>setActiveTab("activity")}
              >
                Activity Log
              </button>
              <button
                className={activeTab==="verification" ? "active":""}
                onClick={()=>setActiveTab("verification")}
              >
                Verification Loops
              </button>
            </div>

            <div className="console-content">
              {activityLogs.map((log,i)=>(
                <p key={i}>{log}</p>
              ))}
            </div>
          </div>

          <div className="findings-panel">
            <h3>Finding Log</h3>

            {findings.map((item)=>(
              <div key={item.id} className="finding-card">
                <div className="finding-top">
                  <span className={`badge ${item.severity.toLowerCase()}`}>
                    {item.severity}
                  </span>
                  <span className="time">{item.time}</span>
                </div>

                <h4>{item.title}</h4>
                <p className="endpoint">{item.endpoint}</p>
                <p className="description">{item.description}</p>
              </div>
            ))}
          </div>

        </div>

        <div className="scan-footer">
          <span>Sub-Agents: 0</span>
          <span>Parallel Executions: 2</span>
          <span>Operations: 1</span>
          <span>Critical: 0</span>
          <span>High: 0</span>
          <span>Medium: 0</span>
          <span>Low: 0</span>
        </div>

      </main>
    </div>
  );
}

function Meta({label,value,highlight}){
  return(
    <div className="meta-item">
      <span>{label}</span>
      <b className={highlight ? "highlight" : ""}>{value}</b>
    </div>
  );
}