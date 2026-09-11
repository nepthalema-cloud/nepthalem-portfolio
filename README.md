# Nepthalem Ayele — Software Engineering Portfolio

A modern developer portfolio showcasing full-stack web applications, systems engineering work, and applied AI/ML projects.

Built with React, TypeScript, Vite, and Tailwind CSS, the application utilizes a lightweight custom client-side router with deep-linking support, responsive inline accordion interactions, and a custom light/dark design token system.

---

## Featured Projects

| Project | Description | Core Stack | Status | Links |
| :--- | :--- | :--- | :--- | :--- |
| **Blood Bank Management System** | Full-stack healthcare supply platform managing donor intake, laboratory verification, blood bag tracking, and hospital request dispatch with 4-role RBAC. | React, Node.js, Express, MongoDB, JWT | Verified Live Deployment | [GitHub Repository](https://github.com/nepthalema-cloud/blood-bank-management-system) · [Live Application](https://blood-bank-management-system-snowy.vercel.app/) |
| **Intelligent Traffic Management System** | Modular traffic analytics platform combining computer vision vehicle detection and tracking (YOLOv8, BoT-SORT) with a decoupled Django REST Framework backend. | Python, YOLOv8, BoT-SORT, Django REST Framework, Celery, Redis, Docker | Containerized / Local System | [GitHub Repository](https://github.com/nepthalema-cloud/intelligent-traffic-management-system) |
| **Campus Hub** | Full-stack university student networking platform featuring verified academic profiles, department directory search, connection workflows, and direct messaging. | Django, Django REST Framework, React, Vite, SQLite, Cloudinary | Verified Live Deployment | [GitHub Repository](https://github.com/nepthalema-cloud/campus-hub) · [Live Application](https://campus-hub-ruby.vercel.app/) · [Staging Repo](https://github.com/nepthalema-cloud/campus-hub-staging) |
| **AI Disease Detection System** | Applied machine learning prediction prototype using scikit-learn and Streamlit to evaluate risk indicators across four health conditions using tailored classification models. | Python, scikit-learn, Streamlit, Plotly, pandas | Streamlit Cloud Prototype | [GitHub Repository](https://github.com/nepthalema-cloud/AI_Disease_Detection_System) · [Streamlit Prototype](https://aidiseasedetectionsystem-bvenhbn2fzw8uq98rj5hpf.streamlit.app/) |

---

## Key Features & Architecture

* **Client-Side Routing & Deep Linking**: Lightweight custom router in `src/router.tsx` providing client-side navigation between the homepage index and dedicated case study routes (`/projects/:slug`), complete with cross-route smooth anchor scrolling (`/#projects`, `/#about`, etc.).
* **Compact Expandable Projects Index**: Interactive accordion interface allowing visitors to scan project summaries compactly or expand inline for architecture previews, verified screenshots, and direct action links.
* **In-Depth Case Studies**: Dedicated case study views detailing domain challenges, system architectures, engineering trade-offs, and technology breakdowns.
* **Dual-Theme Design System**: Accessible light (`#f1f5f9` page / `#ffffff` surface) and dark (`#0f172a` page / `#162033` surface) modes driven by CSS custom properties with `localStorage` persistence and system preference detection.
* **Restrained Motion & Accessibility**: CSS-driven reveals and accordion transitions with full `@media (prefers-reduced-motion: reduce)` support, semantic HTML landmarks, and minimum 44px interactive touch targets.
* **Production Deployment**: Pre-configured with root `vercel.json` SPA rewrite rules ensuring direct route refreshes resolve reliably in production.

---

## Tech Stack

* **Frontend**: React, TypeScript
* **Build Tool**: Vite
* **Styling**: Tailwind CSS (with inline design tokens)
* **Icons**: Handcrafted accessible SVGs (zero external icon dependencies)
* **Code Quality**: ESLint (flat config) + typescript-eslint

---

## Project Structure

```text
portfolio/
├── public/
│   ├── projects/          # Verified project screenshots
│   ├── favicon.svg        # Portfolio favicon
│   ├── profile.webp       # Optimized profile picture
│   └── profile.png        # Fallback profile picture
├── src/
│   ├── components/
│   │   ├── Navbar.tsx             # Header navigation & theme toggle
│   │   ├── Hero.tsx               # Introduction & primary actions
│   │   ├── About.tsx              # Engineering background & focus
│   │   ├── Projects.tsx           # Compact expandable project list
│   │   ├── ProjectCaseStudy.tsx   # Detailed project case study view
│   │   ├── Skills.tsx             # Categorized technical capabilities
│   │   ├── Education.tsx          # Academic background
│   │   ├── Contact.tsx            # Contact information & direct channels
│   │   └── Footer.tsx             # Footer links & copyright
│   ├── data/
│   │   └── projects.ts            # Verified project case study data
│   ├── hooks/
│   │   └── useScrollReveal.ts     # IntersectionObserver entrance hook
│   ├── App.tsx                    # Route rendering & layout shell
│   ├── index.css                  # Design tokens, themes & motion utilities
│   ├── main.tsx                   # Application entrypoint
│   ├── router.tsx                 # Client-side router & navigation state
│   └── theme.ts                   # Theme management & persistence
├── index.html                     # HTML shell & SEO meta tags
├── vercel.json                    # SPA routing fallback configuration
└── package.json                   # Scripts & dependencies
```

---

## Local Development

### Prerequisites

* Node.js (v18 or higher recommended)
* npm (v9 or higher)

### Installation

Clone the repository and install project dependencies:

```bash
git clone https://github.com/nepthalema-cloud/nepthalem-portfolio.git
cd nepthalem-portfolio
npm install
```

### Running the Development Server

Start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Code Quality & Linting

Run ESLint across the codebase:

```bash
npm run lint
```

### Production Build

Compile TypeScript and build the production bundle:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## Author

**Nepthalem Ayele**  
Full-Stack Developer / Software Engineer  
Computer Science · University of Gondar (Expected 2027)

* GitHub: [@nepthalema-cloud](https://github.com/nepthalema-cloud)
* LinkedIn: [Nepthalem Ayele](https://www.linkedin.com/in/nepthalem-ayele-03bb11415/)
* Email: [nepthalema@gmail.com](mailto:nepthalema@gmail.com)
