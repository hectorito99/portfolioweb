interface HardSkill {
  name: string;
  description: string;
  icon: string;
}

const hardSkills: HardSkill[] = [
  {
    name: "Networking",
    description: "I have a strong background in networking and system administration",
    icon: "network"
  },
  {
    name: "SysAdmin",
    description: "I love to automate everything, from servers to configuration on computers",
    icon: "computer"
  },
  {
    name: "Web Development",
    description: "I've been interested since the use of HTML and CSS with PHP",
    icon: "nodejs"
  },
  {
    name: "MySQL",
    description: "My favorite database",
    icon: "mysql"
  }
];

export default hardSkills;