/**
 * Featured project content. Edit this file to update the case studies.
 *
 * Screenshots:
 *   Put an approved image in /public/projects/ and set `screenshot` to that
 *   path, for example "/projects/conversa.png". Also set `screenshotAlt`.
 *   Leave `screenshot` null until the image is a real capture of the work.
 *   Do not drop in stock photos and present them as results.
 *
 * Links:
 *   Set `links.github` or `links.demo` to a public https URL.
 *   Leave them null until the URL is real. Do not invent repositories.
 *
 * Challenges:
 *   `challenges` stays null until verified notes are added. Do not guess.
 *
 * Conversa is a collaborative client project. Keep the write-up at product
 * level. Do not add private source, client data, credentials, or confidential
 * implementation details.
 */

export const projectSlugs = [
  "conversa",
  "crop-disease-prediction",
  "autoslides",
  "parking-space-detection",
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type ProjectStep = {
  title: string;
  body: string;
};

export type ProjectMetric = {
  label: string;
  value: string;
};

export type ProjectLinks = {
  github: string | null;
  demo: string | null;
};

export type FeaturedProject = {
  slug: ProjectSlug;
  title: string;
  summary: string;
  cardLabel: string;
  context: string;
  collaborative: boolean;
  technologies: readonly string[];
  problem: string;
  approach: string;
  steps: readonly ProjectStep[];
  contributions: readonly string[];
  metrics: readonly ProjectMetric[];
  resultsNote: string | null;
  challenges: readonly string[] | null;
  links: ProjectLinks;
  screenshot: string | null;
  screenshotAlt: string | null;
  accent: string;
};

const missingChallenges = null;

export const featuredProjects: readonly FeaturedProject[] = [
  {
    slug: "conversa",
    title: "Conversa — AI Chatbot Builder",
    summary:
      "A full-stack builder that lets a business create a chatbot from its own documents and website content.",
    cardLabel: "Collaborative client project",
    context:
      "Collaborative client project. I contributed across the product with a team. I did not create or own the platform alone. This page stays at product level and leaves out private source code, client data, and confidential implementation details.",
    collaborative: true,
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "Supabase",
      "PostgreSQL",
      "pgvector",
      "OpenAI API",
      "RAG",
    ],
    problem:
      "A business already has the answers in documents and on its website. A chatbot only helps if it stays on that material, and if a person can check the material before the bot treats it as knowledge.",
    approach:
      "Conversa takes documents and website content in, extracts the text, and splits it into semantic chunks. Someone reviews that knowledge before it is published. Approved text is embedded with the OpenAI API and stored in PostgreSQL with pgvector. When a question comes in, retrieval uses vector search together with keyword and hybrid retrieval, and the answer is generated from what was retrieved.",
    steps: [
      {
        title: "Ingest",
        body: "Documents and website content are brought in as the source material for a bot.",
      },
      {
        title: "Extract and chunk",
        body: "Text is extracted and divided into semantic chunks so a later search can land on a passage, not a whole file.",
      },
      {
        title: "Review",
        body: "A human-in-the-loop step checks the extracted knowledge before it is published to the chatbot.",
      },
      {
        title: "Embed",
        body: "The OpenAI API generates embeddings for the approved content.",
      },
      {
        title: "Retrieve",
        body: "PostgreSQL and pgvector store and search the vectors. Keyword search and hybrid retrieval sit alongside the vector search.",
      },
      {
        title: "Answer",
        body: "Retrieved passages feed retrieval-augmented generation, so the response is tied to the business's own content.",
      },
    ],
    contributions: [
      "Document and website content ingestion",
      "Text extraction and semantic chunking",
      "Human-in-the-loop review before knowledge is published",
      "Embedding generation with the OpenAI API",
      "Vector retrieval with PostgreSQL and pgvector",
      "Keyword and hybrid retrieval",
      "Retrieval-augmented response generation",
      "Frontend, backend, database, and authentication-related development",
    ],
    metrics: [],
    resultsNote:
      "No public metrics are listed. This was client work, and private results are not shown here.",
    challenges: missingChallenges,
    links: { github: null, demo: null },
    screenshot: null,
    screenshotAlt: null,
    accent: "from-accent to-accent/0",
  },
  {
    slug: "crop-disease-prediction",
    title: "AI-Based Crop Disease Prediction",
    summary:
      "A computer vision pipeline that detects, segments, and classifies crop disease, then serves a diagnosis through Flask.",
    cardLabel: "Computer vision",
    context:
      "A computer vision application for crop disease diagnosis, from image preprocessing through a Flask interface.",
    collaborative: false,
    technologies: ["Python", "Flask", "OpenCV", "U-Net/U-Net Lite", "CNN"],
    problem:
      "Naming a disease from a photo is only part of the job. A useful tool also has to find the diseased region and support a severity reading, which means a pipeline rather than a single prediction.",
    approach:
      "The application runs three stages: detection, segmentation, and classification. OpenCV handles image preprocessing. U-Net / U-Net Lite segments the disease region. A CNN classifies the disease among nine classes. Flask wraps the pipeline so it can return a diagnosis and a severity analysis. The model was tested on a set of more than 20,000 crop images.",
    steps: [
      {
        title: "Preprocess",
        body: "OpenCV prepares the crop images before they reach the models.",
      },
      {
        title: "Detect",
        body: "The first stage of the pipeline is detection of disease in the image.",
      },
      {
        title: "Segment",
        body: "U-Net / U-Net Lite marks the disease region.",
      },
      {
        title: "Classify",
        body: "A CNN assigns one of nine disease classes.",
      },
      {
        title: "Diagnose",
        body: "Flask integrates the pipeline for diagnosis and severity analysis.",
      },
    ],
    contributions: [
      "Three-stage detection, segmentation, and classification pipeline",
      "Work with 20,000+ crop images across nine disease classes",
      "OpenCV image preprocessing",
      "Disease-region segmentation with U-Net / U-Net Lite",
      "CNN-based disease classification",
      "Flask integration for diagnosis and severity analysis",
    ],
    metrics: [
      { label: "Images", value: "20,000+" },
      { label: "Disease classes", value: "9" },
      { label: "Test accuracy", value: "85.3%" },
    ],
    resultsNote: null,
    challenges: missingChallenges,
    links: { github: null, demo: null },
    screenshot: null,
    screenshotAlt: null,
    accent: "from-accent-2 to-accent-2/0",
  },
  {
    slug: "autoslides",
    title: "AutoSlides — AI Presentation Generator",
    summary:
      "An application that turns a research proposal document into a structured PowerPoint presentation.",
    cardLabel: "Document to slides",
    context:
      "A Flask application that processes a research proposal and generates a presentation with help from the Gemini API.",
    collaborative: false,
    technologies: ["Python", "Flask", "Gemini API", "Document Processing"],
    problem:
      "A research proposal is already written. Making a presentation from it means pulling out the structure and a sensible slide order. Doing that by hand for every document is slow, repetitive work.",
    approach:
      "AutoSlides uses a Flask backend to take the document in and coordinate the workflow. Document processing reads the proposal. The Gemini API helps structure the content. The application then generates the PowerPoint. Prompt text, slide templates, and deployment details were not recorded for this page, so they are not described.",
    steps: [
      {
        title: "Take the document in",
        body: "The research proposal is the source. Flask receives the request and coordinates the rest of the workflow.",
      },
      {
        title: "Process and structure",
        body: "Document processing reads the proposal. The Gemini API assists with organizing that material into presentation content.",
      },
      {
        title: "Generate the deck",
        body: "The application builds a PowerPoint from the structured content.",
      },
    ],
    contributions: [
      "Flask backend for requests and application workflow",
      "Document processing for research proposal files",
      "Gemini API integration for AI-assisted content structuring",
      "Automated PowerPoint generation",
      "A workflow from source document to presentation content",
    ],
    metrics: [],
    resultsNote:
      "The result is a generated presentation. No accuracy, timing, or quality scores were supplied, so none are shown.",
    challenges: missingChallenges,
    links: { github: null, demo: null },
    screenshot: null,
    screenshotAlt: null,
    accent: "from-accent to-accent-2",
  },
  {
    slug: "parking-space-detection",
    title: "Parking Space Detection Using YOLOv8",
    summary:
      "A YOLOv8 detector for parking spaces, trained and evaluated on annotated images from the PKLot dataset.",
    cardLabel: "Undergraduate study",
    context:
      "Undergraduate experimental study. The same work is a computer vision project trained in Google Colab on the PKLot dataset.",
    collaborative: false,
    technologies: ["Python", "YOLOv8", "Computer Vision", "Google Colab"],
    problem:
      "Detecting parking spaces in an image is an object-detection problem: mark the spaces, then know how reliable the detector is and how long an inference takes.",
    approach:
      "I prepared and annotated 8,500+ images from the PKLot dataset, trained a YOLOv8 model in Google Colab, and evaluated it with precision, recall, F1-score, and mAP. The headline figures recorded here are mAP@0.5 and inference time. The model was also looked at for real-time parking detection.",
    steps: [
      {
        title: "Data",
        body: "8,500+ images from the PKLot dataset were prepared and annotated for parking-space detection.",
      },
      {
        title: "Training",
        body: "A YOLOv8 object-detection model was trained in Google Colab.",
      },
      {
        title: "Evaluation",
        body: "The model was evaluated with precision, recall, F1-score, and mAP, and inference time was measured.",
      },
    ],
    contributions: [
      "Prepared and annotated 8,500+ PKLot images",
      "Trained and evaluated a YOLOv8 parking-space detector",
      "Evaluation with precision, recall, F1-score, and mAP",
      "Analysis of the model for real-time parking detection",
    ],
    metrics: [
      { label: "Annotated images", value: "8,500+" },
      { label: "mAP@0.5", value: "≈ 0.995" },
      { label: "Inference time", value: "≈ 30 ms" },
    ],
    resultsNote:
      "Precision, recall, and F1-score were part of the evaluation. Separate numbers for those three were not recorded here, so only mAP@0.5 and inference time are shown.",
    challenges: missingChallenges,
    links: { github: null, demo: null },
    screenshot: null,
    screenshotAlt: null,
    accent: "from-accent-2 to-accent",
  },
];

export function getProject(slug: string) {
  return featuredProjects.find((project) => project.slug === slug);
}

export function getOtherProjects(slug: string) {
  return featuredProjects.filter((project) => project.slug !== slug);
}
