/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Prasad's Portfolio",
  description:
    "Data Scientist skilled in Python, R, SQL, Power BI, PySpark, SSIS, and ML/DL, with expertise in building scalable data solutions and AI-powered applications.",
  og: {
    title: "Prasad's Portfolio",
    type: "website",
    url: "http://prasadkshirsagar.com/",
  },
};

//Home Page
const greeting = {
  title: "Prasad Kshirsagar",
  logo_name: "PrasadKshirsagar",
  subTitle:
    "Data Scientist skilled in Python, R, SQL, Power BI, PySpark, SSIS, and ML/DL, with expertise in building scalable data solutions and AI-powered applications.",
  resumeLink:
    "https://drive.google.com/drive/folders/11QVsIJrHpKUH7Qw-7L7coiyTiaFH2moI?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/Prasad6145",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Prasad6145",
  // linkedin: "https://www.linkedin.com/in/prasad-kshirsagar-a01000191/",
  // gmail: "prasadkshirsagar1211@gmail.com",
  // facebook: "https://www.facebook.com/share/1AbZNrELGJ/",
  // instagram: "https://www.instagram.com/prasad_6145?igsh=MXBmYTlyM3IwMG5mcA=="

  {
    name: "Github",
    link: "https://github.com/Prasad6145",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prasad-kshirsagar-a01000191/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:prasadkshirsagar1211@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/share/1AbZNrELGJ/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/prasad_6145?igsh=MXBmYTlyM3IwMG5mcA==",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

// Skills
const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building ML/DL models for classification, forecasting, and prediction",
        "⚡ Experience with CNNs, VGG16/19, ResNet, LSTM for real-world applications",
        "⚡ Strong knowledge of statistical methods: Regression, ANOVA, Hypothesis Testing",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "R",
          fontAwesomeClassname: "simple-icons:r",
          style: { color: "#276DC3" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {},
        },
        {
          skillName: "Scikit-learn",
          fontAwesomeClassname: "simple-icons:scikitlearn",
          style: { color: "#F7931E" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {},
        },
      ],
    },
    {
      title: "Data Engineering & BI",
      fileName: "DataEngineeringImg",
      skills: [
        "⚡ ETL pipelines with SSIS, SSMS, and PySpark",
        "⚡ Data visualization and dashboards with Power BI, QuickSight, Excel",
        "⚡ SQL schema design, joins, nested queries, and optimizations",
      ],
      softwareSkills: [
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: { color: "#4479A1" },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: { color: "#F2C811" },
        },
        {
          skillName: "PySpark",
          fontAwesomeClassname: "simple-icons:apache",
          style: { color: "#E25A1C" },
        },
        {
          skillName: "SSIS",
          fontAwesomeClassname: "simple-icons:microsoftsqlserver",
          style: { color: "#CC2927" },
        },
      ],
    },
    {
      title: "Cloud & Tools",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Deploying ML models on cloud (AWS, GCP)",
        "⚡ Working with Dockerized environments for scalable AI apps",
        "⚡ Automating workflows with LangChain, LangGraph, Rasa",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#FF9900" },
        },
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: { color: "#4285F4" },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: { color: "#1488C6" },
        },
      ],
    },
  ],
};
// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/prasadkshirsaga4",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/prasadkshirsagar6145",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Fergusson College, Pune",
      subtitle: "M.Sc. in Data Science",
      logo_path: "Fc logo.jpeg",
      alt_name: "Fergusson College",
      duration: "2023 - 2025",
      descriptions: [
        "⚡ Studied advanced data science, machine learning, deep learning, NLP, computer vision, and big data.",
        "⚡ Worked on projects in predictive modeling, ETL pipelines, and AI systems.",
      ],
      website_link: "https://www.fergusson.edu/",
    },
    {
      title: "Sir Parshurambhau College, Pune",
      subtitle: "B.Sc. in Mathematics",
      logo_path: "Sp logo.webp",
      alt_name: "Sir Parshurambhau College",
      duration: "2019 - 2022",
      descriptions: [
        "⚡ Built a strong foundation in calculus, linear algebra, probability, and statistics.",
        "⚡ Developed analytical and problem-solving skills that support my data science expertise.",
      ],
      website_link: "https://www.spcollegepune.ac.in/",
    },
  ],
};

