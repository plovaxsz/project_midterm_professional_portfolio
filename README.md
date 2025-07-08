Markdown

# **Comprehensive Guide to the Personal Portfolio Project**

**Project Version:** 1.0.0 (Midterm Submission)
**Author:** Josh Abraham Efendi

Welcome, and thank you for reviewing my midterm project. This document serves as a complete, step-by-step guide to understanding the project's architecture, setting up the development environment, and running the application locally.

---

## **Table of Contents**

1.  [**Architectural Philosophy**](#1-architectural-philosophy-️)
2.  [**Technology Stack Deep Dive**](#2-technology-stack-deep-dive-)
3.  [**Prerequisites Checklist**](#3-prerequisites-checklist-️)
4.  [**Setup & Configuration: A Step-by-Step Walkthrough**](#4-setup--configuration-a-step-by-step-walkthrough-)
    * [Step 1: Cloning the Repository](#step-1-cloning-the-repository)
    * [Step 2: The `.env` File - Securing Credentials](#step-2-the-env-file---securing-credentials)
5.  [**How to Run the Application**](#5-how-to-run-the-application-)
    * [Method A: The Docker Approach (Highly Recommended)](#method-a-the-docker-approach-highly-recommended-)
    * [Method B: The Manual Approach (For Granular Control)](#method-b-the-manual-approach-for-granular-control-)
6.  [**Accessing the Running Application**](#6-accessing-the-running-application-)
7.  [**Troubleshooting Common Issues**](#7-troubleshooting-common-issues-)



### **1. Architectural Philosophy 🏛️**

This project is not a simple, static website. It is a **decoupled, full-stack application** designed for scalability and ease of content management.

* **Decoupling Principle:** The **Frontend** (what users see) is completely separate from the **Backend** (where content is stored). This means I can update the website's content (e.g., add a new project) without ever touching the code or needing to redeploy the application.
* **Headless CMS Approach:** We use **Sanity.io** as a "Headless" Content Management System. This means Sanity provides a database and a beautiful editing interface (the "body"), but does not control the final presentation (the "head"). The "head" is our React application, which has the freedom to display the content in any way it chooses.

---

### **2. Technology Stack Deep Dive 📚**

Here is a detailed breakdown of every technology used and its specific role in this ecosystem.

| Category | Technology / Tool | Purpose & Role in the Project |
| :--- | :--- | :--- |
| **Frontend (Client)** | **React.js** | The core JavaScript library for building the entire User Interface (UI) using a declarative, component-based model. |
| | **Sass (SCSS)** | A CSS preprocessor that allows for more maintainable and organized styling through variables, mixins, and nesting. |
| | **Framer Motion** | A production-ready animation library that brings the UI to life with fluid transitions and interactive effects. |
| **Backend (CMS)** | **Sanity.io** | Acts as the project's brain. It's a cloud-hosted database and a customizable content editor called **Sanity Studio**. |
| **API Bridge** | **Sanity API** | The crucial communication layer. Our React app uses this API to send requests (e.g., "get all projects") to the Sanity backend. |
| **Deployment** | **Vercel** | The hosting platform for our frontend. It connects to GitHub and automatically deploys any new changes. |
| | **Sanity.io Platform**| Provides hosting for the backend database and the online version of the Content Studio. |
| **Source Control** | **Git & GitHub** | Git is used for version control locally. GitHub stores the code remotely and acts as the source for Vercel's deployments. |
| **Containerization** | **Docker** | Creates isolated, self-contained "boxes" (containers) for our frontend and backend to run in, avoiding local setup conflicts. |
| | **Docker Compose** | The "conductor" for Docker. It reads a `YAML` file to manage and run our multi-container application with a single command. |

---

### **3. Prerequisites Checklist ☑️**

To ensure a smooth setup, please verify that the following tools are installed and accessible from your command line.

* **Node.js (v16.x or newer):** Provides the JavaScript runtime. You can check your version by running `node -v`.
    * [Download Node.js](https://nodejs.org/en/)
* **npm (v8.x or newer):** The Node Package Manager, which is installed automatically with Node.js. Check your version with `npm -v`.
* **Docker Desktop:** The engine for running containers. It must be open and running in the background for Docker commands to work.
    * [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)


### **4. Setup & Configuration: A Step-by-Step Walkthrough 🗺️**

#### **Step 1: Cloning the Repository**

This step downloads a copy of the project's source code from GitHub to your local machine.

# 1. Use the 'git clone' command followed by the repository URL
git clone [https://github.com/plovaxsz/project_midterm_professional_portfolio.git](https://github.com/plovaxsz/project_midterm_professional_portfolio.git)

# 2. Navigate into the newly created project directory. All subsequent commands will be run from here.
cd MidtermPortofolio

Step 2: The .env File - Securing Credentials

The frontend application needs to know where to find the Sanity.io backend and how to authenticate with it. We provide this information via an environment variables file (.env). This file is intentionally not tracked by Git (.gitignore) to keep sensitive keys private.

    Create the file: In the absolute root of the project folder (MidtermPortofolio/), create a new file and name it exactly .env.

    Populate the file: Copy the template below and paste it into your new .env file.
    Cuplikan kode

    # This is the unique identifier for the Sanity.io project. It tells the React app which backend to connect to.
    REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id_here

    # This is a secret API token for authenticating requests. It allows the React app to read data from a private Sanity dataset.
    REACT_APP_SANITY_TOKEN=your_long_sanity_api_token_here

    Replace Placeholder Values: You will need to replace the placeholder values with the actual credentials from your Sanity.io project dashboard.

5. How to Run the Application 🚀

There are two distinct methods for running this project.

Method A: The Docker Approach (Highly Recommended)

This method is the most straightforward as it encapsulates all services and dependencies. It is the ideal way to run the project for a quick and consistent setup.

    Ensure Docker Desktop is running. You should see the Docker whale icon in your system's taskbar or menu bar.

    From the project's root directory (MidtermPortofolio/), execute the following command:
    Bash

    docker-compose up --build

        What this command is doing:

            docker-compose activates the Docker Compose tool.

            It reads the docker-compose.yml file to understand which services to run (in our case, frontend and backend).

            The --build flag forces Docker to build the images from scratch using the Dockerfile in each service's directory.

            The up command starts all the services defined in the file.

Method B: The Manual Approach (For Granular Control)

This method gives you direct control over each service and is useful for debugging individual parts of the application. You will need two separate terminal windows.

Terminal 1: Starting the Backend (Sanity Studio)

    Navigate into the backend's directory:
    Bash

cd backend_sanity_portfolio

Install its Node.js dependencies:
Bash

npm install --legacy-peer-deps

Start the Sanity Studio development server:
Bash

    npx sanity start

    Keep this terminal window open and running.

Terminal 2: Starting the Frontend (React App)

    Open a new, second terminal window.

    Ensure you are in the project's root directory (MidtermPortofolio/).

    Install its Node.js dependencies:
    Bash

npm install

Start the React development server:
Bash

    npm start

    Keep this terminal window open and running as well.

6. Accessing the Application ✅

Once the servers are running successfully, you can access the application components via your web browser.

    🌐 Frontend (The Live Portfolio Website):

        URL: http://localhost:3000

    🎛️ Backend (The Sanity Content Studio):

        URL: http://localhost:3333

        Note: You will be required to log in with your Sanity.io credentials to access this dashboard. This is where you can edit the content that appears on the frontend.

7. Troubleshooting Common Issues 🛠️

    Error: Something is already running on port 3000

        Cause: Another process is already using that port. This often happens if a previous npm start command didn't close properly.

        Solution: When prompted Would you like to run the app on another port instead? (Y/n), simply type Y and press Enter. The app will open on http://localhost:3001.

    Error: Configuration must contain projectId on the website.

        Cause: The React app cannot find the Sanity Project ID.

        Solution: Double-check that the .env file exists in the root directory and that the variable name is exactly REACT_APP_SANITY_PROJECT_ID. Ensure there are no typos.

I hope this detailed guide is helpful. Thank you for taking the time to review my work.

make everything in readme code and recheck rechkly recheck like trilion upon bilions of times to make sure its easy very very easy and very very detailed please make more detail like dtealied so my lecturer can understand verywell
Markdown

# **Comprehensive Guide to the Personal Portfolio Project**

**Project Version:** 1.0.0 (Midterm Submission)
**Author:** Josh Abraham Efendi

Welcome, and thank you for reviewing my midterm project. This document serves as a complete, step-by-step guide to understanding the project's architecture, setting up the development environment, and running the application locally. It is designed to be as clear and detailed as possible to ensure a smooth and successful setup.

---

## **Table of Contents**

1.  [**Architectural Philosophy**](#1-architectural-philosophy-️)
2.  [**Technology Stack Deep Dive**](#2-technology-stack-deep-dive-)
3.  [**Prerequisites Checklist**](#3-prerequisites-checklist-️)
4.  [**Setup & Configuration: A Step-by-Step Walkthrough**](#4-setup--configuration-a-step-by-step-walkthrough-)
    * [Step 1: Cloning the Repository](#step-1-cloning-the-repository)
    * [Step 2: The `.env` File - Securing Credentials](#step-2-the-env-file---securing-credentials)
5.  [**How to Run the Application**](#5-how-to-run-the-application-)
    * [Method A: The Docker Approach (Highly Recommended)](#method-a-the-docker-approach-highly-recommended-)
    * [Method B: The Manual Approach (For Granular Control)](#method-b-the-manual-approach-for-granular-control-)
6.  [**Accessing the Running Application**](#6-accessing-the-running-application-)
7.  [**Troubleshooting Common Issues**](#7-troubleshooting-common-issues-)

---

### **1. Architectural Philosophy 🏛️**

This project is not a simple, static website. It is a **decoupled, full-stack application** designed for scalability and ease of content management.

* **Decoupling Principle:** The **Frontend** (what users see) is completely separate from the **Backend** (where content is stored). This means I can update the website's content (e.g., add a new project) without ever touching the code or needing to redeploy the application.
* **Headless CMS Approach:** We use **Sanity.io** as a "Headless" Content Management System. This means Sanity provides a database and a beautiful editing interface (the "body"), but does not control the final presentation (the "head"). The "head" is our React application, which has the freedom to display the content in any way it chooses.

---

### **2. Technology Stack Deep Dive 📚**

Here is a detailed breakdown of every technology used and its specific role in this ecosystem.

| Category             | Technology / Tool        | Purpose & Role in the Project                                                                                              |
| :------------------- | :----------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| **Frontend (Client)** | **React.js** | The core JavaScript library for building the entire User Interface (UI) using a declarative, component-based model.         |
|                      | **Sass (SCSS)** | A CSS preprocessor that allows for more maintainable and organized styling through variables, mixins, and nesting. |
|                      | **Framer Motion** | A production-ready animation library that brings the UI to life with fluid transitions and interactive effects.           |
| **Backend (CMS)** | **Sanity.io** | Acts as the project's brain. It's a cloud-hosted database and a customizable content editor called **Sanity Studio**. |
| **API Bridge** | **Sanity API** | The crucial communication layer. Our React app uses this API to send requests (e.g., "get all projects") to the Sanity backend. |
| **Deployment** | **Vercel** | The hosting platform for our frontend. It connects to GitHub and automatically deploys any new changes.                   |
|                      | **Sanity.io Platform** | Provides hosting for the backend database and the online version of the Content Studio.                                |
| **Source Control** | **Git & GitHub** | Git is used for version control locally. GitHub stores the code remotely and acts as the source for Vercel's deployments. |
| **Containerization** | **Docker** | Creates isolated, self-contained "boxes" (containers) for our frontend and backend to run in, avoiding local setup conflicts. |
|                      | **Docker Compose** | The "conductor" for Docker. It reads a `YAML` file to manage and run our multi-container application with a single command.     |

---

### **3. Prerequisites Checklist ☑️**

To ensure a smooth setup, please verify that the following tools are installed and accessible from your command line.

* **Node.js (v16.x or newer):** Provides the JavaScript runtime. You can check your version by running `node -v`.
    * [Download Node.js](https://nodejs.org/en/)
* **npm (v8.x or newer):** The Node Package Manager, which is installed automatically with Node.js. Check your version with `npm -v`.
* **Docker Desktop:** The engine for running containers. It must be open and running in the background for Docker commands to work.
    * [Download Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

### **4. Setup & Configuration: A Step-by-Step Walkthrough 🗺️**

#### **Step 1: Cloning the Repository**

This step downloads a copy of the project's source code from GitHub to your local machine.

# 1. Use the 'git clone' command followed by the repository URL
git clone [https://github.com/plovaxsz/project_midterm_professional_portfolio.git](https://github.com/plovaxsz/project_midterm_professional_portfolio.git)

# 2. Navigate into the newly created project directory. All subsequent commands will be run from here.
cd MidtermPortofolio

Step 2: The .env File - Securing Credentials

The frontend application needs to know where to find the Sanity.io backend and how to authenticate with it. We provide this information via an environment variables file (.env). This file is intentionally not tracked by Git (.gitignore) to keep sensitive keys private.

    Create the file: In the absolute root of the project folder (MidtermPortofolio/), create a new file and name it exactly .env.

    Populate the file: Copy the template below and paste it into your new .env file.
    Cuplikan kode

    # This is the unique identifier for the Sanity.io project. It tells the React app which backend to connect to.
    REACT_APP_SANITY_PROJECT_ID=your_sanity_project_id_here

    # This is a secret API token for authenticating requests. It allows the React app to read data from a private Sanity dataset.
    REACT_APP_SANITY_TOKEN=your_long_sanity_api_token_here

    Replace Placeholder Values: You will need to replace the placeholder values with the actual credentials from your Sanity.io project dashboard.

5. How to Run the Application 🚀

There are two distinct methods for running this project.

Method A: The Docker Approach (Highly Recommended)

This method is the most straightforward as it encapsulates all services and dependencies. It is the ideal way to run the project for a quick and consistent setup.

    Ensure Docker Desktop is running. You should see the Docker whale icon in your system's taskbar or menu bar.

    From the project's root directory (MidtermPortofolio/), execute the following single command in your terminal:
    Bash

    docker-compose up --build

        What this command is doing:

            docker-compose is activating the Docker Compose tool.

            It reads the docker-compose.yml file to understand which services to run (in our case, frontend and backend).

            The --build flag forces Docker to build the images from scratch using the Dockerfile in each service's directory.

            The up command starts all the services defined in the file.

Method B: The Manual Approach (For Granular Control)

This method gives you direct control over each service and is useful for debugging individual parts of the application. You will need two separate terminal windows.

Terminal 1: Starting the Backend (Sanity Studio)

    Navigate into the backend's directory:
    Bash

cd backend_sanity_portfolio

Install its Node.js dependencies:
Bash

npm install --legacy-peer-deps

Start the Sanity Studio development server:
Bash

    npx sanity start

    Keep this terminal window open and running.

Terminal 2: Starting the Frontend (React App)

    Open a new, second terminal window.

    Ensure you are in the project's root directory (MidtermPortofolio/).

    Install its Node.js dependencies:
    Bash

npm install

Start the React development server:
Bash

    npm start

    Keep this terminal window open and running as well.

6. Accessing the Application ✅

Once the servers are running successfully, you can access the application components via your web browser.

    🌐 Frontend (The Live Portfolio Website):

        URL: http://localhost:3000

    🎛️ Backend (The Sanity Content Studio):

        URL: http://localhost:3333

        Note: You will be required to log in with your Sanity.io credentials to access this dashboard. This is where you can edit the content that appears on the frontend.

7. Troubleshooting Common Issues 🛠️

    Error: Something is already running on port 3000

        Cause: Another process is already using that port. This often happens if a previous npm start command didn't close properly.

        Solution: When prompted Would you like to run the app on another port instead? (Y/n), simply type Y and press Enter. The app will open on http://localhost:3001.

    Error: Configuration must contain projectId on the website.

        Cause: The React app cannot find the Sanity Project ID.

        Solution: Double-check that the .env file exists in the root directory and that the variable name is exactly REACT_APP_SANITY_PROJECT_ID. Ensure there are no typos.

I hope this detailed guide is helpful. Thank you for taking the time to review my work.
