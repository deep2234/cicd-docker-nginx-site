# mycicd-demo-app

A simple static website served using NGINX in a Docker container. This project showcases containerization of frontend code and automated CI/CD using GitHub Actions.

---

## 📁 Project Structure

```
.
├── .github/workflows/
│   └── main.yml         # GitHub Actions workflow for CI/CD
├── assets/              # Folder for image assets
├── css/style.css        # CSS styling
├── js/script.js         # JavaScript for interactivity
├── index.html           # Main HTML page
├── Dockerfile           # Docker instructions for building the image
└── README.md            # Project documentation
```

---

## 🚀 Features

- Static frontend (HTML, CSS, JS only)
- Served using lightweight NGINX
- Containerized using Docker
- CI/CD pipeline via GitHub Actions
- Automatically pushes to Docker Hub

---

## 🐳 Run Locally with Docker

### Build the Docker image:

```bash
docker build -t mycicd-demo-app .
```

### Run the container:

```bash
docker run -p 3000:80 mycicd-demo-app
```

Open your browser and visit: http://localhost:3000

---

## 🔄 CI/CD Workflow

The GitHub Actions workflow (.github/workflows/main.yml) automatically:

- Builds the Docker image
- Logs in to Docker Hub
- Pushes the image to: docker.io/dipshill/mycicd-demo-app:latest

---

## 📦 Pull from Docker Hub

You can pull the latest image using:

```bash
docker pull dipshill/mycicd-demo-app
```

---

## 🛠 Technologies Used

- HTML, CSS, JavaScript
- Docker
- NGINX (Alpine)
- GitHub Actions

---

## 🙌 Author

- Dip Shill
- Cloud & DevOps Enthusiast
- GitHub: @dipshill
</xaiArtifact>