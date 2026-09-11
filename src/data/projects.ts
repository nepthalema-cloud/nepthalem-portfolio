export interface ProjectFeature {
  title: string
  description: string
}

export interface TechnicalDecision {
  title: string
  description: string
}

export interface TechnologyCategory {
  category: string
  items: string[]
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  domain: string
  role: string
  summary: string
  problem: string
  solution: string
  engineeringHighlights: string[]
  keyFeatures: ProjectFeature[]
  technicalDecisions: TechnicalDecision[]
  challengesAndTradeoffs: TechnicalDecision[]
  technologies: TechnologyCategory[]
  featuredTechnologies?: string[]
  githubUrl: string
  liveUrl?: string
  liveStatusNote?: string
  deploymentType: 'Verified Live Deployment' | 'Containerized / Local System' | 'Streamlit Cloud Prototype'
  imageUrl?: string
  imageAlt?: string
  additionalRepoUrl?: string
  additionalLiveUrl?: string
}

export const projects: Project[] = [
  {
    slug: 'blood-bank',
    title: 'Blood Bank Management System',
    subtitle: 'End-to-End Multi-Role Healthcare Blood Supply & Inventory Platform',
    domain: 'Healthcare Operations & Inventory Management',
    role: 'Full-Stack Developer / Software Engineer',
    summary:
      'A comprehensive full-stack healthcare platform engineered to manage the complete lifecycle of donor intake, clinical screening, laboratory processing, blood bag serialization, inventory allocation, and hospital request dispatch.',
    problem:
      'Blood banks and regional hospitals often struggle with fragmented donor records, manual screening checks, and delayed inventory updates. Incompatible blood units or delayed dispatches during emergencies can be life-threatening, making granular role-based controls and strict inventory verification critical.',
    solution:
      'Engineered a unified MERN platform featuring strict role-based access control (RBAC) across four operational roles (Admin, Hospital, Nurse, Laboratory). The application enforces an audited 11-step pipeline ensuring blood is only added to inventory after passing clinical laboratory testing and that hospital requests undergo automated compatibility validation before dispatch.',
    engineeringHighlights: [
      'Architected a 4-role RBAC security model with JWT authentication and bcrypt password hashing across Admin, Hospital, Nurse, and Laboratory accounts.',
      'Constructed the complete 11-step operational pipeline: Nurse → Donor Registration → Eligibility Screening → Donation Collection → Laboratory Testing → Blood Bag Creation → Inventory Stocking → Hospital Request → Compatibility Check & Approval → Dispatch → Delivery Confirmation.',
      'Diagnosed and resolved critical controller-level data isolation issues, ensuring hospital inventory queries are strictly scoped by hospitalId to prevent data leakage between medical centers.',
      'Integrated Recharts dashboards for real-time stock visualization and configured pre-seeded public demo accounts for immediate stakeholder evaluation.',
    ],
    keyFeatures: [
      {
        title: 'Clinical Donor Screening',
        description:
          'Validates vital signs, hemoglobin levels, and weight against medical eligibility rules before authorizing donation collection.',
      },
      {
        title: 'Laboratory Verification & Bag Creation',
        description:
          'Enables lab technicians to verify infection markers and blood types, automatically transforming verified donations into tracked blood bags with expiration dates.',
      },
      {
        title: 'Hospital Request & Compatibility Matching',
        description:
          'Allows healthcare facilities to place urgent blood requests with automated ABO/Rh compatibility checking before administrative approval.',
      },
      {
        title: 'Dispatch & Chain of Custody',
        description:
          'Tracks transit status from blood bank departure to hospital receipt confirmation, maintaining a complete operational audit trail.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Strict Controller-Level Role Scoping',
        description:
          'Enforced role-based query scoping in the Express API controllers rather than relying on client-side filtering, guaranteeing that medical staff only access data pertinent to their hospital facility.',
      },
      {
        title: 'State Machine Driven Blood Bag Lifecycle',
        description:
          'Modeled blood bag transitions through discrete states (collected, tested, available, reserved, dispatched, delivered) to prevent race conditions during simultaneous hospital requests.',
      },
    ],
    challengesAndTradeoffs: [
      {
        title: 'Inventory Isolation Security Fix',
        description:
          'During end-to-end testing, discovered that hospital users could view cross-hospital inventory. Resolved by enforcing hospitalId constraints directly on the inventory controller query, ensuring HIPAA-aligned organizational boundary isolation.',
      },
      {
        title: 'Dispatch Pipeline Synchronization',
        description:
          'Resolved state synchronization mismatches between the admin approval queue and laboratory inventory decrementing to ensure available stock counters reflect real-world reservations.',
      },
    ],
    technologies: [
      {
        category: 'Frontend',
        items: ['React 19', 'TypeScript', 'Vite', 'React Router', 'Axios', 'Recharts', 'React Icons'],
      },
      {
        category: 'Backend & Security',
        items: ['Node.js', 'Express.js', 'JWT Authentication', 'bcryptjs', 'Role-Based Access Control (RBAC)'],
      },
      {
        category: 'Database',
        items: ['MongoDB', 'Mongoose ODM'],
      },
    ],
    featuredTechnologies: ['React 19', 'TypeScript', 'Node.js', 'Express.js', 'MongoDB', 'JWT Authentication'],
    githubUrl: 'https://github.com/nepthalema-cloud/blood-bank-management-system',
    liveUrl: 'https://blood-bank-management-system-snowy.vercel.app/',
    deploymentType: 'Verified Live Deployment',
    imageUrl: '/projects/blood-bank.png',
    imageAlt: 'Blood Bank Management System live interface preview showing connected donor and laboratory operations workspace',
  },
  {
    slug: 'traffic-management',
    title: 'Intelligent Traffic Management System',
    subtitle: 'Real-Time Computer Vision Vehicle Detection & Scalable Multi-App Backend',
    domain: 'Intelligent Transportation Systems & Computer Vision',
    role: 'Full-Stack Developer / Software Engineer',
    summary:
      'A modular traffic analytics platform combining a 13-domain Django REST Framework backend with an automated computer vision service utilizing YOLOv8 and BoT-SORT tracking to analyze vehicular flow from video and RTSP streams.',
    problem:
      'Urban road management requires real-time insight into vehicle counts, congestion bottlenecks, and traffic flow patterns. Traditional fixed-schedule signals and manual monitoring cannot dynamically adapt to fluctuations in road density across modern road networks.',
    solution:
      'Developed a scalable architecture decoupling video stream ingestion and vehicle detection from the central management platform. The AI service processes RTSP and recorded feeds with YOLOv8, tracks individual vehicles via BoT-SORT, and feeds analytical data back into a multi-app Django backend and interactive React dashboard.',
    engineeringHighlights: [
      'Built a modular Django REST Framework backend partitioned into 13 discrete domain apps (accounts, roads, traffic, cameras, analytics, audit, core, drivers, fines, notifications, organizations, violations).',
      'Implemented real-time vehicle detection and persistent tracking in Python using YOLOv8 (Ultralytics) and BoT-SORT, accurately classifying cars, motorcycles, buses, and trucks.',
      'Created stream ingestion workers with OpenCV supporting both pre-recorded video analysis and live RTSP camera feeds.',
      'Configured Docker Compose orchestration managing the Django API server, PostgreSQL database, Redis caching, and Celery asynchronous task queues.',
      'Maintained verified architectural scope: deliberately focused on the functional YOLOv8 detection and tracking pipeline, treating conceptual OCR and facial recognition modules as future roadmap extensions.',
    ],
    keyFeatures: [
      {
        title: 'YOLOv8 & BoT-SORT Vehicle Tracking',
        description:
          'Processes camera feeds to detect multi-class vehicles with bounding box normalization and persistent track IDs across frame sequences.',
      },
      {
        title: '13-Domain Backend Architecture',
        description:
          'Decoupled Django applications providing structured endpoints for road segment configuration, camera management, violation records, and analytics.',
      },
      {
        title: 'Stream Ingestion & RTSP Handling',
        description:
          'High-throughput video frame reader supporting RTSP streams, simulated feeds, and batch video processing.',
      },
      {
        title: 'Asynchronous Task Orchestration',
        description:
          'Leverages Celery and Redis to offload heavy analytical aggregations and background event logging from the primary web request cycle.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Microservice Separation for Vision Workloads',
        description:
          'Separated the Python computer vision workers from the Django web service so heavy GPU/CPU video processing does not impede web API responsiveness.',
      },
      {
        title: 'BoT-SORT over Simple Euclidean Tracking',
        description:
          'Adopted BoT-SORT tracking with Kalman filters to maintain accurate vehicle identities even during temporary occlusions at crowded intersections.',
      },
    ],
    challengesAndTradeoffs: [
      {
        title: 'Verified Implementation vs. Speculative Scope',
        description:
          'Carefully constrained claims to verified working code: while earlier project proposals discussed OCR and driver face recognition, source code audit confirms vehicle detection and tracking as the genuine, functional AI pipeline.',
      },
      {
        title: 'Frame Rate vs. Inference Latency Trade-off',
        description:
          'Tuned detection confidence thresholds (0.4) and frame skipping intervals in the video ingestion worker to balance real-time throughput with tracking accuracy.',
      },
    ],
    technologies: [
      {
        category: 'Computer Vision & AI',
        items: ['Python', 'YOLOv8 (Ultralytics)', 'BoT-SORT Tracking', 'OpenCV', 'NumPy'],
      },
      {
        category: 'Backend & Async',
        items: ['Django REST Framework', 'Celery', 'Redis', 'PostgreSQL', 'Docker Compose'],
      },
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind CSS'],
      },
    ],
    featuredTechnologies: ['Python', 'YOLOv8 (Ultralytics)', 'OpenCV', 'Django REST Framework', 'Celery', 'PostgreSQL'],
    githubUrl: 'https://github.com/nepthalema-cloud/intelligent-traffic-management-system',
    deploymentType: 'Containerized / Local System',
  },
  {
    slug: 'campus-hub',
    title: 'Campus Hub',
    subtitle: 'Full-Stack University Student Networking & Collaborative Platform',
    domain: 'Social Networking & Student Collaboration',
    role: 'Full-Stack Developer / Software Engineer',
    summary:
      'A full-stack student networking platform engineered to connect university peers through verified academic profiles, department-based directory search, connection workflows, and direct peer-to-peer messaging.',
    problem:
      'University students often lack a dedicated, internal directory to find peers with shared academic interests, study groups, or project goals, relying instead on fragmented external social apps that lack academic context.',
    solution:
      'Engineered a tailored academic networking platform featuring a secure Django 6 REST Framework backend and React 19 frontend. Students create enriched profiles, search peer directories with specialized filters, exchange connection requests, and communicate through direct messaging.',
    engineeringHighlights: [
      'Developed a modern full-stack web app utilizing Django 6, Django REST Framework, React 19, and Vite 8.',
      'Implemented session-based authentication with CSRF protection, secure cookie handling, and cross-origin resource sharing (CORS) configurations.',
      'Built custom student profiles with Cloudinary media storage integration for profile image uploads and management.',
      'Constructed a directory search engine allowing filtering by department, graduation year, and academic interests.',
      'Established a dual-repository workflow maintaining the primary production codebase alongside a staging environment on Vercel for pre-release validation.',
    ],
    keyFeatures: [
      {
        title: 'Academic Student Profiles',
        description:
          'Structured profiles highlighting university department, interests, bio, and Cloudinary-hosted profile pictures.',
      },
      {
        title: 'Directory Search & Filtering',
        description:
          'Fast search across the student body with multi-parameter filtering to quickly locate peers for project collaboration.',
      },
      {
        title: 'Connection Request Workflows',
        description:
          'Two-way connection lifecycle enabling students to send, accept, reject, or withdraw collaboration invites.',
      },
      {
        title: 'Direct Peer Messaging',
        description:
          'Direct messaging system between approved connections for coordinating academic work and campus projects.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Session Authentication with Strict CSRF',
        description:
          'Selected Django session authentication over stateless JWTs to utilize built-in session security and browser cookie protection for user states.',
      },
      {
        title: 'Cloudinary Cloud Media Storage',
        description:
          'Offloaded student image uploads to Cloudinary storage to keep the backend server stateless and optimized for cloud hosting.',
      },
    ],
    challengesAndTradeoffs: [
      {
        title: 'Accurate Database Specification',
        description:
          'Verified from repository settings that SQLite serves as the default database for development and current hosting, ensuring the portfolio accurately reflects actual technical implementation rather than unwarranted claims.',
      },
      {
        title: 'CORS & Cookie Handling in Decoupled Deployments',
        description:
          'Configured Django CORS credentials and cookie SameSite attributes to permit secure cross-domain session cookies between the Vercel frontend and Render backend.',
      },
    ],
    technologies: [
      {
        category: 'Frontend',
        items: ['React 19', 'Vite 8', 'React Router 7', 'Axios', 'React Icons'],
      },
      {
        category: 'Backend',
        items: ['Django 6', 'Django REST Framework', 'Session Authentication', 'Cloudinary Storage'],
      },
      {
        category: 'Database & Deploy',
        items: ['SQLite', 'Render (Backend)', 'Vercel (Frontend)'],
      },
    ],
    featuredTechnologies: ['React 19', 'Django 6', 'Django REST Framework', 'SQLite', 'Cloudinary Storage', 'Vite 8'],
    githubUrl: 'https://github.com/nepthalema-cloud/campus-hub',
    liveUrl: 'https://campus-hub-ruby.vercel.app/',
    deploymentType: 'Verified Live Deployment',
    imageUrl: '/projects/campus-hub.png',
    imageAlt: 'Campus Hub live student collaboration platform preview with landing portal and networking features',
    additionalRepoUrl: 'https://github.com/nepthalema-cloud/campus-hub-staging',
    additionalLiveUrl: 'https://campus-hub-staging.vercel.app/',
  },
  {
    slug: 'ai-disease-detection',
    title: 'AI Disease Detection System',
    subtitle: 'Applied Machine-Learning Multi-Condition Prediction Prototype',
    domain: 'Applied Machine Learning & Prediction',
    role: 'Applied ML Developer / Software Engineer',
    summary:
      'An applied machine-learning prediction system built with scikit-learn and Streamlit that evaluates risk indicators across four clinical conditions (Diabetes, Heart Disease, Liver Disease, and Parkinson’s Disease) using specialized classification models.',
    problem:
      'Early risk identification for complex conditions requires synthesized analysis of numerous physiological parameters. Accessible interactive prototypes allow researchers and students to explore how varying clinical markers influence predictive model outputs.',
    solution:
      'Developed an end-to-end applied ML application featuring automated data preprocessing pipelines, algorithm tuning tailored to each disease dataset, persistent model serialization with Joblib, and an interactive Streamlit UI for rapid inference.',
    engineeringHighlights: [
      'Built a modular data preprocessing pipeline handling data loading, missing value imputation, categorical encoding, and stratified data splitting.',
      'Selected and trained distinct scikit-learn algorithms tailored to specific data structures: Logistic Regression for Diabetes, Random Forest Classifiers for Heart Disease and Liver Disease, and Support Vector Classification (SVC / SVM) for Parkinson’s Disease.',
      'Serialized trained models and transformation metadata with Joblib for efficient inference in web environments.',
      'Created an intuitive Streamlit user interface featuring Plotly interactive data visualizations and multi-page parameter inputs.',
      'Maintained responsible terminology: rigorously presented as an applied machine-learning research prototype rather than a medical diagnostic system.',
    ],
    keyFeatures: [
      {
        title: 'Multi-Condition Prediction Pipeline',
        description:
          'Dedicated prediction workflows for four conditions: Diabetes (Pima dataset), Heart Disease (UCI), Liver Disease, and Parkinson’s Disease.',
      },
      {
        title: 'Algorithmic Diversity',
        description:
          'Implements Logistic Regression, Random Forest, and Support Vector Machines matching the mathematical characteristics of each disease dataset.',
      },
      {
        title: 'Interactive Risk Exploration',
        description:
          'Enables users to adjust medical inputs (e.g. glucose, blood pressure, cholesterol, vocal frequency) to observe real-time risk predictions.',
      },
      {
        title: 'Reproducible Training Scripts',
        description:
          'Self-contained Python training modules with accuracy, precision, recall, and F1-score evaluation metrics.',
      },
    ],
    technicalDecisions: [
      {
        title: 'Model Choice Grounded in Dataset Topology',
        description:
          'Selected Support Vector Machines for Parkinson’s due to high-dimensional biomedical voice measurements, while utilizing Random Forest for Heart Disease to capture complex non-linear feature interactions.',
      },
      {
        title: 'Decoupled Preprocessing Pipeline',
        description:
          'Encapsulated data transformation logic in a reusable module to ensure identical transformations during model training and real-time user inference.',
      },
    ],
    challengesAndTradeoffs: [
      {
        title: 'Ethical Framing & Responsible AI',
        description:
          'Strictly avoided calling the application a "medical diagnosis tool," clearly framing it as an educational prediction prototype with appropriate clinical disclaimers.',
      },
      {
        title: 'Handling Missing Biomedical Measurements',
        description:
          'Implemented robust median and mode imputation strategies in preprocessing pipelines to prevent runtime crashes when users leave non-critical fields blank.',
      },
    ],
    technologies: [
      {
        category: 'Machine Learning',
        items: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Joblib'],
      },
      {
        category: 'Algorithms',
        items: ['Logistic Regression', 'Random Forest Classifier', 'Support Vector Machine (SVC)'],
      },
      {
        category: 'Interface & Visualization',
        items: ['Streamlit', 'Plotly'],
      },
    ],
    featuredTechnologies: ['Python', 'Scikit-learn', 'Streamlit', 'Random Forest Classifier', 'Support Vector Machine (SVC)', 'Plotly'],
    githubUrl: 'https://github.com/nepthalema-cloud/AI_Disease_Detection_System',
    liveUrl: 'https://aidiseasedetectionsystem-bvenhbn2fzw8uq98rj5hpf.streamlit.app/',
    liveStatusNote: 'Streamlit Cloud deployment (may be asleep or require wake-up upon visit)',
    deploymentType: 'Streamlit Cloud Prototype',
    imageUrl: '/projects/ai-disease-detection.png',
    imageAlt: 'AI Disease Detection System Streamlit interface preview showing multi-condition classification metrics and navigation',
  },
]
