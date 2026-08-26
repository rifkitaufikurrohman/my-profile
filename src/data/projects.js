import masdasamImg from "../assets/masdasam.png";
import fintrackImg from "../assets/Fintrack.png";

export const projects = [
  {
    id: 1,
    title: "Masdasam",
    // image:"/masdasam.png",
    image: masdasamImg,
    description: "Masdasam is a web-based waste data management application designed for Community Self-Help Groups (KSM) in Banyumas Regency. The application aims to address record-keeping issues that have historically resulted in inaccurate data, difficulties in verification, and delays in the reporting process.",
    techStack: [
      'ReactJS',
      'TailwindCSS',
      'Supabase'
    ],
    LinkDemo: "#"
  },
   {
    id: 2,
    title: "Fintrack",
    // image:"/masdasam.png",
    image: fintrackImg,
    description: "FinTrack is a web-based personal finance management application designed to help users track and organize their daily income and expenses. The application aims to address financial record-keeping issues that have historically resulted in unmonitored spending, difficulties in budget allocation, and a lack of clear monthly financial insights.",
    techStack: [
      'ReactJS',
      'Typescript',
      'TailwindCSS',
      'PostgreSQL'
    ],
    LinkDemo: "https://fintrackzz.vercel.app/"
  },
  
];

