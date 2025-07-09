// ✅ Define the Project interface
export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  link: string;
  linkedIn: string;
}

// ✅ Export typed project list
export const projects: Project[] = [
  {
    title: "AFTERLIFE INNOVATIONS",
    description: "A sustainable climate technology product manufacturing startup aiming to revolutionize battery recycling by developing sustainable solutions that address the environmental and health risks associated with improper disposal. With the rapidly growing demand for electric vehicles and portable electronics, the market for batteries recycling is projected to grow substantially, presenting a significant economic opportunity.",
    tech: ["CBA IV Tester", "TinkerCAD", "Fusion 360"],
    image: "https://raw.githubusercontent.com/CalKK/CALKK_/main/AFTERLIFE%20LOGO.png",
    link: "https://github.com/CalKK/CALKK_/blob/main/AFTERLIFE%20LOGO.png",
    linkedIn: "https://www.linkedin.com/in/calvin-kinyanjui-95734222a/"
  };
