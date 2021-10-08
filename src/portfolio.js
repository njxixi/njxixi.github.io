

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Namra Joshi",
  title: "Hi all, I'm Namra",
  subTitle: emoji("An enthusiastic Software Developer 🚀 with more than three years of academic experience building Web and Full-Stack applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1sjR1XbBdgWMYuUVG5dGrAU5r8knXGRYj/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/njxixi",
  linkedin: "https://www.linkedin.com/in/namrajoshi/",
  gmail: "jnamra.nj@gmail.com",
  gitlab: "https://gitlab.com/njxixi",
  facebook: "https://www.facebook.com/namra.joshi.7/",
  medium: "https://medium.com/@jnamra.nj",
  stackoverflow: "https://stackoverflow.com/users/14789172/namra-joshi?tab=profile"
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and Full-Stack applications"),
    emoji("⚡ Active member of the Computer Science Student Club at San Jose State University"),
    emoji("⚡ Building an opensource Full-Stack social networking web application using the MERN stack")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    }, 
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    }, 
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    }, 
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    }
  ]
};

// Your education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "San Jose State University",
      logo: require("./assets/images/0.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2017 - December 2021",
      desc: "Achievements: Dean’s Scholar - 2018 & 2020, College of Science",
      descBullets: [
        "Related Coursework: Data Structures and Algorithms, Object Oriented Design Patterns (OOP), Android App Development, Information Security, Database Management Systems, Introduction to Machine Learning, Operating Systems"
      ]
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "80%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Database",
      progressPercentage: "65%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Student Assistant",
      company: "San Jose State University",
      companylogo: require("./assets/images/0.png"),
      date: "May 2020 – Present",
      desc: "Currently working with the web development team of San Jose State University to deploy the redesigned college website",
      descBullets: [
        "Developing the eCampus website using the OmniUpdate Campus Experience",
        "Performing different tasks such as content editing, site management, and creating new pages using the OmniUpdate Campus",
        "Managing content, workflow, and collaboration online using Content Management System",
        "Facilitated the campus faculty with the features of online video conferencing software Zoom",
        "Skills Gained: HTML, CSS, Javascript, OmniUpdate"
      ]
    },
    {
      role: "Web-Development Intern",
      company: "Techmicra IT Solutions",
      companylogo: require("./assets/images/techmicra-it-solutions-10059437-bb810a6e.png"),
      date: "May 2019 – Aug 2019",
      desc: "Worked with the UI/UX Design team as a Front-end web-development intern",
      descBullets: [
        "Developed new user-facing features",
        "Built reusable code and libraries for future use",
        "Ensured the technical feasibility of UI/UX designs",
        "Optimized application for maximum speed and scalability",
        "Collaborated with other team members and stakeholders",
        "Skills Gained: HTML5, CSS3, Bootstrap, Javascript"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "njxixi", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};


const bigProjects = {
  viewProjects: true,
  projects: [
    {
      role: "Dec 2020",
      company: "Dynamic Bar Graph Generator",
      descBullets: [
        "Formulated a dynamic bar graph that changes its shape and size according to the user input in the text box frame",
        "Adapted the Observer Pattern, that automatically notifies the bar graph of any state changes and updates to the data",
        "Applied Java Swing to generate the JLabel for the individual objects and manipulate the object position and size",
        "Skills Leveraged: Object Oriented Design Patterns (OOP), Java, Java Swing"
      ]
    },
    {
      role: "October 2020",
      company: "Tic Tac Toe",
      descBullets: [
        "Directed a team of five to make a Tic Tac Toe game by applying the Object-Oriented Design Patterns",
        "Executed Graphical User Interface (GUI) and JComponents to create the Tic Tac Toe board",
        "Implemented the concepts of JButtons, Jframes, and Layout Managers to further optimize the game",
        "Devised the project with the controller updating the model using MVC, view being the GUI, and model storing different states",
        "Skills Leveraged: Object Oriented Design Patterns (OOP), Java, Java Swing"
      ]
    },
    {
      role: "June 2020",
      company: "Spanish Translator",
      descBullets: [
        "Built a web application using PHP that allows a user to define his/her own dictionary to translate English text to Spanish",
        "Programmed a highly secure signup/login system along with virus protective measures like sanitization and secure session",
        "Introduced user authentication, client-side validation, and password management",
        "Skills Leveraged: PHP, HTML, CSS, MySQL database, XAMPP for development, JavaScript for client-side validation"
      ]
    },
    
    
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements 🏆 "),

  achievementsCards: [
    {
      title: "Dean's Scholar 2018",
      subtitle: "Succesfully earned a grade point average of 3.75 at San Jose State University and was featured in the Dean's List of 2018",
      image: require("./assets/images/0.png"),
      footerLink: [
        
      ]
    },

    {
      title: "Dean's Scholar 2020",
      subtitle: "Succesfully earned a grade point average of 3.93 at San Jose State University and was featured in the Dean's List of 2020",
      image: require("./assets/images/0.png"),
      footerLink: [
        
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://theblogpost614818031.wordpress.com/2020/12/14/blog-post-9-course-reflection-2/",
      title: "Game Development",
      description: "Shared my overall experience of learning Game Development"
    },
    {
      url: "https://theblogpost614818031.wordpress.com/2020/11/03/blog-post-6-video-game-prototype/",
      title: "Top Speed Triumph",
      description: "Built a single-player racing game using Unity Hub"
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (669) 204-2967",
  email_address: "jnamra.nj@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "PaavanNamra"//Replace "twitter" with your twitter username without @

};
export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, contactInfo , twitterDetails};