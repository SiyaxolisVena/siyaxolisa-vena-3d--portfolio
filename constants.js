import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    hollard,
    reactjs,
    redux,
    tailwind,
    nodejs,
    git,
    hero,
    threejs,
    bootstrap,
  } from "../assets";
  
   const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full Stack Developer",
      icon: web,
    },
    {
      title: "React and Nodejs Developer",
      icon: mobile,
    },
    {
      title: "Web Applications Developer",
      icon: backend,
    },
    {
      title: "Interactive UI/UX Designer",
      icon: creator,
    },
  ]
  
  
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
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
  ];
  
  const experiences = [
    {
      title: "Software Developer Intern",
      company_name: "Hollard Insurance",
      icon: hollard,
      iconBg: "white",
      date: "February 2022 - January 2023",
      points: [
        "Worked closely with the design team to create visually appealing and user-friendly interfaces, receiving positive feedback from clients on the application's aesthetics and usability.",
        "Engaged in continuous learning and remained up to date with the latest technologies, incorporating new tools and frameworks into the development process.",
        "Assisted in the design and implementation of secure systems, safeguarding sensitive data, and ensuring compliance with industry standards. ",
      ],
    },
    {
      title: "Junior Software Developer",
      company_name: "Hollard",
      icon: hollard,
      iconBg: "white",
      date: "February 2023 - June 2024",
      points: [
        "Developed and maintained front-end applications using  Angular and React, adhering to best practices and ensuring an optimal user experience. ",
        "Collaborated with cross-functional teams to design and implement innovative features, contributing to the overall improvement of the application's functionality.",
        "Conducted thorough testing and debugging to identify and resolve issues, resulting in a significant increase in aplication stability and performance. ",
       
      ],
    },
  
  ];
  
  const projects = [
    {
      name: "3D Portfolio",
      description:
        "3D Portfolio is a web-based showcase featuring interactive 3D models and scenes, demonstrating expertise in 3D design and web technologies. It allows users to explore and interact with various 3D projects through intuitive controls and realistic rendering. This portfolio highlights the creator's skills in WebGL, Three.js, and responsive web development.",
      tags: [
        {
          name: "ThreeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ReactJS",
          color: "green-text-gradient",
        },
        {
          name: "tailwindCSS",
          color: "pink-text-gradient",
        },
      ],
      image: hero,
      source_code_Link: "https://github.com/SiyaxolisVena/siyaxolisa-vena-3d--portfolio",
    },
  ];
  
  export { services,navLinks, technologies, experiences, projects };