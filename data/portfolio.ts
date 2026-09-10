const isProduction = process.env.NODE_ENV === 'production';
const basepath = isProduction ? "/portfolio" : "";

export const portfolioData = {
  name: "Ian Sobrecaray",
  title: "Software Engineer",
  bio: "I'm Ian Sobrecaray, a fresh BS Computer Science graduate from the University of San Carlos with professional internship experience in geospatial solutions, focused on making full-stack web applications using modern frameworks.",
  socials: [
    {
      name: "Github",
      url: "https://github.com/ian-sobs",
      icon: `${basepath}/assets/social_icons/github-svgrepo-com.svg`
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/ian-joseph-ilano-sobrecaray-89ba9a378",
      icon: `${basepath}/assets/social_icons/linkedin-svgrepo-com.svg`
    },
    {
      name: "email",
      url: "",
      icon: `${basepath}/assets/social_icons/gmail-svgrepo-com.svg`
    }
  ],
  education: [
      {
        name: "University of San Carlos (College)",
        logo: `${basepath}/assets/education_logo/USC_university_seal.svg`,
        program: "Bachelor of Science in Computer Science",
        date_graduated: "July 3, 2026",
        certifications: ["PhilNITS Fundamental IT Engineer certified (Oct 2024)", "CISCO CCNA and Cybersecurity Certified"],
      },
      {
        name: "Caraga Regional Science High School (Senior High School)",
        logo: `${basepath}/assets/education_logo/crshs_logo.jpeg`,
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
      frameworks: ["React", "Next.js", "NodeJ.js"]
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
      title: "Dormies",
      description: "A university Information Management 2 and Web Development 2 group project, Dorimies is a dormitory management system made to make dorm hunting easier, especially for students.",
      roles: [
        "Architected and built a responsive user interface using NextJS and Tailwind CSS to streamline room bookings and student tracking.",
        "Designed the relational backend architecture using MySQL.",
      ],
      tags: ["Next.js", "Tailwind CSS", "MySQL"],
      githubUrl: "https://github.com/ian-sobs/IM2_webDev2_project.git",
      liveUrl: "",
    },
    {
      title: "Kuripot",
      description: "A university group project for the App Development class. Kuripot is a finance tracker web app.",
      roles: [
        "Engineered the backend server architecture utilizing ExpressJS and PostgreSQL."
      ],
      tags: ["React", "Tailwind CSS", "Express.js", "Sequelize", "PostgreSQL"],
      githubUrl: "https://github.com/ian-sobs/KURIPOT.git",
      liveUrl: "",
    },
    {
      title: "Cross-Modal Approach to Clustering Multimodal Influencer Posts Using Healnet, Hdbscan and Topic Modelling",
      description: "The university undergraduate thesis I co-authored.",
      roles: [
        "Trained the adapted fusion model with self-supervised methods.",
        "Designed the methodological flow of the project.",
      ],
      tags: ["Python", "PyTorch", "Google Colab"],
      githubUrl: "https://github.com/ian-sobs/KURIPOT.git",
      liveUrl: "",
      articleLink: "https://doi.org/10.2991/978-94-6239-624-1_11"
    },
  ],
};