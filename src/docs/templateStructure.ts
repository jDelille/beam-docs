export const TEMPLATE_STRUCTURE_DOC = {
  title: "BEAM Docs",
  intro: "Understanding how BEAM templates are structured and how placeholders work.",
  sections: [
    {
      heading: "What Is a Template?",
      body: `A BEAM template is a folder that contains files, directories, and
optional placeholder values used to dynamically generate a new project.
When you create a project using BEAM, the template is copied into the
new project directory, and all placeholder values are automatically
replaced.

Templates can contain anything—React components, backend folders,
configuration files, scripts, or even full-stack boilerplates.`
    },
    {
      heading: "Template File Format",
      body: `Every file in a template is a real file, just like it will appear in the
final project. The difference is that templates can include placeholders
inside file contents and even inside filenames.

These placeholders allow BEAM to dynamically customize each project
during creation.`,
      list: [
        "Regular files (like .ts, .tsx, .scss, .md, .env)",
        "Nested folders",
        "Placeholders inside content",
        "Placeholders inside filenames"
      ]
    },
    {
      heading: "Placeholders",
      body: `Placeholders are the heart of BEAM's template system. They let you define
dynamic values that can be replaced during project creation.

A placeholder follows this syntax:

    [PLACEHOLDER_NAME=defaultValue]

During project creation, BEAM will automatically detect all placeholders
and prompt you to enter custom values (or keep the defaults).

Placeholders can appear anywhere: inside React components, CSS files,
README files, or filenames.`,
      subSection: {
        title: "Example Placeholder",
        description: `In a React component:

    export default function [PAGE_COMPONENT=Page]() {
      return <div className="[PAGE_CLASSNAME=page]">Hello!</div>;
    }`
      }
    },
    {
      heading: "Template Sections",
      body: `A template may include multiple files, each starting with a marker that
tells BEAM where the file should be created in the final project.`,
      subSection: {
        title: "Example File Marker",
        description: `-- app/components/navbar/Navbar.tsx

This tells BEAM:

• Create a file called Navbar.tsx  
• Inside app/components/navbar/  
• Insert the content below the marker`
      }
    },
    {
      heading: "Example Template",
      body: `Here is a simplified version of a real BEAM template. This illustrates how
placeholders, file markers, and file content work together:`,
      subSection: {
        title: "Template Example",
        description: `-- app/Page.tsx
import Navbar from "./components/navbar/Navbar";

export default function [PAGE_COMPONENT=Page]() {
  return (
    <div className="[PAGE_CLASSNAME=page]">
      <[NAVBAR_COMPONENT=Navbar] />
    </div>
  );
}

-- app/components/navbar/Navbar.tsx
import React from "react";
import [BUTTON_COMPONENT=Button] from "../reusable/button/Button";

const [NAVBAR_COMPONENT]: React.FC = () => {
  return (
    <nav className="navbar">
      <[BUTTON_COMPONENT] text="Click" onClick={() => {}} />
    </nav>
  );
};

export default [NAVBAR_COMPONENT];

-- app/components/reusable/button/Button.tsx
const [BUTTON_COMPONENT]: React.FC = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default [BUTTON_COMPONENT];

-- styles/globals.scss
... CSS content ...
`
      }
    },
    {
      heading: "How BEAM Processes Templates",
      body: `When you run create project, BEAM performs the following steps:`,
      list: [
        "Reads the template file",
        "Parses all file markers (--) to determine output paths",
        "Creates required directories",
        "Scans all file content for placeholders",
        "Prompts you to enter new values or keep defaults",
        "Replaces placeholders across all files",
        "Writes the final output into the new project folder"
      ],
      subSection: {
        title: "Result",
        description: `Once complete, you get a fully scaffolded project with every placeholder
replaced and all files placed in the correct structure—instantly.`
      }
    },
    {
      heading: "Next Steps",
      body: `Now that you understand how templates are structured, you’re ready to
create your own template or install existing ones.`,
      list: [
        "Create a template with the create template command",
        "Install templates from others with install template",
        "Use templates to generate full projects instantly"
      ]
    }
  ]
} as const;