# Circuit Overseer Visit Web Application & Schedule (Sept 16–20, 2026)
### San Miguel Congregation

🌐 **Live GitHub Pages URL:** [https://pssebastian.github.io/co-visit-schedule/](https://pssebastian.github.io/co-visit-schedule/)

This repository hosts the mobile-first Circuit Overseer Visit Schedule application for San Miguel Congregation.

---

## 🔑 Passcodes

| Access Level | Passcode | Description |
| :--- | :--- | :--- |
| **Publishers / Congregation** | `covisit2026` | Read-only access. Full mobile-friendly view of ministry slots, territories, and congregation meetings. |
| **Admin** | `admin2026` | Full edit access. Enables in-app editing of any ministry slot, territory guide/location, or meeting details with 1-click `Export index.html` download. |

*Tip: You can type `admin2026` directly into the passcode box on the lock screen to enter Admin Mode immediately.*

---

## 📱 Features

- **Mobile-First Design**: Tailored for smartphones with bottom navigation, responsive day filters, role pills (`All`, `Circuit Overseer`, `CO's Wife`), and search drawer.
- **Color-Coded Indicator Strips**:
  - 🔵 Blue: Special Meetings / Weekend Meetings
  - 🟢 Pine Green: Circuit Overseer ministry accompaniments
  - 🟣 Purple: CO's Wife ministry accompaniments
- **Zero Backend**: Runs entirely client-side via GitHub Pages.
- **Admin In-App Editing**: Easily adjust companion assignments, territories, or meeting times on the go, then click `Export index.html` to save the updated file.

---

## ✏️ How to Publish Updates

1. Open [https://pssebastian.github.io/co-visit-schedule/](https://pssebastian.github.io/co-visit-schedule/) on your device.
2. Log in with passcode `admin2026` (or tap **More** in the bottom bar).
3. Tap on any card (ministry slot, territory, or meeting) to modify companions, times, or notes.
4. Tap **Export index.html** in the top admin banner to download your updated `index.html`.
5. Replace `index.html` in this repository and commit/push:
   ```bash
   git add index.html
   git commit -m "Update schedule"
   git push origin main
   ```
   GitHub Pages will automatically update the live site within 30–60 seconds.
