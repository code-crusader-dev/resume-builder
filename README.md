# Resume Builder 📝

A modern, browser-based **Resume Builder Web App** that allows users to create professional resumes with live preview, multiple templates, edit/remove functionality, and **one-click PDF download** — all without installing any app.

👉 Works directly in **Chrome, Edge, Firefox, and mobile browsers**.

---

## 🚀 Live Demo

🔗 **Live App:** https://resume-builder-1-xi.vercel.app/ 

---

## ✨ Features

- 🏠 **Home Page** with “Make Your Resume” flow
- 🧾 **Live Resume Preview** (updates in real time)
- 🎨 **Multiple Templates**
  - Classic (ATS-friendly)
  - Modern (clean, professional)
- ✏️ **CRUD Operations** (Add / Edit / Remove) for:
  - Skills
  - Education
  - Experience
  - Projects
- 📄 **Instant PDF Download**
  - One click → PDF downloads directly
  - No print dialog
  - Clean A4 layout
- 🌐 **Fully Web-Based**
  - No Expo
  - No mobile app
  - Just a shareable link

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** Tailwind CSS
- **PDF Export:** html2pdf.js
- **Hosting:** Vercel
- **Version Control:** Git & GitHub

---

## 📂 Project Structure

src/
├── components/
│ ├── ResumeClassic.jsx
│ └── ResumeModern.jsx
├── pages/
│ ├── Home.jsx
│ └── Builder.jsx
├── App.jsx
├── main.jsx
└── index.css

---

## 🧪 How to Run Locally

Clone the repository:

```bash
git clone https://github.com/code-crusader-dev/resume-builder.git
cd resume-builder
npm install
npm run dev
http://localhost:5173 <-- click
