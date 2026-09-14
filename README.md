# Circuit Overseer Visit Web Application & Schedule (Sept 16–20, 2026)
### San Miguel Congregation

🌐 **Live GitHub Pages URL:** [https://pssebastian.github.io/co-visit-schedule/](https://pssebastian.github.io/co-visit-schedule/)

This repository hosts the mobile-first Circuit Overseer Visit Schedule application for San Miguel Congregation.

---

## 📱 Features

- **Mobile-First Design**: Tailored for smartphones with bottom navigation, responsive day filters, role pills (`All`, `Circuit Overseer`, `CO's Wife`), and search drawer.
- **Color-Coded Indicator Strips**:
  - 🔵 Blue: Special Meetings / Weekend Meetings
  - 🟢 Pine Green: Circuit Overseer ministry accompaniments
  - 🟣 Purple: CO's Wife ministry accompaniments
- **Google Sheets Cloud Backend**: Free serverless backend powered by Google Sheets & Apps Script.
- **Automatic Live Syncing**: Any additions, edits, or deletions made in Admin mode are automatically saved straight to your Google Sheet in real-time.
- **Zero-Latency Offline Fallback**: Instant local loading via `localStorage` cache with background sync.
- **Dual-Editing**: Update slots via the web app UI or edit rows directly in Google Sheets.

---

## ☁️ Google Sheets Backend Setup (2 Minutes)

1. **Upload Spreadsheet:**
   - Upload [CO_Visit_Backend_Data.xlsx](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/CO_Visit_Backend_Data.xlsx) to your Google Drive.
   - Open it and select **File > Save as Google Sheets**.
2. **Add Apps Script:**
   - In your Google Sheet, click **Extensions > Apps Script**.
   - Delete existing code, paste the contents of [Code.gs](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/Code.gs) (or [google_apps_script.js](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/google_apps_script.js)), and click **Save** (💾).
3. **Deploy as Web App:**
   - Click **Deploy > New deployment**.
   - Select type ⚙️: **Web app**.
   - Set **Execute as:** `Me` and **Who has access:** `Anyone`.
   - Click **Deploy** and grant standard permissions.
4. **Connect to Web App:**
   - Copy the Web app URL ending in `/exec`.
   - In [index.html](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/index.html), paste your URL into `GOOGLE_SCRIPT_URL`:
     ```javascript
     const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/.../exec";
     ```
   - Commit and push to GitHub (`git add . && git commit -m "Connect Google Sheet backend" && git push`).

---

## ✏️ How Schedule Updates Work

With the Google Sheet backend connected:
1. Open [https://pssebastian.github.io/co-visit-schedule/](https://pssebastian.github.io/co-visit-schedule/) on your device.
2. Log in with the admin passcode (`admin2026`).
3. Tap on any card or button to **Add**, **Edit**, or **Delete** slots, companions, territories, or meetings.
4. Changes are **automatically saved to your Google Sheet** in the background, and all publishers immediately see the changes upon opening the site!
