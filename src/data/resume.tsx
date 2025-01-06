import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Yash Shrivas",
  initials: "YS",
  url: "https://dillion.io",
  location: "Raipur Chhattisgarh",
  locationLink: "https://www.google.com/maps/place/korba",
  description:
    "Engineer turned builder of ideas. Love helping people and sharing my journey on Twitter. Let’s connect!",
  summary:
    "I am **Yash Shrivas**, a recent graduate with a Bachelor of Technology in Information Technology from Bhilai Institute of Technology, India. As a **Software Developer**, I enjoy both [**frontend and backend**](https://github.com/YashkShrivas4491) development equally. And I love to contribute in **Open-Source** development , and I am always eager to learn new things , I write [**Technical Blogs**](https://hashnode.com/@YashkShrivas4491) and I am a **Public Speaker**.",
  avatarUrl: "/me1.jpg",
  skills: [
    "React",
    "C++",
    "Node.js",
    "JavaScript",
    "Postgres",
    "MongoDB",
    "AWS",
    "Docker",
    "ExpressJS",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "yashkshrivas1234@gmail.com",
    tel: "+91 9301454491",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/YashkShrivas4491",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/yash-kumar-shrivas-98a759126",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/YashKumarS4491",
        icon: Icons.x,

        navbar: true,
      },
      // Youtube: {
      //   name: "Youtube",
      //   url: "https://dub.sh/dillion-youtube",
      //   icon: Icons.youtube,
      //   navbar: true,
      // },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "KreupAI Technology LLC",
      href: "https://wotsabot.ai/",
      badges: [],
      location: "Remote",
      title: "Backend Developer",
      logoUrl: "/kreupai.jpeg",
      start: "Jan 2025",
      end: "Present",
    }
    ,
    {
      company: "KreupAI Technology LLC",
      href: "https://wotsabot.ai/",
      badges: [],
      location: "Remote",
      title: "Backend Developer Intern",
      logoUrl: "/kreupai.jpeg",
      start: "Aug 2024",
      end: "Dec 2024",
      description: [
        "- Developed and maintained robust backend systems for the **CRM Management** module, contributing to effective software solutions.",
        "- Designed and implemented **20+ APIs** using Express and MongoDB, including CRUD operations and email validation.",
        "- Led the integration of **Node.js**, **MongoDB**, **Express.js**, and **JWT**, achieving a **15%** performance improvement",
      ],
      links: [
        {
          type: "Website",
          href: "https://example.com",
          icon: <span>🌐</span>,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/1b9hZmSxhZYzoUU0JR5ugibji9mjDnMMi/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
    {
      company: "GirlScript Foundation",
      badges: [],
      href: "https://gssoc.girlscript.tech/",
      location: "Remote",
      title: "OSS Mentor",
      logoUrl: "/girlscriptsoc_logo.jpeg",
      start: "May 2024",
      end: "July 2024",
      description: [
        "- I taught students about **open-source** basics, introduced them to **Git and GitHub**",
        "- Guided them on assigning issues effectively—concise and impactful!",
      ],
      links: [
        {
          type: "Website",
          href: "https://gssoc.girlscript.tech/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      company: "Microsoft",
      href: "https://www.foundit.in/microsoft",
      badges: [],
      location: "Remote",
      title: "Future Ready Talent Program",
      logoUrl: "/download.png",
      start: "May 2022",
      end: "Sep 2022",
      description: [
        "- Learned About Cloud **Azure Cloud Basics** and how to get started with Azure.",
        "- Skills :- Microsoft Azure service like Cognitive Service, AI etc.",
        "- Deployed Travel application using **Azure Web-Static Service**.",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.foundit.in/microsoft/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Letter of Recommendation",
          href: "https://drive.google.com/file/d/18t7GBaRO01PXqQv0KYv-y4Q40M6P05AY/view?usp=sharing",
          icon: <Icons.email className="size-3" />,
        },
      ],
    },
    {
      company: "Internshala",
      href: "https://internshala.com/",
      badges: [],
      location: "Remote",
      title: "Android Developer Apprenticeship",
      logoUrl: "/internshala_logo.jpeg",
      start: "Aug 2021",
      end: "Oct 2021",
      description: [
        "- Successfully completed an **8-week online certified training** on Android App Development.",
        "- Developed a **ApnaKhana App** using **Android Studio** and **Kotlin**.",
      ],
    },
  ],
  education: [
    {
      school: "Bhilai Institute of Technology , Durg",
      href: "https://bitdurg.ac.in/",
      degree:
        "Bachelor's Degree of Technology (Information Technology) | 8.91 CGPA",
      logoUrl: "/bit.png",
      start: "2019",
      end: "2023",
    },
    {
      school: "Kendriya Vidyalay No 3, Korba, Kusmunda",
      href: "https://no3korba.kvs.ac.in/",
      degree: "Senior Secondary (CBSE) | XII - 80%",
      logoUrl: "/kv.jpeg",
      start: "2018",
      end: "2019",
    },
    {
      school: "Kendriya Vidyalay No 3, Korba, Kusmunda",
      href: "https://no3korba.kvs.ac.in/",
      degree: "Higher Secondary (CBSE) | X - 85.6%",
      logoUrl: "/kv.jpeg",
      start: "2016",
      end: "2017",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chat-space-frontend-gamma.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Developed a real-time chat application using React and Vite, integrated with Socket.IO for real-time messaging capabilities. The application allows users to join chat rooms, send and receive messages instantly, and provides a seamless communication experience with features such as user notifications, message display, and room management.",
      technologies: [
        "ReactSJ",
        "Websocket",
        "TailwindCSS",
        "MaterialUI",
        "NodeJS",
        "ExpressJS",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat-space-frontend-gamma.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/YashkShrivas4491/ChatSpace_Frontend",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/chat.png",
      video: "/public/chat.png",
    },
    {
      title: "Ecom Logistic",
      href: "https://ecom-urban-store.vercel.app/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Developed Urban Store, a responsive React-based e-commerce web application that improved initial loading times by 10% through lazy loading and integrated dummy API data for dynamic product details. Enhanced user experience and performance across various devices.",
      technologies: ["React.js", "HTML", "CSS"],
      links: [
        {
          type: "Website",
          href: "https://ecom-urban-store.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/YashkShrivas4491/ecom_UrbanStore",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ecom.png",
    },
  ],
  hackathons: [
    {
      title: "Jaipur IT Day Hackathon 2023",
      dates: "March 19th Mar - 21th Mar, 2023",
      location: "Jaipur Rajasthan India",
      description:
        "VizQues is a simple and effective platform for students to visualize questions and get personalized assessments for K-12 classes. With VizQues, students can easily visualize questions and get detailed feedback on their progress.",
      image: "/itday.jpeg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/AkshaySharmaDEV/VizQues",
        },
      ],
    },
    {
      title: "Global Hack Week Hackathon",
      dates: "Jan 7 - 4th, 2021",
      location: "Remote",
      description:
        "Developed web application for Global Hack WeekA beginner's first hackathon is an exciting opportunity to explore coding, collaborate on creative projects, and learn from peers and mentors. Focus on a simple idea, ask for help when needed, and enjoy the experience of building and learning!",
      image: "/mlh.png",
      links: [
        {
          title: "Website",
          icon: <Icons.globe className="size-3" />,
          href: "https://ghw.mlh.io/",
        },
      ],
    },
  ],
  achievements: [
    {
      title: "Jaipur Hackathon IT Day 2023",
      dates: "March 2023",
      location: "Jaipur Govt. Eng College",
      image: "/jpr-hack.jpg",
    },
    {
      title: "Hackathon",
      dates: "March 2023",
      location: "Jaipur Govt. Eng College",
      image: "/hiteshsir-hack.jpg",
    },
    {
      title: "Github Education MeetUp",
      dates: "July 2022",
      location: "Hyderbad",
      image: "/hyd-github.jpeg",
    },
    {
      title: "Github Education MeetUp",
      dates: "July 2022",
      location: "Hyderbad",
      image: "/hyd.jpg",
    },
  ],
} as const;
