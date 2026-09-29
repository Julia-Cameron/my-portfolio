# Julia Cameron's Portfolio

A personal portfolio website presenting Julia Cameron's background, skills, projects, education, and services. The site is built with React and Vite, with page navigation handled by React Router.

## Sections

- **Home**: portfolio introduction
- **About**: biography, resume, and interactive skill-category badges
- **Projects**: selected project work
- **Education**: academic background
- **Services**: software development services
- **Contact**: contact form and direct contact information

The interface uses a cosmic night-sky theme with an animated starry background.

## Getting Started

### Requirements

- Node.js (LTS recommended)
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite prints the local development URL in the terminal when the server starts.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server with hot reloading. |
| `npm run build` | Create a production build in `dist/`. |
| `npm run preview` | Preview the production build locally. Run `npm run build` first. |
| `npm run lint` | Run ESLint across the project. |

## Technology

- React
- Vite
- React Router
- EmailJS Browser SDK
- ESLint

## Project Structure

```text
src/
	assets/      Images, resume, and other static assets
	pages/       Home, About, Projects, Education, Services, and Contact pages
	App.jsx      Application layout and route definitions
	App.css      Shared application and page styles
	Footer.jsx   Site footer
	main.jsx     Application entry point
```
