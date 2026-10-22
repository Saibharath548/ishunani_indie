/**
 * Central Portfolio Data Store
 * Sourced directly from your actual projects and background.
 */

export const PROFILE_DATA = {
  name: "Ishu Nani",
  role: "Game Programmer | Unity",
  avatar: "./Pics/My%20Pic_2.jpeg",
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

export const PROJECT_CATEGORIES = ["All", "Physics Games", "FPS & Combat", "Arcade & Speed"];

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
  },
  {
    id: "bubble-rush",
    title: "Bubble Rush",
    category: "Arcade & Speed",
    timeline: "2024",
    tags: ["Physics", "Arcade", "Particle VFX", "Unity", "C#"],
    shortDesc: "High-octane physics arcade game focused on rapid bubble chain reactions, dynamic velocity management, and escalating speed loops.",
    fullDesc: "Bubble Rush is an energetic physics-driven arcade game challenging player reflexes through rapid motion and explosive chain reactions.\n\nPlayers navigate through intense, escalating bubble fields where bouncing, bursting, and combining specialized elements grants exponential speed multipliers and energy surges. The core mechanics prioritize momentum preservation, split-second trajectory calculations, and satisfying tactile feedback.\n\nBuilt in Unity with custom C# physics loops, Bubble Rush incorporates reactive particle VFX systems, dynamic audio-visual hit feedback, and responsive arcade controls designed for addictive replayability.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "no-time-rush",
    title: "No Time Rush",
    category: "Arcade & Speed",
    timeline: "2024",
    tags: ["3D", "Time Attack", "Parkour", "Unity", "C#"],
    shortDesc: "Adrenaline-fueled 3D time-attack platformer where time is the player's health, ammunition, and most dangerous obstacle.",
    fullDesc: "No Time Rush is a precision 3D time-attack runner where the clock is your only currency and your most lethal adversary.\n\nPlayers sprint, vault, slide, and wall-run across intricate sci-fi obstacle corridors. Every millisecond counts as time steadily drains; collecting chronos-shards and hitting precision parkour checkpoints replenishes vital seconds while penalizing miscalculations.\n\nEngineered in Unity using kinematic velocity math, custom character controllers, dynamic checkpoint respawns, and tight collision tuning optimized for competitive speedrunning and flow-state movement.",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    featured: true
  }
];

export const GALLERY_DATA = [
  {
    id: "gal-1",
    title: "Magnet Maniac - Polarity Field Simulation",
    tag: "Physics Engine",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-2",
    title: "FPS Combat - Raycast Gunplay & Recoil",
    tag: "Combat Mechanics",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-3",
    title: "Bubble Rush - Particle Burst FX & Chain Reactions",
    tag: "Arcade Systems",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-4",
    title: "No Time Rush - 3D Cyber Parkour Obstacle Track",
    tag: "Time Attack",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-5",
    title: "Zombie Swarm AI - NavMesh State Flow",
    tag: "AI Systems",
    image: "https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "gal-6",
    title: "Custom Shaders & Dynamic Impact VFX",
    tag: "Tech Art",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80"
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
