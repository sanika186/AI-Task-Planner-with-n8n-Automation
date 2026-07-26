# 🚀 AI Task Planner with n8n Automation

### An AI-Powered Daily Productivity Planner built with React, n8n, Groq AI & Tailwind CSS

<p align="center">
  <img src="https://img.shields.io/badge/React-18-blue?logo=react">
  <img src="https://img.shields.io/badge/Vite-Latest-purple?logo=vite">
  <img src="https://img.shields.io/badge/n8n-Automation-orange?logo=n8n">
  <img src="https://img.shields.io/badge/Groq-AI-green">
  <img src="https://img.shields.io/badge/TailwindCSS-3.x-38BDF8?logo=tailwindcss">
  <img src="https://img.shields.io/badge/jsPDF-PDF-red">
  <img src="https://img.shields.io/badge/Status-Completed-success">
</p>

---

# 📖 Overview

**AI Task Planner with n8n Automation** is an intelligent productivity application that generates personalized daily schedules using Artificial Intelligence.

Instead of manually planning your day, users simply describe their goals in natural language, and the application automatically creates a structured planner with time slots, priorities, categories, and helpful notes.

The project combines a modern React frontend with an automated n8n workflow and Groq AI to deliver intelligent, fast, and personalized task planning.

---

# ✨ Features

### 🤖 AI Powered Planner
- Generate personalized daily schedules
- Natural language prompt support
- Intelligent task organization

### 📅 Smart Scheduling
- Automatic time allocation
- Sequential task planning
- Balanced workload distribution

### 📂 Task Management
- Task Categories
- Priority Levels
- AI-generated Notes
- Clean Planner Cards

### ✅ Progress Tracking
- Mark tasks as completed
- Live statistics
- Pending task counter
- Completed task counter

### 📊 Dashboard
- Total Tasks
- Completed Tasks
- Pending Tasks
- Real-time updates

### 📄 PDF Export
- Export generated planner
- Clean printable layout
- Download planner anytime

### 🎨 User Interface
- Modern UI
- Responsive Design
- Glassmorphism Cards
- Smooth Animations

### ⚡ Automation
- n8n Workflow
- AI Agent Integration
- Webhook Communication
- Automated Planner Generation

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- JavaScript (ES6+)
- Tailwind CSS
- jsPDF

---

## AI & Automation

- n8n
- AI Agent
- Groq LLM
- Webhook API

---

## Development Tools

- VS Code
- Git
- GitHub
- Vercel

---

# 🏗 System Architecture

```
                   User
                     │
                     ▼
           React Frontend (Vite)
                     │
                     ▼
              Webhook Request
                     │
                     ▼
              n8n Workflow
                     │
                     ▼
                AI Agent
                     │
                     ▼
                Groq LLM
                     │
                     ▼
      AI Generated Daily Planner
                     │
                     ▼
          Respond to Webhook
                     │
                     ▼
          React User Interface
                     │
         ┌───────────┴────────────┐
         ▼                        ▼
 Task Completion             Export PDF
```

---

# 🔄 Workflow

```
User Prompt

↓

React Frontend

↓

Webhook

↓

n8n Automation

↓

AI Agent

↓

Groq AI

↓

Planner Generation

↓

React Application

↓

Task Tracking

↓

PDF Export
```

---

# 📁 Project Structure

```
AI-Task-Planner-with-n8n-Automation
│
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── components
│   │      ├── Hero.jsx
│   │      ├── Navbar.jsx
│   │      ├── Stats.jsx
│   │      └── Footer.jsx
│   │
│   ├── pages
│   │      └── Home.jsx
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── vite.config.js
└── README.md
```

---

# 🚀 Installation

Clone the repository

```bash
git clone https://github.com/yourusername/AI-Task-Planner-with-n8n-Automation.git
```

Go to project directory

```bash
cd AI-Task-Planner-with-n8n-Automation
```

Install dependencies

```bash
npm install
```

Start Development Server

```bash
npm run dev
```

---

# ⚙️ Configuration

Configure your n8n webhook URL inside the React project.

Example

```javascript
fetch("/webhook/planner", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    prompt,
  }),
});
```

Configure your AI model inside the n8n workflow using your Groq API Key.

---

# 💻 How It Works

### Step 1

User enters a prompt

Example

```
Create a productive planner for interview preparation.
```

---

### Step 2

React sends the prompt to the n8n Webhook.

---

### Step 3

The Webhook triggers the AI Agent.

---

### Step 4

The AI Agent communicates with Groq AI.

---

### Step 5

Groq generates a structured planner.

---

### Step 6

The planner is returned to React.

---

### Step 7

Tasks are displayed as planner cards.

---

### Step 8

Users can

- Mark Tasks Complete
- View Statistics
- Export Planner

---

# 📊 Planner Format

Each planner contains

- Time
- Task
- Category
- Priority
- Notes

Example

```
Time      : 8:00 AM - 9:00 AM

Task      : Study Machine Learning

Category  : Learning

Priority  : High

Notes     : Focus on Neural Networks
```

---

# 📈 Dashboard Statistics

The application automatically updates

✔ Total Tasks

✔ Completed Tasks

✔ Pending Tasks

whenever users complete any task.

---

# 📄 PDF Export

Users can export planners into a clean PDF document containing

- Planner Title
- Time Slots
- Tasks
- Categories
- Priorities
- Notes

---

# 💡 Example Prompts

```
Create a study planner for Data Science.

Create a productive planner for interview preparation.

Plan my Sunday with fitness and relaxation.

Create a work schedule for software development.

Create a balanced planner for exam preparation.
```

---

# 🎯 Learning Outcomes

Through this project I learned

- React Component Architecture
- React Hooks
- State Management
- API Integration
- Webhook Communication
- n8n Workflow Automation
- AI Agent Integration
- Prompt Engineering
- Groq LLM Integration
- Responsive UI Design
- PDF Generation using jsPDF
- AI Application Development
- Frontend Deployment

---

# 🚀 Future Enhancements

- User Authentication
- Planner History
- Calendar Integration
- Google Calendar Sync
- Voice Input
- Email Planner
- Planner Analytics
- Dark / Light Theme
- Reminder Notifications
- Mobile Responsive Enhancements
- Weekly Planner
- Monthly Planner
- Planner Templates
- Multiple AI Models Support

---

# 🌐 Live Demo

> https://your-live-demo-link

---

# 💻 GitHub Repository

> https://github.com/yourusername/AI-Task-Planner-with-n8n-Automation

---

# 👩‍💻 Author

## Sanika Kulkarni

**Aspiring AI/ML Engineer | Python Developer | Artificial Intelligence & Data Science Enthusiast**

### Connect with Me

💼 LinkedIn

https://www.linkedin.com/in/sanika-kulkarni-4815a7315/

🐙 GitHub

https://github.com/sanika186

📧 Email

sanikakulkarni9699@gmail.com

---

# ⭐ Show Your Support

If you found this project helpful,

⭐ Star this repository

🍴 Fork this project

📢 Share it with others

---

# 📜 License

This project is developed for educational and portfolio purposes.

Feel free to explore, learn, and contribute.

---

<p align="center">
Made with ❤️ using React, n8n, Groq AI & Tailwind CSS
</p>