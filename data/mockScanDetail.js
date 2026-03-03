export const scanMeta = {
  progress: 0,
  status: "In Progress",
  step: 1, 
  metadata: {
    type: "Grey Box",
    target: "google.com",
    started: "Nov 22, 09:00AM",
    credentials: "2 Active",
    file: "Control.pdf",
    checklist: "40/350",
  },
};

export const activityLogs = [
  `[09:00:00] I'll begin a systematic penetration test on helpdesk.democorp.com.`,
  `[09:01:00] Good! target is online. Performing port scanning...`,
  `[09:02:00] Recon results: Apache httpd 2.4.65 on port 80.`,
  `[09:03:00] Found login page. Testing credential test:test`,
  `[09:05:00] Accessed dashboard using X-UserId: 10032`,
  `[09:01:00] Good! target is online. Performing port scanning...`,
  `[09:02:00] Recon results: Apache httpd 2.4.65 on port 80.`,
  `[09:03:00] Found login page. Testing credential test:test`,
  `[09:05:00] Accessed dashboard using X-UserId: 10032`,
];

export const findings = [
  {
    id: 1,
    severity: "Critical",
    title: "SQL Injection in Authentication Endpoint",
    endpoint: "/api/users/profile",
    time: "10:45:23",
    description:
      "Time-based blind SQL injection confirmed on user-controlled input.",
  },
  {
    id: 2,
    severity: "High",
    title: "Unauthorized Access to User Metadata",
    endpoint: "/api/auth/login",
    time: "10:46:23",
    description:
      "Authenticated low-privilege user accessed metadata of other users.",
  },
  {
    id: 3,
    severity: "Medium",
    title: "Broken Authentication Rate Limiting",
    endpoint: "/api/search",
    time: "10:46:23",
    description:
      "No effective rate limiting detected on login attempts.",
  },
];