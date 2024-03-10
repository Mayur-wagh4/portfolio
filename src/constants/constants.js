import {
  backend,
  carrent,
  creator,
  css,
  html,
  javascript,
  jobit,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  threejs,
  tripguide
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Bio",
    },
    {
      id: "work",
      title: "Artifact",
    },
    {
      id: "skill",
      title: "Expertise",
    },
    {
      id: "contact",
      title: "Let's Connect",
    },

  ];
  
  const services = [
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Front End  Developer",
      icon: tailwind,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Full Stack Developer  ",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
   
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },   
  ];
  
  const experiences = [
    {
      title: "Web Developer Intern",
      company_name: "Jio Platforms Limited (JPL)",
      icon: "none",
      iconBg: "#383E56",
      date: "Nov 2023 - January 2024",
      points: [
        "Project I:Inventory Management System",
        "Description: Engineered an ingenious inventory management solution that revolutionized efficiency, seamlessly integrating Excel files for unparalleled performance.",
        "Tech Used:React,Dropzone",
        "Features:",
        "Implemented a user-friendly React frontend for intuitive navigation.",
        "Enabled bulk data import from Excel files using Dropzone for seamless integration"
      ],
    },
  
    {
      title: "Freelance Web Developer",
      company_name: "Get To Hire",
      icon: "none",
      iconBg: "#383E56",
      date: "December 2023 - Jan 2024",
      points: [
        "Project: GetToHire.com",
        "Redefined the restaurant hiring landscape with my cutting-edge platform, streamlining processes and fostering connections between restaurants and top talent in the hospitality industry",
        "Tech Used:Express,MongoDB,Node",
        "Crafted three distinct dashboards: Admin, Restaurant, and Candidate. Candidates can seamlessly manage their profiles, while restaurant owners have the convenience of posting jobs and updating their profiles.",
     " Additionally, the admin dashboard serves as a centralized hub, offering access to both restaurant and candidate management functionalities, ensuring smooth addition and oversight of both entities."
      ],
    },
    {
      title: "Web Developer Intern",
      company_name: "Jio Platforms Limited (JPL)",
      icon:"none",
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Project II:Web Scraping Application",
        "Description: Designed and developed a bespoke web scraping application focused on precise data extraction and processing.",
      "Tech Used: React, Axios, Cheerio.",
      "Features:",
      "Employed React to craft engaging frontend experience",
      "Axios for efficient HTTP requests handling, and" ,
      "Cheerio for powerful web scraping functionalities"
      ],
    },

    {
      title: "Freelance Web Developer",
      company_name: "Get 4 Grow",
      icon: "none",
      iconBg: "#383E56",
      date: "December 2023 - Jan 2024",
      points: [
        "Project: Get4Grow.com",
        "Designed a website focused on elevating restaurants to success stories through a range of specialized services.",
        " By conducting thorough audits, they identify inefficiencies and enhance performance, enabling restaurants to thrive in today's competitive landscape.",
        "Tech used:It boasts a dynamic frontend powered by React and styled with the elegance of Tailwind CSS.",
        "Integrated EmailJS to efficiently collect email addresses from users and customers",



      ],
    },
  ];
  
  const Skills = [
    // Advanced Level
    { name: "React", level: "intermediate" },
    { name: "MongoDB", level: "intermediate" },
    { name: "Three JS", level: "beginner" },
    { name: "Node.js", level: "beginner" },
    { name: "Express", level: "intermediate" },
    { name: "Git", level: "intermediate" },
  ];
  
  const projects = [
    {
      name: "Get To Hire ",
      description:"Restaurant Hiring Platform",

      tags: [
        {
          name: "Express",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Mayur-wagh4/",
      website_link:"https://gettohire.com/"
    },
    {
      name: "Personal Portfolio",
      description:
      " Personal Portfolio build With  Three Js ",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three Js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Mayur-wagh4/",

      website_link:"https://gettohire.com/"

    },
    {
      name: "Get 4 Grow",
      description:
        "Restaurant Solutions Provider",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
       
      ],
      image: tripguide,
      source_code_link: "https://github.com/Mayur-wagh4/",

      website_link:"https://get4grow.com/"

    },
  ];
  
  export { Skills, experiences, projects, services, technologies };