// Certifications
const certifications = {
  certifications: [
    {
      title: "Advanced Machine Learning",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/95461386954312/", // Add your certificate link
      alt_name: "Machine Learning",
      color_code: "#FF0000",
    },
    {
      title: "Advanced Analytics Framework",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/05664313986657/", // Add your certificate link
      alt_name: "Analytics",
      color_code: "#FF0000",
    },
    {
      title: "Advanced Python",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/88313264772929/", // Add your certificate link
      alt_name: "Python",
      color_code: "#FF0000",
    },
    {
      title: "Fundamentals Of Excel",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://certificates.almabetter.com/en/verify/88313264772929", // Add your certificate link
      alt_name: "Excel",
      color_code: "#FF0000",
    },
    {
      title: "Microsoft Data Analyst Mock Test",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/86820977865811/", // Add your certificate link
      alt_name: "Data Analyst",
      color_code: "#FF0000",
    },
    {
      title: "Tableau",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/20703028609875/", // Add your certificate link
      alt_name: "Tableau",
      color_code: "#FF0000",
    },
    {
      title: "Communication Workshop",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/90816941243416/", // Add your certificate link
      alt_name: "Communication",
      color_code: "#FF0000",
    },
    {
      title: "Overall Machine Learning Challenge",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/52524149474620/", // Add your certificate link
      alt_name: "Overall Machine Learning Challenge",
      color_code: "#FF0000",
    },
    {
      title: "Data Visualization Tools",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/06461422238630/", // Add your certificate link
      alt_name: "Data Visualization Tools",
      color_code: "#FF0000",
    },
    {
      title: "Data Analysis",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/03259403169408/", // Add your certificate link
      alt_name: "Data Analysis",
      color_code: "#FF0000",
    },
    {
      title: "Inferential Statistics",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/89926769049966/", // Add your certificate link
      alt_name: "Inferential Statistics",
      color_code: "#FF0000",
    },
    {
      title: "Unsupervised Learning Algorithms",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/01724960128647/", // Add your certificate link
      alt_name: "Unsupervised Learning Algorithms",
      color_code: "#FF0000",
    },
    {
      title: "supervised Learning Algorithms-|||",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/01724960128647/", // Add your certificate link
      alt_name: "supervised Learning Algorithms-|||",
      color_code: "#FF0000",
    },
    {
      title: "supervised Learning Algorithms-||",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/57449853796706/", // Add your certificate link
      alt_name: "supervised Learning Algorithms-||",
      color_code: "#FF0000",
    },
    {
      title: "supervised Learning Algorithms-|",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/68748563194705/", // Add your certificate link
      alt_name: "supervised Learning Algorithms-|",
      color_code: "#FF0000",
    },
    {
      title: "Introduction To Docker",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/01006424350436/", // Add your certificate link
      alt_name: "Introduction To Docker",
      color_code: "#FF0000",
    },
    {
      title: "Descriptive Statistics",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/51921973920850/", // Add your certificate link
      alt_name: "Descriptive Statistics",
      color_code: "#FF0000",
    },
    {
      title: "Relational Database",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/36737384091697/", // Add your certificate link
      alt_name: "Relational Database",
      color_code: "#FF0000",
    },
    {
      title: "Overall Sql For Ds Challenge",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/99021206130213/", // Add your certificate link
      alt_name: "Overall Sql For Ds Challenge",
      color_code: "#FF0000",
    },
    {
      title: "Introduction To Computer Programming",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/47997575667444/", // Add your certificate link
      alt_name: "Introduction To Computer Programming",
      color_code: "#FF0000",
    },
    {
      title: "Calculus For ML",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/94643356681680/", // Add your certificate link
      alt_name: "Calculus For ML",
      color_code: "#FF0000",
    },
    {
      title: "Random Variables",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/18289244977629/", // Add your certificate link
      alt_name: "Random Variables",
      color_code: "#FF0000",
    },
    {
      title: "Summarizing Data",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/06319070700217/", // Add your certificate link
      alt_name: "Summarizing Data",
      color_code: "#FF0000",
    },
    {
      title: "Probability Theory",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/15924447161702/", // Add your certificate link
      alt_name: "Probability Theory",
      color_code: "#FF0000",
    },
    {
      title: "Probability, Statistics, Calculus & Linear Algebra",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/47399251122346/", // Add your certificate link
      alt_name: "Probability, Statistics, Calculus & Linear Algebra",
      color_code: "#FF0000",
    },
    {
      title: "Matrix Algebra",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/67804840158327/", // Add your certificate link
      alt_name: "Matrix Algebra",
      color_code: "#FF0000",
    },
    {
      title: "Vector Algebra",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/61783423390947/", // Add your certificate link
      alt_name: "Vector Algebra",
      color_code: "#FF0000",
    },
    {
      title: "Introduction To Data Visualization",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/19411234205306/", // Add your certificate link
      alt_name: "Introduction To Data Visualization",
      color_code: "#FF0000",
    },
    {
      title: "Sql Fundamentals-V",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/54209067162719/", // Add your certificate link
      alt_name: "Sql Fundamentals-V",
      color_code: "#FF0000",
    },
    {
      title: "Sql Fundamentals-|||",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/91952352421670/", // Add your certificate link
      alt_name: "Sql Fundamentals-|||",
      color_code: "#FF0000",
    },
    {
      title: "Sql Fundamentals-||",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/95332976951188/", // Add your certificate link
      alt_name: "Sql Fundamentals-||",
      color_code: "#FF0000",
    },
    {
      title: "Pandas Operations",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/92760203014344/", // Add your certificate link
      alt_name: "Pandas Operations",
      color_code: "#FF0000",
    },
    {
      title: "Introduction To Numpy",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/64735318893503/", // Add your certificate link
      alt_name: "Introduction To Numpy",
      color_code: "#FF0000",
    },
    {
      title: "List Comprehensions",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/02253213603434/", // Add your certificate link
      alt_name: "List Comprehensions",
      color_code: "#FF0000",
    },
    {
      title: "Python Basics-||",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/86029062166260/", // Add your certificate link
      alt_name: "Python Basics-||",
      color_code: "#FF0000",
    },
    {
      title: "Loops & Iterations",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/88680039114767/", // Add your certificate link
      alt_name: "Loops & Iterations",
      color_code: "#FF0000",
    },
    {
      title: "Statement, Indentation & Conditionals",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/07267479695075/", // Add your certificate link
      alt_name: "Statement, Indentation & Conditionals",
      color_code: "#FF0000",
    },
    {
      title: "Introduction To list",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/49118002132855/", // Add your certificate link
      alt_name: "Introduction To list",
      color_code: "#FF0000",
    },
    {
      title: "Introduction To String",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/03375326227806/", // Add your certificate link
      alt_name: "Introduction To String",
      color_code: "#FF0000",
    },
    {
      title: "Integers, Floats & Booleans",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/24717253858777/", // Add your certificate link
      alt_name: "Integers, Floats & Booleans",
      color_code: "#FF0000",
    },
    {
      title: "Excel Fundamentals",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/34612122791913/", // Add your certificate link
      alt_name: "Excel Fundamentals",
      color_code: "#FF0000",
    },
    {
      title: "Excel -||",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/22055075265559/", // Add your certificate link
      alt_name: "Excel -||",
      color_code: "#FF0000",
    },
    {
      title: "Production Grade Programming",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/57986021415735/", // Add your certificate link
      alt_name: "Production Grade Programming",
      color_code: "#FF0000",
    },
    {
      title: "Function % Methods",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/57485852260623/", // Add your certificate link
      alt_name: "Function % Methods",
      color_code: "#FF0000",
    },
    {
      title: "Python Basic -|",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/77217509666224/", // Add your certificate link
      alt_name: "Python Basic -|",
      color_code: "#FF0000",
    },
    {
      title: "Tuples, Sets & Dictionaries",
      subtitle: "Almabetter",
      logo_path: "Almabetter logo.jpeg",
      certificate_link:
        "https://verified.sertifier.com/en/verify/06845150289508/", // Add your certificate link
      alt_name: "Tuples, Sets & Dictionaries",
      color_code: "#FF0000",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "I have hands-on experience in ETL, data science, and AI-powered solutions through my internship.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Internships",
      work: true,
      experiences: [
        {
          title: "Data Science Intern",
          company: "Opine Group",
          company_url: "https://www.opinegroup.com/",
          logo_path: "Opine Group.png",
          duration: "Jan 2025 - Jun 2025",
          location: "Pune, Maharashtra",
          description:
            "Worked on ETL projects using SSIS & SSMS with AdventureWorks & Northwind databases. Built sales analysis dashboards, performed drill-down and drill-through insights, and optimized ETL workflows.",
          color: "#0071C5",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have worked on a diverse range of projects in Data Science, Machine Learning, Deep Learning, and Data Engineering. My projects include rice price forecasting using time series models, road quality image classification with CNNs and transfer learning, ETL pipelines using SSIS & SSMS, and interactive dashboards with Power BI. These projects highlight my ability to solve real-world problems with data-driven insights.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Profile.jpg",
    description:
      "I am available on  GitHub,LinkedIn,Gmail,Facebook and Instagram. Feel free to reach out for collaborations, projects, or data science discussions.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sadashiv peth, Pune, Maharashtra, India",
    locality: "Pune",
    country: "India",
    region: "Maharashtra",
    postalCode: "411030",
    streetAddress: "Near Bharat Petroleum Pump, Tilak Road",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/wdjadCQy7gyZZYJT6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9970506739",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
