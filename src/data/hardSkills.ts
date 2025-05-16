interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Networking",
    description: "I have a strong background in networking and system administration",
    icon: "astro_dark"
  },
  {
    name: "SysAdmin",
    description: "I love to automate everything, from servers to configuration on computers",
    icon: "nextjs_icon_dark"
  },
  {
    name: "Web Development",
    description: "I've been interested since the use of HTML and CSS with PHP",
    icon: "nodejs"
  },
  {
    name: "MySQL",
    description: "My favorite database",
    icon: "mongodb"
  }
];

export default hardSkills;