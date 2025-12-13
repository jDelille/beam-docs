export const GETTING_STARTED_DOCS = {
  whatIsBEAM: {
    title: "What is BEAM?",
    intro:
      "BEAM is a powerful command-line tool for generating new projects from reusable, customizable templates. It helps developers maintain consistency, save time, and eliminate repetitive setup work. Currently, only creating projects using templates is implemented. We are working on doing the same for files and components. Stay tuned for the upcomming BEAM updates and reach out if you want to collaborate.",
    sections: [
      {
        heading: "Overview",
        body: "With BEAM, you define a project structure once as a template, then generate new projects instantly without manually copying files, renaming files, or handling boilerplate. This ensures your projects are consistent and ready to code immediately.",
      },
      {
        heading: "Who is it for?",
        body: "BEAM is ideal for solo developers, small teams, or large organizations who want to standardize project setup. By using templates, everyone on your team starts from the same structure and conventions. Many projects follow a similar structure and the goal of BEAM is to take advantage of that and make setting up new projects as quick and easy.",
      },
      {
        heading: "Key Features",
        body: "BEAM combines project and template management with helpful utilities for file handling. Some of its standout features include:",
        list: [
          "Create projects from installed or downloaded templates",
          "Manage templates easily (create, copy, rename, delete, install, download)",
          "Automatic placeholder replacement during project generation",
          "Trash system to safely delete and recover projects, templates, and files",
          "Nested directory support in templates",
          "Remote template downloads via Supabase",
        ],
      },
    ],
    navigation: {
      previousLink: "/docs/commands/trash/recover",
      previousName: "Recover File | Folder",
      nextLink: "/docs/getting-started/templateStructure",
      nextName: "Template Structure",
    },
  },

  templateStructure: {
    title: "Template Structure",
    intro: "Learn how to organize and build templates for BEAM.",
    sections: [
      {
        heading: "What is a Template?",
        body: "Templates are reusable blueprints containing folders, files, placeholder variables, and a configuration file that BEAM reads. They serve as the foundation for generating new projects quickly and consistently.",
      },
      {
        heading: "Creating Templates",
        body: "Steps to create your first template and define its structure:",
        list: [
          "Create folders and files for your template according to your project structure.",
          "Add placeholders for dynamic content (e.g., project name, author, version).",
          "Include a configuration file if needed for custom template behavior.",
          "Save your template locally or share it with your team.",
        ],
      },
      {
        heading: "Best Practices",
        body: "When creating templates, keep them maintainable and flexible:",
        list: [
          "Use clear folder and file naming conventions.",
          "Keep placeholder names consistent across files.",
          "Test templates by generating a sample project before sharing.",
        ],
      },
    ],
    navigation: {
      previousLink: "/docs/getting-started/whatIsBEAM",
      previousName: "What is BEAM?",
      nextLink: "/docs/getting-started/installTemplates",
      nextName: "Install Templates",
    },
  },

  installTemplates: {
    title: "Installing Templates",
    intro:
      "Templates must be installed in BEAM to create projects from them. BEAM provides multiple ways to install templates.",
    sections: [
      {
        heading: "Local Installation",
        body: "Copy an existing template folder into your BEAM templates directory. BEAM will automatically detect it and make it available for project creation.",
      },
      {
        heading: "Download Templates",
        body: "Use the `download template` command to fetch templates from an external source.",
      },
      {
        heading: "Install from path",
        body: "Provide a path pointing to a file. BEAM will download, extract, and register it automatically.",
      },
      {
        heading: "Verifying Installed Templates",
        body: "After installation, use `view templates` to list all available templates and ensure your new template is ready to use.",
      },
    ],
    navigation: {
      previousLink: "/docs/getting-started/templateStructure",
      previousName: "Template Structure",
      nextLink: "/docs/getting-started/commands",
      nextName: "Commands",
    },
  },

  commands: {
    title: "Commands",
    intro:
      "BEAM provides a set of commands for managing projects, templates, files, and utilities. Below is an overview of key commands.",
    sections: [
      {
        heading: "Project Commands",
        body: "Commands for managing your projects:",
        list: [
          "create project - generate a new project from an installed template",
          "copy project - duplicate an existing project with all files intact",
          "rename project - rename a project folder and update configuration references",
          "delete project - safely remove a project to the trash",
          "view projects - list all available projects and their templates",
        ],
      },
      {
        heading: "Template Commands",
        body: "Commands for managing templates:",
        list: [
          "create template - define a new reusable template",
          "install template - add a template to BEAM from a local folder",
          "download template - fetch a template from a remote source",
          "copy template - duplicate a template within the templates directory",
          "rename template - rename an installed template",
          "delete template - move a template to the trash",
          "view templates - list all installed templates",
        ],
      },
      {
        heading: "File & Trash Commands",
        body: "Commands for handling files and deleted items:",
        list: [
          "delete <file> - move a file to the trash",
          "recover <file> - restore a file from the trash",
          "empty trash - permanently remove deleted projects, templates, and files",
          "view trash - see contents of the trash",
        ],
      },
      {
        heading: "Utility Commands",
        body: "Other useful commands:",
        list: [
          "goto <directory> - change the current working directory",
          "view <directory> - view contents of a folder",
          "clear - clear the terminal screen",
          "help - display help and command usage information",
        ],
      },
    ],
    navigation: {
      previousLink: "/docs/getting-started/installTemplates",
      previousName: "Install Templates",
      nextLink: "/docs/commands/project/create",
      nextName: "Create Project",
    },
  },
} as const;
