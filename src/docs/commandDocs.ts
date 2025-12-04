export const COMMAND_DOCS = {
  project: {
    create: {
      title: "Create a Project",
      intro:
        "Creates a new project from an installed template. This command copies the template, replaces placeholders, and sets up a ready-to-use project directory.",

      sections: [
        {
          heading: "What does this command do?",
          body: "The create command takes a template and generates a new project folder based on it. It resolves placeholders, builds nested directories, and prepares a clean project structure.",
        },
        {
          heading: "Usage",
          body: "Run the command in any directory:",
          list: ["create project"],
        },
        {
          heading: "Example",
          body: "Here is a basic example of creating a project from the default template:",
          subSection: {
            title: "Basic Example",
            description: `create project`,
          },
        },
      ],
    },
    rename: {
      title: "Rename a Project",
      intro:
        "Renames an existing project folder and updates its internal configuration references if needed.",
      sections: [
        {
          heading: "What does this command do?",
          body: "The rename command changes the name of an existing project folder. It also updates references in configuration files to match the new name.",
        },
        {
          heading: "Usage",
          body: "Run the command with the old and new project names:",
          list: ["rename project"],
        },
        {
          heading: "Example",
          body: "Renaming 'old-project' to 'new-project':",
          subSection: {
            title: "Example",
            description: "rename project",
          },
        },
      ],
    },
    copy: {
      title: "Copy a Project",
      intro:
        "Creates a duplicate of an existing project in a new folder while keeping all files and configurations intact.",
      sections: [
        {
          heading: "What does this command do?",
          body: "The copy command clones an existing project into a new folder. All project files, templates, and configurations are preserved in the copy.",
        },
        {
          heading: "Usage",
          body: "Run the command with the source and destination names:",
          list: ["copy project"],
        },
        {
          heading: "Example",
          body: "Copying 'my-app' to 'my-app-copy':",
          subSection: {
            title: "Example",
            description: "copy project",
          },
        },
      ],
    },
    delete: {
      title: "Delete a Project",
      intro:
        "Removes an existing project folder and optionally cleans up any generated files or cached templates.",
      sections: [
        {
          heading: "What does this command do?",
          body: "The delete command removes a project from your file system. You can optionally back up the project before deletion.",
        },
        {
          heading: "Usage",
          body: "Run the command with the project name:",
          list: ["delete project <name>"],
        },
        {
          heading: "Example",
          body: "Deleting a project named 'my-app':",
          subSection: {
            title: "Example",
            description: "delete project my-app",
          },
        },
      ],
    },
    list: {
      title: "List Projects",
      intro:
        "Displays all existing projects available locally, including templates used and their creation dates.",
      sections: [
        {
          heading: "What does this command do?",
          body: "The list command shows a summary of all projects on your machine, allowing you to quickly see their names, templates, and status.",
        },
        {
          heading: "Usage",
          body: "Simply run:",
          list: ["list projects"],
        },
        {
          heading: "Example",
          body: "Listing all projects:",
          subSection: {
            title: "Example",
            description: "list projects",
          },
        },
      ],
    },
  },

  template: {
    create: {
      title: "Create a Template",
      intro:
        "Generates a new reusable template. Templates can contain folders, files, placeholder variables, and a configuration file that BEAM will read.",

      sections: [
        {
          heading: "What does this command do?",
          body: "The template create command creates a new template file with some guidelines.",
        },
        {
          heading: "Usage",
          body: "Run the following:",
          list: [
            "create template",
          ],
        },
        {
          heading: "Example",
          body: "Here is a common use case:",
          subSection: {
            title: "Example: Creating a Base Template",
            description: `create template`,
          },
        },
      ],
    },
  },
} as const;
