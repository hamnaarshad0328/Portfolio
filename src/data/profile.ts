export const aboutParagraphs = [
  "I'm in the final year of a BS in Computer Science at UET Lahore, and I expect to graduate in 2027. Python is where I'm most at home, especially when a problem has to be taken apart before it can be built.",
  "The work so far is full-stack applications and AI systems that have to do something concrete: answer from a company's own documents, segment a diseased region of a crop, or detect parking spaces in an image. Databases, REST APIs, retrieval-augmented generation, and computer vision have all been part of that.",
  "I'm looking for an internship where I can do this with a real team, in software engineering, backend or full-stack development, or applied AI/ML.",
] as const;

export const aboutFacts = [
  { label: "Focus", value: "Python and problem solving" },
  { label: "Building", value: "Full-stack apps and applied AI" },
  { label: "Looking for", value: "Software and AI/ML internships" },
] as const;

export const skillGroups = [
  {
    title: "Programming & Backend",
    items: ["Python", "C++", "TypeScript", "JavaScript", "Flask", "REST APIs"],
  },
  {
    title: "Frontend Development",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    title: "Databases & Tools",
    items: ["PostgreSQL", "SQL", "MongoDB", "Supabase", "pgvector", "Git", "GitHub"],
  },
  {
    title: "AI & Machine Learning",
    items: [
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "CNNs",
      "U-Net",
      "YOLOv8",
      "RAG",
      "Embeddings",
      "OpenAI API",
      "Gemini API",
    ],
  },
] as const;

export const additionalProjects = [
  {
    title: "Graph Database Management System",
    summary:
      "A graph database built around its own data model and a query processor in the style of Cypher.",
    details: [
      "Graph database architecture",
      "Data modeling",
      "Custom Cypher-like query processor",
      "Query execution and graph operations",
    ],
    technologies: ["Graph model", "Cypher-like queries"],
  },
  {
    title: "Parallel 2D Heat Diffusion",
    summary:
      "A parallel computing study of 2D heat diffusion, from a sequential solver to three parallel versions.",
    details: [
      "Sequential baseline",
      "Pthreads, OpenMP, and MPI implementations",
      "Strong and weak scaling",
      "Parallel outputs checked against the sequential run",
      "Analysis of speedup, efficiency, synchronization overhead, and memory-bandwidth bottlenecks",
    ],
    technologies: ["Pthreads", "OpenMP", "MPI"],
  },
] as const;

export const resumes = [
  {
    title: "Software / Full-Stack Resume",
    description:
      "For software, backend, and full-stack applications. Emphasizes Python, web development, APIs, and databases.",
    href: "/resumes/hamna-arshad-fullstack.pdf",
    downloadName: "Hamna_Arshad_FullStack_Resume.pdf",
    source: "HAMNA_ARSHAD_FuLLStack.pdf",
  },
  {
    title: "AI / ML Resume",
    description:
      "For AI, machine learning, and computer vision applications. Emphasizes RAG, detection, segmentation, and model evaluation.",
    href: "/resumes/hamna-arshad-ai-ml.pdf",
    downloadName: "Hamna_Arshad_AI_ML_Resume.pdf",
    source: "HAMNA_ARSHAD_AI_ML.pdf",
  },
] as const;

export const contentGaps = [
  "Approved screenshots for Conversa, crop disease prediction, AutoSlides, and parking space detection.",
  "Public GitHub repository URLs for any project that can be shared.",
  "Live demo URLs, only where a deployment is actually public.",
  "Verified engineering challenges and decisions for each featured project. These sections are blank on purpose.",
  "A production site URL. Set NEXT_PUBLIC_SITE_URL before or during Vercel deployment so canonical and Open Graph links use the real domain.",
] as const;
