/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Namra Joshi",
  title: "Hi all, I'm Namra",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 with experience in building end-to-end scalable applications using JavaScript, React.js, Node.js, Java, and various other libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1B14v8oZD9AIgIz3s5_w3nYA4bSjsVX75/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/njxixi",
  linkedin: "https://www.linkedin.com/in/namrajoshi/",
  gmail: "namrajoshi11@gmail.com",
  facebook: "https://www.facebook.com/namra.joshi.7/",
  medium: "https://medium.com/@jnamra.nj",
  stackoverflow: "https://stackoverflow.com/users/14789172/namra-joshi?tab=profile",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Proven track record in software development with a Bachelor's degree in Computer Science from San Jose State University and experience at Amazon and Bank of America."
    ),
    emoji("⚡ Expertise in a wide range of languages and frameworks including Java, Spring Boot, JavaScript, ReactJS, NodeJS, and hands-on experience with tools like Jenkins, Docker, Kubernetes, GitHub, and AWS services."),
    emoji(
      "⚡ Proficient in CI/CD, Infrastructure as Code, RESTful APIs, Containerization, Version Control, Automated Testing, Agile methodologies, and SDLC, making me a versatile and adaptable software engineer."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "vuejs",
      fontAwesomeClassname: "fab fa-vuejs"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },    
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
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
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Version Control",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Yarn",
      fontAwesomeClassname: "fab fa-yarn"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "San Jose State University",
      logo: require("./assets/images/SJSU-logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - May 2022",
      desc: "Achievements: Dean’s Scholar - 2018 & 2020, College of Science",
      descBullets: [
        "Related Coursework: Data Structures and Algorithms, Object Oriented Design Patterns (OOP), Server-Side Web Programming, Information Security, Database Management Systems, Introduction to Machine Learning",
        "Academic Projects: DevConnector, Dynamic Bar Graph Generator, Spanish Translator, Tic Tac Toe"
      ],
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "70%"
    },
    {
      Stack: "Testing",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Software Developer",
      company: "Bank of America",
      companylogo: require("./assets/images/bank-of-america-logo.png"),
      date: "April 2023 – Present",
      desc: "Working as a Fullstack Developer on the feature development team",
      descBullets:[
        "Engineered and refined automated test scripts using Selenium, boosting testing efficiency by 40% and reducing manual testing hours by 60%.",
        "Implemented automated testing into the CI/CD pipeline for a complex system with micro-services, cutting down release cycles by 50% and increasing deployment frequency.",
        "Performed load and performance testing on applications handling over 1 million transactions per day, identifying critical performance bottlenecks and achieving a 15% improvement in system responsiveness.",
        "Orchestrated the complete testing life-cycle using Jira, managing over 200 test cases per release cycle and reducing defect leakage by 30% in post-production.",
        "Developed and maintained Restful APIs serving concurrent users, enhancing the modularity of back-end services and facilitating seamless front-end integration.",
        "Secured API endpoints with JWT and OAuth2, preventing 99% of unauthorized access and maintaining compliance with data protection standards.",
        "Conducting load and performance testing using JMeter to assess the application’s scalability and optimization.",
      ]
    },
    {
      role: "Software Development Engineer",
      company: "Amazon",
      companylogo: require("./assets/images/amazon-logo.png"),
      date: "August 2022 – March 2023",
      desc: "Worked as a Full-Time Software Engineer on the Buyer Abuse Team",
      descBullets: [
        "Spearheaded the full lifecycle of business project development, from initial design proposals and architecture to back-end construction and integration testing, ensuring alignment with business objectives and technical requirements.",
        "Enhanced feature rollouts and bug resolution through strategic collaboration with Product Managers and Data Scientists, boosting user satisfaction by 15% and accelerating feature delivery by 10%.",
        "Produced detailed documentation and established dashboards, increasing transparency of operational metrics and contributing to a noteworthy 25% reduction in incident response times while on-call.",
        "Designed and deployed 15+ CI/CD pipelines, automating the code deployment process, which resulted in a smoother, more reliable traffic flow and a more efficient request handling system, cutting down resource consumption by 20%.",
        "Applied in-depth knowledge of Core Java to develop robust back-end systems and utilized SQL and DynamoDB for efficient data management and retrieval, achieving a notable improvement in database performance and query handling.",
        "Leveraged AWS cloud services—Lambda for on-demand serverless computing, S3 for scalable storage, CloudFront for content delivery, and API Gateway for secure API interactions—to create resilient, high-availability applications capable of scaling on demand."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Professional Projects",
  subtitle: "NOTABLE PROJECTS THAT I HAVE DONE IN THE INDUSTRY",
  projects: [
    {
      image: require("./assets/images/amazon-logo.png"),
      projectName: "Abuse Risk Prevention Plugin",
      projectDesc: " Skills: AWS | Git | Brazil CLI | A/B Testing | UAT Testing | CloudWatch",
      descBullets: ["Designed, developed, and executed the Advanced Return Resolutions platform in 22 countries.",
                    "Created CloudWatch metrics and Carnaval alarms to monitor key metrics based on defined thresholds.",
                    "Reduced Failed Returns Abuse in North America and European Union marketplaces by 78% in 2022.",
                    "Constructed and implemented A/B testing mechanism for assessing the ARP Plugin across 22 marketplaces.",
                    "Restructured the ARP Plugin Mechanism to rectify race conditions observed during User Acceptance Testing"],
      footerLink: [
        {
          name: "Project Details and Contributors",
          url: "https://www.linkedin.com/in/namrajoshi/details/projects/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/amazon-logo.png"),
      projectName: "Amazon’s Global ERA Expansion",
      projectDesc: "Skills: TensorFlow2 | Sagemaker | Brazil CLI | Git | Weblab | Corbel",
      descBullets: ["Led ERA’s global deployment: trained Email2Risk and Domain2Risk models with TensorFlow2 and Sagemaker.",
                    "Collaborated with a cross-functional team to deploy CNN-based neural network models worldwide.",
                    "Monitored AWS accounts, and efficiently leveraged version control resources Brazil CLI and Git for ERA deployment.",
                    "Successfully deployed the Pangea model and pioneering neural network use cases within Amazon’s ML Services.",
                    "Played a pivotal role in scaling ERA, enhancing risk assessment using Weblab and Corbel for data integration."],
      footerLink: [
        {
          name: "Project Details and Contributors",
          url: "https://www.linkedin.com/in/namrajoshi/details/projects/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Recommendations 🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Recommendation that I have earned !",

  achievementsCards: [
    {
      title: "Dean's Scholar",
      subtitle:
        "Succesfully earned a grade point average of 3.75 at San Jose State University and was featured in the Dean's List of 2018",
      image: require("./assets/images/SJSU-logo.png"),
      footerLink: [
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
      ]
    },
    {
      title: "Certificate of Completion | Udemy",
      subtitle:
        "MERN Stack Front To Back: Full Stack React, Redux & Node.js. Built and deployed a social network with Node.js, Express, React, Redux & MongoDB.",
      image: require("./assets/images/udemy-logo.png"),
      footerLink: [
        {
          name: "Course Link",
          url: "https://www.udemy.com/course/mern-stack-front-to-back/?couponCode=THANKSLEARNER24"
        }
      ]
    },

    {
      title: "Peer Recommendations",
      subtitle: "Hit the link below to review the recommendations I received from my peers",
      image: require("./assets/images/amazon-logo.png"),
      footerLink: [
        {name: "View Recommendations", url: "https://www.linkedin.com/in/namrajoshi/details/recommendations/?detailScreenTabIndex=0"},
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
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

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Reaching out for an opportunity or just want to say hi? My Inbox is open for all.",
  number: "+1 (669) 204-2967",
  email_address: "namrajoshi11@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
