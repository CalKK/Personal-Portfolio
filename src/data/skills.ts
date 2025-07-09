// ✅ Import React Icons
import { IconType } from "react-icons";
import { FaTools, FaCube, FaMicrochip } from "react-icons/fa";

// ✅ Define the Skill interface
export interface Skill {
  name: string;
  icon: IconType;
  technologies: string[];
}

// ✅ Export typed skills list
export const skills: Skill[] = [
  {
    name: "E-mobility",
    icon: FaTools,
    technologies: ["CBA IV Software", "TinkerCAD", "Fusion 360"]
  },
  {
    name: "3D Modelling",
    icon: FaCube,
    technologies: ["AUTOCAD", "TinkerCAD"]
  },
  {
    name: "PCB Design",
    icon: FaMicrochip,
    technologies: ["EasyEDA", "kiCAD"]
  }
];
