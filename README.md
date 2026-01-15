# Node Basics

**Learning Node.js step by step including Express, routes, controllers, validation and working with Node’s built-in modules like OS.**

---

## Description

This repository contains my experiments and exercises while learning Node.js.  
It includes:

- Running JavaScript outside the browser
- Using Node.js built-in modules
- Creating and running Node projects
- Understanding npm and package.json
- Small practice projects for learning backend development

---

**Features Implemented**
1. Profile API
  - POST /api/profiles
  - Creates a user profile with name and role
  - Validation: Returns 400 if name or role is missing
  - Structured using controllers and routes
  - Supports default role from .env (DEFAULT_ROLE) if role is not provided

2. OS Info API
  - GET /api/os
  - Returns system information using Node’s built-in os module
  - Data includes OS type, platform, architecture, CPU cores, memory and uptime

3. Basic Routes
  - GET / → Welcome Home Page
  - GET /about → About Page
  - GET /api → Simple JSON API

4. 404 Route
  - Returns page not found for all unmatched routes

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/MisturaDev/node-basics.git

2. Navigate into the project folder:
   ```bash
   cd node-basics

3. Install dependencies:
   ```bash
   npm install

4. Run the project:
   ```bash
   node express-server.js

---

Environment Variables (.env)
This project uses environment variables to keep configuration and defaults flexible and secure.

Example .env file:
  ```bash
   PORT=5000
   GREETING_MESSAGE="Hello from Node.js API!"
   DEFAULT_ROLE="Junior Developer"
  ```

---

How it works:
- PORT: sets which port the server runs on (fallback to 3000 if missing)
- GREETING_MESSAGE: customizes the Home route message without touching code
- DEFAULT_ROLE: used in Profile API when the role is not provided in the request

Tips:
- Never commit .env with secrets to GitHub — it’s included in .gitignore
- Restart your server after updating .env variables

---

## Lessons Learned

- Node.js runtime basics

- Express server setup

- GET & POST requests

- JSON body parsing (express.json())

- Validation of POST data

- Project structure with routes & controllers

- Using Node built-in modules (OS)

- Git commits & version control

- Using environment variables (.env) for configurable defaults

---

## Developer

**Mistura Ishola**

