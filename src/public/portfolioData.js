/**
 * Central Portfolio Data Store
 * Sourced directly from your actual projects and background.
 */

export const PROFILE_DATA = {
  name: "Ishu Nani",
  role: "Indie Game Developer & Gameplay Programmer",
  statusBadge: "Available for Collaborations",
  location: "India",
  headline: "Crafting physics-driven, responsive games & immersive 3D mechanics.",
  subheadline: "Specializing in Rigidbody physics systems, combat feel, custom gameplay loops, and scalable architecture using Unity & C#.",
  stats: [
    { value: "3D", label: "Physics & Combat Systems" },
    { value: "Unity", label: "C# Core Architecture" },
    { value: "100%", label: "Indie Craftsmanship" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Saibharath548" },
    { name: "Email", url: "mailto:hello@ishunani.dev" }
  ]
};

export const PROJECT_CATEGORIES = ["All", "Physics Games", "FPS & Combat", "Prototypes"];

export const PROJECTS_DATA = [
  {
    id: "magnet-maniac",
    title: "Magnet Maniac",
    category: "Physics Games",
    timeline: "2024",
    tags: ["3D", "Physics", "Platformer", "Unity", "C#"],
    shortDesc: "Polarity-based physics game centered on attraction and repulsion mechanics, where players strategically switch magnetic forces.",
    fullDesc: "Magnet Maniac is a 3D sci-fi platformer built around a polarity-switching magnetic sphere, combining physics-driven movement with environmental puzzle-solving.\n\nThe player controls a magnetic ball capable of switching between positive polarity, negative polarity, and a neutral state with no magnetic influence.\n\nCore gameplay revolves around manipulating attraction and repulsion forces to traverse levels and overcome obstacles. Magnetic objects within the environment are visually highlighted according to their polarity, providing immediate feedback and encouraging strategic decision-making. By switching polarity at the right moment, the player can pull toward surfaces, repel from hazards, or disable magnetic influence entirely to maintain control.\n\nThe movement system is fully Rigidbody-based, relying on physics forces rather than scripted motion. This creates dynamic, emergent interactions where momentum, timing, and spatial awareness play a key role in both platforming and puzzle-solving challenges.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "fps-combat",
    title: "FPS Combat Mechanics",
    category: "FPS & Combat",
    timeline: "2024",
    tags: ["3D", "FPS", "Raycast", "AI", "Unity", "C#"],
    shortDesc: "First-person mechanics prototype focused on movement, shooting systems, combat loops, and core FPS fundamentals.",
    fullDesc: "A 3D first-person shooter focused on building a satisfying and responsive shooting experience. The core goal is to refine combat feel by emphasizing impact feedback, weapon responsiveness, and fluid player control.\n\nThe shooting system is implemented using raycast-based hit detection, ensuring precise and immediate shot registration. Visual feedback is reinforced through particle effects and hit responses, creating a strong sense of impact with each successful shot. A reload system is integrated to support pacing and engagement during combat sequences.\n\nEnemy encounters feature zombie-style swarm behavior, encouraging spatial awareness and sustained shooting flow. Player movement is currently built around clean and responsive WASD controls, prioritizing stability and consistency to support the core shooting mechanics.\n\nThis project focuses on system clarity, combat feedback loops, and scalable architecture that can later expand into more advanced mechanics, enemy behaviors, and level design.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

export const CORE_ARSENAL = [
  {
    title: "Rigidbody Physics & Movement",
    desc: "Crafting non-scripted, emergent physics movement, dynamic forces, and gravity/polarity mechanics.",
    skills: ["Rigidbody Physics", "Polarity Mechanics", "Momentum Systems"]
  },
  {
    title: "FPS Combat & Gunplay Loops",
    desc: "Raycast hit detection, particle impact effects, reload cycles, and responsive player controllers.",
    skills: ["Raycast Shooting", "Weapon Feedback", "Combat Pacing"]
  },
  {
    title: "AI & Swarm Behaviors",
    desc: "Designing spatial-aware swarm encounters, state machines, and dynamic enemy pressure loops.",
    skills: ["Swarm AI", "State Machines", "Spatial Nav"]
  },
  {
    title: "Core C# & Unity Architecture",
    desc: "Decoupled, modular code architecture ready for scalable features and level expansions.",
    skills: ["C# Architecture", "Modular Systems", "Performance"]
  }
];

export const EXPERIENCE_JOURNEY = [
  {
    period: "2024 - Present",
    role: "Indie Game Developer",
    org: "Independent Game Studio",
    details: "Developing physics-driven and shooter mechanics prototypes in Unity, refining player feel, combat feedback, and modular gameplay systems."
  }
];
