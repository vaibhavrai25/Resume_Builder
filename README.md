# Resume_Builder
📄 Resume Builder

Craft your professional, ATS-friendly resume in minutes. This is a full-stack MERN application built with a modern, fast, and interactive stack.

🚀 About The Project

This project is a complete, full-stack web application that allows users to create, manage, and download professional resumes. It features a sleek, interactive frontend built with React and Vite, and a robust, secure backend powered by Node.js, Express, and MongoDB.

Users can register and log in to their dashboard, where they can create new resumes from scratch, edit existing ones, and see a live-updated completion score. When finished, they can export their resume as a high-quality PDF.

✨ Key Features

User Authentication: Secure user registration and login (JWT).

Dynamic Dashboard: View, create, edit, and delete all your resumes in one place.

Real-time Completion Score: A completion percentage is calculated live as you fill out your resume.

Interactive Resume Editor: (Details on the builder page, if applicable)

PDF Export: Download your final resume as a pixel-perfect PDF using html2canvas and jspdf.

Modal-based UI: Clean and simple forms for login, signup, and creating new resumes.

🛠️ Tech Stack

This project is built with a modern MERN stack and a focus on performance and developer experience.

Frontend--
React-- Core UI library for building components.

Vite-- Next-generation build tool for blazing-fast development.

React Router-- For client-side routing (/, /dashboard, etc.).

Tailwind CSS-- (Inferred) Utility-first CSS framework for rapid UI styling.

Axios-- Promise-based HTTP client for API requests.

Lucide Icons-- Beautiful and consistent open-source icons.

jsPDF & html2canvas-- To convert HTML components directly into a downloadable PDF.

react-hot-toast-- For clean and simple toast notifications.

moment.js-- For easy date and time formatting.


Backend
Node.js-- JavaScript runtime for the server.

Express.js-- Fast, minimalist web framework for building the API.

MongoDB-- NoSQL database to store user and resume data.

Mongoose-- Elegant MongoDB object modeling for Node.js.

JWT (jsonwebtoken)-- For creating secure, stateless authentication tokens.

bcrypt.js--For hashing user passwords before saving to the database.

CORS--To allow cross-origin requests from the frontend.

dotenv-- To manage environment variables securely.

🏁 Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites

Node.js (v16 or later)

npm

MongoDB (A local instance or a free MongoDB Atlas connection string)

1. Backend Setup

Navigate to the backend directory:

cd backend


Install NPM packages:

npm install


Create a .env file in the backend root and add your environment variables:

# Your MongoDB Connection String
MONGO_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/resume-builder

# A strong, random string for JWT
JWT_SECRET=yoursecretstring123


Start the backend server:

npm run dev


(Make sure your package.json has a dev script. If not, use npm run start or node server.js)

Your backend will be running on http://localhost:4000.

2. Frontend Setup

In a new terminal, navigate to the frontend directory:

cd frontend


Install NPM packages:

npm install


Create a .env.local file in the frontend root. This is crucial for Vite to connect to your backend:

# The URL of your running backend server
VITE_API_BASE_URL=http://localhost:4000


Start the frontend development server:

npm run dev


Your application will be running on http://localhost:5173 (or a similar port).

☁️ Deployment

Here’s a recommended way to deploy this MERN stack for free:

1. Backend Deployment (on Render)

Push your entire project (both frontend and backend folders) to a GitHub repository.

Sign up for Render.

Create a new "Web Service".

Connect your GitHub repository.

In the settings:

Root Directory: backend

Build Command: npm install

Start Command: npm run start (Make sure your backend/package.json has a start script: "start": "node server.js")

Go to the "Environment" tab and add your .env variables (MONGO_URI, JWT_SECRET).

Deploy! Render will give you a public URL (e.g., https://resume-builder-api.onrender.com).

2. Frontend Deployment (on Vercel)

Sign up for Vercel.

Create a new "Project".

Connect the same GitHub repository.

Vercel will detect it's a Vite project. In the settings:

Framework Preset: Vite

Root Directory: frontend

Go to the "Environment Variables" tab and add your backend's URL:

Key: VITE_API_BASE_URL

Value: Your new Render URL (e.g., https://resume-builder-api.onrender.com)

Deploy. Your site will be live!

3. Final Step (Fix CORS)

Your backend will block requests from your new Vercel URL. You must update your backend/server.js cors configuration:

// In backend/server.js
app.use(cors({
  origin: ["http://localhost:5173", "[https://your-vercel-app-name.vercel.app](https://your-vercel-app-name.vercel.app)"]
}));


Re-commit and push this change. Render will automatically redeploy your backend, and your full-stack application will be live!
