import { FaNode, FaAws, FaHtml5, FaCss3 } from "react-icons/fa";
import {
  SiReact,
  SiContentful,
  SiMongodb,
  SiGraphql,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiJest,
} from "react-icons/si";

const techIcons = [
  { icon: <SiReact />, label: "React" },
  { icon: <SiNextdotjs />, label: "Next" },
  { icon: <FaNode />, label: "Node" },
  { icon: <FaAws />, label: "AWS" },
  { icon: <SiTypescript />, label: "TypeScript" },
  { icon: <SiJavascript />, label: "JavaScript" },
  { icon: <SiExpress />, label: "Express" },
  { icon: <SiMongodb />, label: "MongoDB" },
  { icon: <SiGraphql />, label: "GraphQL" },
  { icon: <SiContentful />, label: "Contentful" },
  { icon: <FaHtml5 />, label: "HTML5" },
  { icon: <FaCss3 />, label: "CSS3" },
  { icon: <SiJest />, label: "Jest" },
];

export { techIcons };
