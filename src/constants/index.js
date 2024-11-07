import project1 from "../assets/projects/tomato.png";
import project2 from "../assets/projects/razo.png";
import project3 from "../assets/projects/port.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With a years of hands-on experience, I have honed my skills in front-end technologies like React js, as well as back-end technologies like Node.js, Express.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 1 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, Express.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March  2023 - Present",
    role: "Full Stack Developer",
    company: "Optimista India Pvt Ltd",
    description: `Lead a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "React.js", "NodeJs", "Express", "MongoDB", "Mysql"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, user authentication , payment mode and admin panel",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
    link:"https://tomato-frontend-do8k.onrender.com/"
  },
  {
    title: "Mobile Recharge App",
    image: project2,
    description:
      "An application for managing Recharge Payment, with features such as recharge payment link generate through sms , curd operation, and wallet recharge.",
    technologies: ["HTML", "CSS", "React", "Node.js", "Mysql"],
    link:"https://razo.co.in/login"
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML","Tailwind", "React",],
    link:"https://sn-portfolio-eight.vercel.app/"
  },
];

export const CONTACT = {
  address: "2/33, MuthurasaPuram North Street, Thiruthuraipoondi, Nagappattinam (Distk)",
  phoneNo: "+91 6369292461",
  email: "santhoshnaresh875@gmail.com",
};
