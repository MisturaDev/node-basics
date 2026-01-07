# Node Basics

**Learning Node.js step by step**

---

## Description
Learning Node.js basics, including Express, routes, controllers, validation and working with Node’s built-in modules like OS.

This repository contains my experiments and exercises while learning Node.js.  
It includes:

- Running JavaScript outside the browser
- Using Node.js built-in modules
- Creating and running Node projects
- Understanding npm and package.json
- Small practice projects for learning backend development


**Features Implemented**
1. Profile API

  - POST /api/profiles

  - Creates a user profile with name and role

  - Validation: Returns 400 if name or role is missing

  - Structured using controllers and routes

2. OS Info API

  - GET /api/os

  - Returns system information using Node’s built-in os module

  - Data includes OS type, platform, architecture, CPU cores, memory, and uptime

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
   npm init -y

4. Run the project:
   ```bash
   node express-server.js

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

---

## Developer

**Mistura Ishola**

