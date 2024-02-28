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
      title: "About Me",
    },
    {
      id: "work",
      title: "My Works",
    },
    {
      id: "skill",
      title: "My Skills",
    },
    {
      id: "contact",
      title: "My Contact",
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
        "Description: Developed an efficient inventory management system with Excel file integration.",
        "Tech Used: React, Dropzone.",
        "Features:",
        "Implemented a user-friendly React frontend.",
        "Enabled bulk data import from Excel files using Dropzone."
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
        "Transformed the hiring process for restaurants, creating an innovative platform.",
        "Bridged the gap between restaurants and skilled workers in the hospitality sector.",
        "Utilized a robust tech stack:",
        "MongoDB for database management.",
        "Express for streamlined server-side development.",
        "Node.js for efficient and scalable backend.",
        "AWS for secure and scalable cloud infrastructure"
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
        "Description: Crafted a web scraping application for data extraction and processing.",
      "Tech Used: React, Axios, Cheerio.",
      "Features:",
      "Utilized React for frontend development.",
      "Incorporated Axios for efficient HTTP requests." ,
      "Implemented Cheerio for web scraping capabilities."
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
        "Transformed the hiring process for restaurants, creating an innovative platform.",
        "Bridged the gap between restaurants and skilled workers in the hospitality sector.",
        "Utilized a robust tech stack:",
        "MongoDB for database management.",
        "Express for streamlined server-side development.",
        "Node.js for efficient and scalable backend.",
        "AWS for secure and scalable cloud infrastructure"
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
      description:
      "Transformed hiring process for restaurants",
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
      source_code_link: "https://github.com/Mayur-wagh4/JOBPORTAL1.git",
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
      source_code_link: "https://github.com/Mayur-wagh4/MyPortfolio.git",
      website_link:"https://gettohire.com/"

    },
    {
      name: "Get 4 Grow",
      description:
        "A comprehensive travel booking platform tha",
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
      source_code_link: "https://github.com/Mayur-wagh4/get4grow.git",
      website_link:"https://gettohire.com/"

    },
  ];
  
  export { Skills, experiences, projects, services, technologies };

