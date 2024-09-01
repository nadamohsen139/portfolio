import imgsearch from "./assets/image-search-engine.png";
import qrcode from "./assets/qr-generator.png";
import todoapp from "./assets/todo-app-website.png";
import weatherapp from "./assets/weather-app-website.png";
import coursesapp from "./assets/courses-website.png";
import fashion from "./assets/fashion-website.png";
import ecommerce from "./assets/ecommerce-web.png";
import travelplanner from "./assets/travel_icon_1024x1024.png";
import jobfinder from "./assets/job_finder_logo_converted.png";



export const HERO_CONTENT = `I am a passionate front-end developer with a knack for creating intuitive and user-friendly websites and mobile applications. I have developed my skills in front-end technologies like React and React Native Expo. My goal is to leverage my expertise to create innovative solutions that deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including Firebase, Supabase, MapTiler, Moment.js, Interacting with Gemini Google Generative Ai and API Job Posting like Adzuna API. My journey in mobile app development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;


export const CONTACT = {
  address: "Rashid St, Fayoum, Egypt ",
  phoneNo: "+20 1021219448",
  email: "mohsennada139@gmail.com",
};

export const projects = [
  {
    href: "https://expo.dev/accounts/nada-mohsen/projects/job-finder-app/builds/5c927f97-3be9-4bf1-9ebd-47b057ad41c5",
    imgSrc: jobfinder,
    altText: "Job Finder App",
    title: "Job Finder App",
    technologies: ["Expo-Router" , "Native Wind" , "Supabase For Authentication" , "Supabase Database (for storing user data)" , "Supabase Storage (for storing Profile Pics)" , "Expo image picker" , "Adzuna API for displaying job postings" ],
  },
  {
    href: "https://expo.dev/accounts/nada-mohsen/projects/travel-planner/builds/b5e795b2-215e-4198-b436-492325be8b9f",
    imgSrc: travelplanner,
    altText: "Ai Travel Planner App",
    title: "Ai Travel Planner App",
    technologies: ["Expo-Router" , "Native Wind" , "Firebase For Authentication" , "Firestore Database" , "MapTiler" ,
      "React Native Calender Picker" , "Gemini Google Generative Ai (for creating the trip plans)",
      "Unsplash", "Moment.js" , ],
  },
  {
    href: "https://e-commerce-website-one-flax.vercel.app/",
    imgSrc: ecommerce,
    altText: "Ecommerce Responsive Website",
    title: "Ecommerce Responsive Website",
    technologies: ["React.js" , "Vite.js" , "React Router", "Tailwind CSS"],
  },
  {
    href: "https://nadamohsen139.github.io/image-search-engine/",
    imgSrc: imgsearch,
    altText: "Image Search Engine",
    title: "Image Search Engine",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    href: "https://nadamohsen139.github.io/qr-code-generator/",
    imgSrc: qrcode,
    altText: "QR Code Generator",
    title: "QR Code Generator",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    href: "https://nadamohsen139.github.io/to-do-list-app/",
    imgSrc: todoapp,
    altText: "To Do List Website",
    title: "To Do List Website",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    href: "https://nadamohsen139.github.io/weather-app/",
    imgSrc: weatherapp,
    altText: "Weather App Website",
    title: "Weather App Website",
    technologies: ["HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    href: "https://nadamohsen139.github.io/courses-app-website/",
    imgSrc: coursesapp,
    altText: "Courses App Website",
    title: "Courses App Website",
    technologies: ["HTML", "CSS"],
  },
  {
    href: "https://nadamohsen139.github.io/nada-fashion-house/",
    imgSrc: fashion,
    altText: "Fashion House Website",
    title: "Fashion House Website",
    technologies: ["HTML", "CSS"],
  },
];

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
} else if(localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
  document.documentElement.classList.remove('dark');
  document.documentElement.classList.add('light');
}