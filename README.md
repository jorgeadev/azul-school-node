<div align="center">

  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white" alt="Express.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
  
  <br />

  <h1>🚀 Azul School: Node.js Masterclass</h1>
  <p><strong>A comprehensive journey from JavaScript fundamentals to robust REST APIs.</strong></p>

  <img src="https://img.shields.io/github/repo-size/jorgeadev/azul-school-node?color=blue&style=flat-square" alt="GitHub repo size" />
  <img src="https://img.shields.io/github/issues/jorgeadev/azul-school-node?color=orange&style=flat-square" alt="GitHub issues" />
  <img src="https://img.shields.io/github/forks/jorgeadev/azul-school-node?color=teal&style=flat-square" alt="GitHub forks" />
  <img src="https://img.shields.io/github/stars/jorgeadev/azul-school-node?color=gold&style=flat-square" alt="GitHub stars" />

</div>

---

## 📖 Table of Contents
- [About the Project](#-about-the-project)
- [Key Features](#-key-features)
- [Curriculum Overview](#-curriculum-overview)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Code Architecture](#-code-architecture)

---

## 🌟 About the Project

This repository contains the complete curriculum for the **Azul School Node.js Course**. It serves as both a learning canvas and a reference architecture for building scalable server-side applications. From mastering the asynchronous nature of JavaScript to managing high-performance data streams and constructing fully-fledged APIs—this repository covers it all.

---

## 🎯 Key Features

- **Progressive Complexity:** Code structure evolves naturally from simple scripts to a complete enterprise-grade API.
- **Modern JavaScript:** Utilizes ES6+ syntax, Promises, and `async/await`.
- **Database Integration:** Features a robust NoSQL schema using **MongoDB** and **Mongoose**.
- **Test-Driven:** Includes automated testing scaffolding using **Mocha** and **Supertest**.

---

## 📚 Curriculum Overview

Explore the modules sequentially to grasp how each conceptual layer is built.

<details>
<summary><strong>📦 Module 01: Promises & Asynchrony</strong></summary>

<br>

Dive deep into JavaScript's Event Loop.
- Understand synchronous vs asynchronous code execution.
- Master `Promises` to eliminate callback hell and build predictable async flows.
</details>

<details>
<summary><strong>📦 Module 02: Streams & File Systems</strong></summary>

<br>

Learn to handle data like a pro.
- Interact with the host OS directly using the Node `fs` module.
- Build efficient memory pipelines utilizing **Read**, **Write**, **Duplex**, and **Transform** streams.
</details>

<details>
<summary><strong>📦 Module 03: Express Fundamentals</strong></summary>

<br>

Introduction to web servers.
- Set up **Express.js** applications from scratch.
- Master core network routing and HTTP middleware paradigms.
</details>

<details>
<summary><strong>📦 Module 04: Movies REST API (Capstone)</strong></summary>

<br>

The culmination of the fundamentals applied to a real-world project.
- Design and deploy a complete RESTful API for a movie database.
- Integrate **MongoDB** applying rich **Mongoose** schemas and validations.
- Standardize environment variables (`dotenv`) and manage cross-origin sharing (CORS).
</details>

---

## 💻 Tech Stack

| Category | Technology | Description |
|----------|-------------|-------------|
| **Core** | `Node.js` | JavaScript runtime environment |
| **Framework**| `Express.js`| Fast, unopinionated minimalist web framework |
| **Database** | `MongoDB` | NoSQL document-oriented database program |
| **ORM / ODM**| `Mongoose` | Elegant MongoDB object modeling architecture |
| **Testing** | `Mocha` & `Supertest` | Robust test frameworks and HTTP assertions |

---

## 🚀 Getting Started

Follow these instructions to run the capstone **Movies API** locally on your machine.

### Prerequisites

- Node.js (v14.0.0 or higher)
- MongoDB running locally or a MongoDB Atlas URI

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/jorgeadev/azul-school-node.git

# 2. Navigate to the capstone project
cd azul-school-node/Module-04/movies-api

# 3. Install NPM dependencies
npm install

# 4. Start the development server (uses nodemon)
npm run dev
```

> **Note:** Ensure your `.env` variables are correctly set up to point to your MongoDB instance before launching.

---

## 🏗 Code Architecture

Here is a quick look at how the API routing layer is structured to maintain clean, scalable, and isolated code:

```javascript
const express = require('express');
const MoviesService = require('../services/movies');

function moviesApi(app) {
  const router = express.Router();
  app.use('/api/movies', router);

  const moviesService = new MoviesService();

  // Highlighted: Clean async/await routing
  router.get('/', async function(req, res, next) {
    try {
      const movies = await moviesService.getMovies();
      res.status(200).json({ 
        data: movies, 
        message: 'Movies successfully retrieved' 
      });
    } catch (err) {
      next(err); // Centralized error handling
    }
  });
}

module.exports = moviesApi;
```

---

<div align="center">
  <sub>Built with ❤️ for the <strong>Azul School</strong> JavaScript track.</sub>
</div>
