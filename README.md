# Circuit Overseer Visit Web Application & Schedule (Sept 16–20, 2026)
### San Miguel Congregation

This folder contains the complete schedule deliverables, analysis, Excel master sheet, and the mobile-first web app ready for deployment to **GitHub Pages**.

---

## 🚀 Quick GitHub Pages Deployment Guide (No Backend Needed)

You can deploy the web app for free in less than 2 minutes using GitHub Pages:

### Step 1: Create a GitHub Repository
1. Go to [github.com/new](https://github.com/new) and create a repository (e.g., `co-visit-schedule`).
2. Make sure it is set to **Public** (required for free GitHub Pages).

### Step 2: Push or Upload `index.html`
- **Via Git CLI:**
  ```bash
  git init
  git add index.html
  git commit -m "Initial commit of CO visit schedule app"
  git branch -M main
  git remote add origin https://github.com/<YOUR_USERNAME>/co-visit-schedule.git
  git push -u origin main
  ```
- **Or Via Browser (Drag & Drop):**
  1. On your GitHub repository page, click **Add file → Upload files**.
  2. Drag and drop [index.html](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/index.html).
  3. Click **Commit changes**.

### Step 3: Turn on GitHub Pages
1. Go to your repository's **Settings → Pages**.
2. Under **Build and deployment → Branch**, choose `main` and `/ (root)`.
3. Click **Save**.
4. Within ~60 seconds, your site will be live at:
   `https://<YOUR_USERNAME>.github.io/co-visit-schedule/`

---

## 🔑 Passcodes

| Access Level | Passcode | Description |
| :--- | :--- | :--- |
| **Publishers / Congregation** | `covisit2026` | Read-only access. Full mobile-friendly view of ministry slots, territories, and meetings. No edit buttons. |
| **Admin (You)** | `admin2026` | Full edit access. Enables in-app editing of any companion or territory with 1-click updated file download. |

*Note: You can type `admin2026` directly in the passcode box on the lock screen to enter Admin Mode immediately.*

---

## ✏️ How to Update Schedule & Territories

1. Open the website on your phone or computer.
2. Log in with `admin2026` (or click the ⚙️ gear icon in the header).
3. Click **`✏️ Edit`** on any ministry slot or territory card to update companions, notes, or territory guides.
4. Click **`💾 Save & Download`** in the top admin banner to download the updated `index.html`.
5. Upload or push the downloaded `index.html` to your GitHub repository. GitHub Pages will update the live site for all publishers in ~30–60 seconds.

---

## 📁 Deliverables in This Project

- **[index.html](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/index.html)**: Standalone, mobile-first web app with dual-passcode security and in-app admin editing.
- **[CO Visit Schedule 2026.xlsx](file:///c:/Users/pierr/Documents/Personal/antigravity/Test/CO%20Visit%20Schedule%202026.xlsx)**: Updated master Excel workbook with sheet `9-15-2026` fully populated.
- **[co_visit_schedule_proposal.md](file:///C:/Users/pierr/.gemini/antigravity-ide/brain/fc93bf60-ac03-4919-9708-35180a0a0a15/co_visit_schedule_proposal.md)**: Detailed breakdown of priority methodology, past accompaniment counts, and justification.
