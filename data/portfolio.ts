export const portfolioData = {
  name: "Ian Sobrecaray",
  title: "Software Engineer",
  bio: "I'm a fresh BS Computer Science graduate from the University of San Carlos with professional internship experience in geospatial solutions, focused on making full-stack web applications using modern frameworks.",
  socials: {
    github: "https://github.com/ian-sobs",
    linkedin: "https://www.linkedin.com/in/ian-joseph-ilano-sobrecaray-89ba9a378",
    email: "sobrecarayianjoseph@gmail.com",
  },
  education: [
      {
        name: "University of San Carlos (College)",
        logo: "/assets/education_logo/USC_university_seal.svg",
        program: "Bachelor of Science in Computer Science",
        date_graduated: "July 3, 2026",
        certifications: ["PhilNITS Fundamental IT Engineer certified (Oct 2024)", "CISCO CCNA and Cybersecurity Certified"],
      },
      {
        name: "Caraga Regional Science High School (Senior High School)",
        logo: "/assets/education_logo/crshs_logo.jpeg",
        program: "STEM Strand",
        date_graduated: "June, 2022",
        certifications: []
      }
    ],
  experience:[
    {
      company_name: "Navagis, Inc.",
      role: "Solutions Developer intern",
      responsibilities: [
        "Utilized Google Maps geospatial tools to construct custom map layers, defining spatial boundaries through vector shapes (polygons and polylines) for location-based visualization for the core internship project.",
        "Utilized PostgreSQL with PostGIS extensions to perform geospatial data manipulation, querying, and spatial analysis.",
        "Designed and implemented RESTful APIs to handle data processing for the core internship project."
      ]
    }
  ],
  prog_lang: [
    {
      name: "C",
      frameworks: []
    }, {
      name: "Java",
      frameworks: []
    }, {
      name: "Javascript",
      frameworks: ["React", "NextJS", "NodeJS"]
    }, {
      name: "Python",
      frameworks: []
    }
  ],
  databases: [
    "PostgreSQL", "MySQL"
  ],
  projects: [
    {
      title: "Project One Title",
      description: "A full-stack web application built to solve a specific problem. Highlight key features and performance improvements here.",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"],
      githubUrl: "https://github.com/yourusername/project-one",
      liveUrl: "https://project-one.com",
    },
    {
      title: "Project Two Title",
      description: "An intuitive web interface designed for seamless user interaction and responsive performance across all devices.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/yourusername/project-two",
      liveUrl: "https://project-two.com",
    },
  ],
};