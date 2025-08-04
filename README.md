# mycicd-demo-app

This is a simple static website served using NGINX and Docker. It demonstrates how to containerize a frontend application and automate image building and deployment using GitHub Actions and Docker Hub.

---

## 🚀 Features

- Fully containerized with Docker
- Served with lightweight NGINX
- Automated build and push using GitHub Actions
- No Node.js or backend used — just HTML, CSS, JS

---

## 🐳 Docker Instructions

### Build the Docker image

```bash
docker build -t mycicd-demo-app .




📁 Project Structure
.
├── .github/workflows/
│   └── main.yml          # GitHub Actions workflow for CI/CD
├── assets/              # Folder for image assets
├── Dockerfile           # Docker instructions for building the image
├── index.html          # Main HTML page
├── css/style.css       # CSS styling
├── js/script.js        # JavaScript for interactivity
└── README.md           # Project documentation



🐳 Docker Setup
🧱 Build the Docker Image
To build the Docker image locally:
docker build -t my-static-site .

▶️ Run the Container
Run the container and map port 3000 (host) to port 80 (container):
docker run -p 3000:80 my-static-site

Open http://localhost:3000 in your browser to view the site. Images in the assets folder will be accessible (e.g., /assets/2025-07-08-18-54.png).

Note: Nginx inside the container listens on port 80, mapped to port 3000 on the host.

🔄 CI/CD with GitHub Actions
The project uses GitHub Actions to automate the build, test, and deployment process. The workflow:

Triggers on push to the main branch.
Builds and tests the Docker image using the Dockerfile.
Deploys static files to Netlify.

The workflow file is located at .github/workflows/main.yml.
Workflow Overview

Checkout Code: Retrieves the repository code.
Build and Test Docker Image: Builds the image and runs it to verify accessibility.
Deploy to Netlify: Uploads static files (including assets) to Netlify.
