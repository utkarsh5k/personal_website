/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Utkarsh Kashyap",
  title: "Hey, I'm Utkarsh!",
  subTitle: emoji(
    "A passionate Software Developer experienced in software engineering at scale, distributed systems and machine learning."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1O1lMpxLhmGlh3d4CyKnfx1JjWtMAwOxe/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/utkarsh5k",
  linkedin: "https://www.linkedin.com/in/utkarsh-kashyap-1417a2114/",
  gmail: "ukashyap@seas.upenn.edu",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I bring",
  subTitle: "Software Engineer interested in distributed systems and machine learning at scale.",
  skills: [
    emoji(
      "⚡ 3 years of industry experience from Microsoft in large scale distributed systems, information retrieval and ranking"
    ),
    emoji("⚡ Master's in Computer and Information Science from University of Pennsylvania, with a focus on distributed systems and machine learning"),
    emoji(
      "⚡ Knack of working on 0-1 products and open-ended problems through prior experience"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "C#",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Azure",
      fontAwesomeClassname: "fas fa-cloud"
    },
    {
      skillName: "Apache Storm",
      fontAwesomeClassname: "fas fa-bolt"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "scikit-learn",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Jupyter",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "Unix",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "NoSQL-DBs",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "RDBMS",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Pennsylvania",
      logo: require("./assets/images/pennLogo.png"),
      subHeader: "Master of Science in Computer and Information Science",
      duration: "Jan 2021 - May 2022",
      desc: "Research in Bayesian Machine Learning, Reinforcement learning and projects in Distributed Systems",
      descBullets: [
        "Ongoing research in adversarial attacks on reinforcement learning used in large scale software systems",
        "Ongoing research in high dimensional black box functions using Bayesian Machine Learning",
        "Built an end to end search engine from scratch on 500k webpages",
        "Built a fully functional, distributed clone of GMail and Google Drive from scratch", 
        "Teaching Assistant for Machine Learning in Fall 2021 and Spring 2022",
        "Coursework in distributed systems, machine learning, deep learning",
        "GPA: 4.0/4.0"
      ]
    },
    {
      schoolName: "Manipal Institute of Technology",
      logo: require("./assets/images/manipalLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Aug 2014 - May 2018",
      desc: "Ranked top 20% in the program. Took courses about Software Engineering, Web Security, Distributed Systems, Machine Learning",
      descBullets: [
        "Minor in intelligent systems with coursework in Machine Learning, Natural Language Processing and Social Network Analysis",
        "Took systems courses like Operating Systems, Distributed Systems, Networking",
        "Built an automatic code-summarizer for Java Code using CNNs with attention mechanism",
        "Participated in research of detecting glaucoma from high resolution retina images using CNNs",
        "GPA: 9.11/10"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Assistant",
      company: "trustML Lab @ UPenn",
      companylogo: require("./assets/images/pennLogo.png"),
      date: "Sep 2021 – Present",
      desc: "Adversarial attacks on Reinforcement Learning Algorithms deployed in production Software systems",
      descBullets: [
        "I am currently researching and building novel attacks on reinforcement learning algorithms like PPO and A2C in systems environments like load balancing, congestion control, adaptive streaming etc.",
        "The goal here is to make these algorithms perform worse than a greedy strategy.",
        "Simulateneously, I also investigate fail-safe algorithms for shielding against such attacks, to guarantee at-least greedy performance."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "CIS 520: Machine Learning",
      companylogo: require("./assets/images/pennLogo.png"),
      date: "Sep 2021 – Present",
      desc: "Teaching Assistant for the graduate Machine Learning course for Spring 2022 and Fall 2021",
      descBullets: [
        "My responsibilities are designing and grading homeworks and midterms, as well as helping students understand the content better.",
      ]
    },
    {
      role: "Research Assistant",
      company: "GRASP Lab @ UPenn",
      companylogo: require("./assets/images/pennLogo.png"),
      date: "Aug 2021 – July 2021",
      desc: "Software development for DCIST: A fully autonomous, heterogenous swarm of robots to assist humans in combat scenarios",
      descBullets: [
        "Built an automated metric-collection and visualization module from scratch for each simulation. Worked with stakeholders in identifying key metrics to collect and visualize.",
        "Developed a batch-simulation mechanism. This allowed other researchers to specify several variable values in a YAML file, and then automatically run simulations for different combinations of values, hence streamlining productivity.",
        "Implemented automatic aggregation and filtering for batch-simulation metrics.",
        "I also researched new heuristics for probabalistic path planning of robots."
      ]
    },
    {
      role: "Software Engineer 2 & 1",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "June 2018 – December 2020",
      desc: "Division: Microsoft Search, Assistance and Intelligence",
      descBullets: [
        "From June 2019 - Dec 2020, I worked in Bing Enterprise Search, where I led the design and development of a new backend infrastructure for serving acronym search results. The new infrastructure finally saw 30% gains in latency and ~5 percent gain in availability. This was while serving about 500M - 1.5 billion requests across all endpoints.",
        "From June 2018 - June 2019, I was with the Microsoft Assistant Notifications team, where I was an active part of building C# microservices and library packages to power a new microservices-based Notifications system serving 10s of millions of users per day.",
        "I also routinely took part in Site Reliability Engineering, mitigating, investigating and root-causing failures encountered on production systems."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "Jan 2018 – June 2018",
      desc: "Division: Microsoft Search, Assistance and Intelligence",
      descBullets: [
        "I built a prototype of a microservices-based Notifications system for Microsoft Assistant (previously Cortana) from scratch. The earlier system was centralized.",
        "The new prototype offered more scalability, modular deployments and easier debugging.",
        "The work from my internship laid the ground work for moving the Notifications system to a microservices-architecture, that I was an active part of."
      ]
    },
    {
      role: "Software Engineering Intern",
      company: "Microsoft",
      companylogo: require("./assets/images/microsoftLogo.png"),
      date: "May 2017 – July 2017",
      desc: "Division: Microsoft Search, Assistance and Intelligence",
      descBullets: [
        "I built a voice controlled skill for Cortana to add-remove items from Cortana Lists using voice command",
        "I also built a JavaScript Chrome extension to automatically parse out the lists from any given webpage and add it to Cortana Lists",
      ]
    },
  ]
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some personal projects that I have built for fun or coursework, often both.",
  projects: [
    {
      image: require("./assets/images/pennLogo.png"),
      projectName: "PennSearch",
      projectDesc: "A google like end-to-end search engine deployed on cloud built from scratch",
      descBullets: [
        "Crawled over 500k+ webpages using a Mercator style crawler using Apache Storm and deployed on Amazon EC2",
        "Built a forward and reverse search index using Amazon Elastic MapReduce on over 2 million entries",
        "Used a weighted combination of TF-IDF and PageRank for ranking of search results",
        "Used Vue.js for UI",
        "Backend written in Java using SparkJava HTTP Webserver package"
      ]
    },
    {
      image: require("./assets/images/pennLogo.png"),
      projectName: "PennCloud",
      projectDesc: "A fully distributed GMail and GDrive Clone built from scratch",
      descBullets: [
        "Powered by a distributed GFS like key-value store using active log-based replication and log-based fault recovery",
        "Drive Storage features include creation, uploads, downloads, rename, moving of files and (nested) folders",
        "Mail serving supports email functionality including send, forward, reply, reply-all",
        "In-built load balancing functionality on both application and storage servers",
        "Technologies used: C++, JavaScript, HTML5, Material CSS"
      ]
    },
    {
      image: require("./assets/images/pennLogo.png"),
      projectName: "TSsBO",
      projectDesc: "High dimensional Bayesian Optimization of black-box functions by learning the active subspace",
      descBullets: [
        "The objective is to optimize high dimensional, black-box non-differentiable functions by learning the active-subspace of these functions.",
        "We learn a low-dimensional manifold of a high-dimensional function where Bayesian Optimization techniques like qExpectedImprovement and Thompson sampling can find local and global optimas, which can then be used to locate the optima in the original dimensions.",
        "Technologies: PyTorch, GPyTorch, BoTorch"
      ]
    }

  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Online Certifications 🏆 "),
  subtitle:
    "Online Courses that I have completed",

  achievementsCards: [
    {
      title: "Cloud Computing Concepts, Part 1",
      subtitle:
        "An online non-credit course authorized by University of Illinois at Urbana-Champaign and offered through Coursera",
      image: require("./assets/images/illinoisLogo.png"),
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/certificate/LYX9FPMFLZRU"
        },
      ]
    },
    {
      title: "Cloud Computing Concepts, Part 2",
      subtitle:
        "An online non-credit course authorized by University of Illinois at Urbana-Champaign and offered through Coursera",
      image: require("./assets/images/illinoisLogo.png"),
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/certificate/7JYALKFT3DX2"
        },
      ]
    },
    {
      title: "Cloud Computing Applications, Part 1: Cloud Systems and Infrastructure",
      subtitle:
        "An online non-credit course authorized by University of Illinois at Urbana-Champaign and offered through Coursera",
      image: require("./assets/images/illinoisLogo.png"),
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/certificate/9QNHEMAQ2T6R "
        },
      ]
    },
    {
      title: "Cloud Computing Applications, Part 2: Big Data and Applications in the Cloud",
      subtitle:
        "An online non-credit course authorized by University of Illinois at Urbana-Champaign and offered through Coursera",
      image: require("./assets/images/illinoisLogo.png"),
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/certificate/QFLXSVWE853G"
        },
      ]
    },
    {
      title: "Cloud Networking",
      subtitle:
        "An online non-credit course authorized by University of Illinois at Urbana-Champaign and offered through Coursera",
      image: require("./assets/images/illinoisLogo.png"),
      footerLink: [
        {
          name: "Credential",
          url: "https://www.coursera.org/account/accomplishments/certificate/E7E2PK5X66C5"
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Looking to discuss an interesting project or an opportunity? I'm always interested. ",
  email_address: "ukashyap@seas.upenn.edu"
};


// Unused sections, adding for quick compile
const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  contactInfo,
  techStack,
  skillsSection,
  educationInfo,
  workExperiences,
  bigProjects,
  achievementSection,
  openSource,
  blogSection,
  talkSection,
  podcastSection,
  twitterDetails
};
