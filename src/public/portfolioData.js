/**
 * Central Portfolio Data Store
 * Controls content for Profile, Hero, Bento Projects, Services & Resume.
 */

export const PROFILE_DATA = {
  name: "Ishu Nani",
  role: "Indie Game Developer & Creative Technologist",
  statusBadge: "Available for Collaborations",
  location: "India",
  headline: "Crafting immersive, highly responsive games & interactive digital experiences.",
  subheadline: "Specializing in gameplay programming, technical art, custom physics, and modern web integrations using Unity, C#, and JavaScript.",
  stats: [
    { value: "15+", label: "Completed Projects" },
    { value: "4+", label: "Years Experience" },
    { value: "100%", label: "Indie Craftsmanship" }
  ],
  socials: [
    { name: "GitHub", url: "https://github.com/Saibharath548" },
    { name: "LinkedIn", url: "https://linkedin.com" },
    { name: "Itch.io", url: "https://itch.io" }
  ]
};

export const PROJECT_CATEGORIES = ["All", "Games", "3D & VR", "Web & Interactive"];

export const PROJECTS_DATA = [
  {
    id: "proj-1",
    title: "Celestial Odyssey",
    category: "Games",
    timeline: "2024",
    tags: ["3D", "Action", "Unity", "C#"],
    shortDesc: "A high-octane 3D sci-fi adventure featuring dynamic gravity shifts and fluid combat mechanics.",
    fullDesc: "An immersive space expedition game built with Unity URP, featuring procedural environment destruction, custom volumetric lighting, and precise physics-driven character controller.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "proj-2",
    title: "Rhythm Pulse Neo",
    category: "Games",
    timeline: "2024",
    tags: ["2D", "Rhythm", "Synthwave"],
    shortDesc: "Fast-paced synthwave rhythm survival game with beat-synced particle systems and audio-reactive shaders.",
    fullDesc: "Designed with responsive input timing down to the millisecond, featuring custom spectral audio analysis and neon glassmorphism aesthetics.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "proj-3",
    title: "Aubergine Realm",
    category: "3D & VR",
    timeline: "2023 - 2024",
    tags: ["XR", "Atmospheric", "WebGL"],
    shortDesc: "Interactive surreal realm exploration prototype featuring volumetric fog and ambient audio design.",
    fullDesc: "WebGL interactive experience created to demonstrate dynamic shadow cascades, post-processing blooms, and atmospheric soundscapes in real time.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80",
    featured: true
  },
  {
    id: "proj-4",
    title: "Pixel Rogue Tactics",
    category: "Games",
    timeline: "2023",
    tags: ["2D", "Tactics", "Roguelike"],
    shortDesc: "Turn-based tactical dungeon crawler with procedurally generated levels and modular ability trees.",
    fullDesc: "Employs an A* pathfinding grid, deterministic state machine combat, and custom pixel-art animation state machine.",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "proj-5",
    title: "Aetherial Canvas",
    category: "Web & Interactive",
    timeline: "2023",
    tags: ["WebGL", "Shaders", "JavaScript"],
    shortDesc: "Experimental WebGL fluid simulation allowing real-time color field interaction in the browser.",
    fullDesc: "Utilizes custom GLSL fragment shaders simulating Navier-Stokes equations for real-time interactive fluid dynamics.",
    image: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=800&q=80",
    featured: false
  },
  {
    id: "proj-6",
    title: "Solaris Engine Tools",
    category: "3D & VR",
    timeline: "2022 - 2023",
    tags: ["Tooling", "Editor", "C#"],
    shortDesc: "A modular suite of editor extensions accelerating level design and node-based dialogue trees in Unity.",
    fullDesc: "Custom Unity editor windows with visual graph editing, automated asset pipeline baking, and JSON localization export.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    featured: false
  }
];

export const CORE_ARSENAL = [
  {
    title: "Gameplay Architecture",
    desc: "Robust, decoupled systems using state machines, event buses, and modular ScriptableObjects.",
    skills: ["C# / Unity", "Game Loops", "Physics Systems"]
  },
  {
    title: "Technical Art & Shaders",
    desc: "Crafting stylized visual identities, post-processing pipelines, custom GLSL/HLSL shaders, and particle FX.",
    skills: ["Shader Graph", "VFX Graph", "URP / HDRP"]
  },
  {
    title: "Cross-Platform & WebGL",
    desc: "Optimizing memory footprints, draw calls, and assets for silky 60fps performance across Web, PC, and Mobile.",
    skills: ["WebGL Optimization", "Mobile Performance", "Asset Bundles"]
  },
  {
    title: "Tools & Rapid Prototyping",
    desc: "Building custom in-editor tools, procedural generation algorithms, and fast game-jam turnaround workflows.",
    skills: ["Custom Inspectors", "Level Tooling", "Git Workflows"]
  }
];

export const EXPERIENCE_JOURNEY = [
  {
    period: "2023 - Present",
    role: "Lead Indie Game Developer",
    org: "Independent Studio",
    details: "Architecting original titles, managing gameplay systems, asset pipelines, and cross-platform publishing."
  },
  {
    period: "2021 - 2023",
    role: "Game Programmer & Technical Artist",
    org: "Freelance & Game Jams",
    details: "Delivered 12+ commissioned interactive prototypes, custom gameplay mechanics, and UI animations."
  }
];
