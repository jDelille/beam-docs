export const COMMAND_DOCS = {
  project: {
    create: {
      title: "Create a Project",
      intro:
        "Creates a new project from an installed template. This command copies the template, replaces placeholders, and sets up a ready-to-use project directory.",

      sections: [
        {
          heading: "What does this command do?",
          body: "Generates a new project based on a template. Resolves placeholders, builds nested directories, and prepares a ready-to-code structure.",
        },
        {
          heading: "Usage",
          body: "Run the command in the terminal:",
          list: ["create project"],
        },
        {
          heading: "Example",
          body: "Create a project using the default template:",
          subSection: {
            title: "Basic Example",
            description: "create project",
          },
        },
      ],
    },

    copy: {
      title: "Copy a Project",
      intro:
        "Duplicates an existing project into a new folder while preserving all files and configurations.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Clones an existing project to a new directory, keeping all files, templates, and configurations intact.",
        },
        {
          heading: "Usage",
          body: "Run the command specifying source and destination:",
          list: ["copy project <source> <destination>"],
        },
        {
          heading: "Example",
          body: "Copy 'my-app' to 'my-app-copy':",
          subSection: {
            title: "Example",
            description: "copy project my-app my-app-copy",
          },
        },
      ],
    },

    rename: {
      title: "Rename a Project",
      intro:
        "Renames a project folder and updates internal references if necessary.",

      sections: [
        {
          heading: "What does this command do?",
          body: "Changes the folder name and updates configuration references inside the project.",
        },
        {
          heading: "Usage",
          body: "Run the command with old and new project names:",
          list: ["rename project <old-name> <new-name>"],
        },
        {
          heading: "Example",
          body: "Renaming 'old-project' to 'new-project':",
          subSection: {
            title: "Example",
            description: "rename project old-project new-project",
          },
        },
      ],
    },

    delete: {
      title: "Delete a Project",
      intro:
        "Removes a project folder and optionally cleans up generated files.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Deletes the project folder. By default, it can move it to the trash for recovery.",
        },
        {
          heading: "Usage",
          body: "Specify the project to delete:",
          list: ["delete project <name>"],
        },
        {
          heading: "Example",
          body: "Delete project 'my-app':",
          subSection: {
            title: "Example",
            description: "delete project my-app",
          },
        },
      ],
    },

    view: {
      title: "View Projects",
      intro:
        "Shows all local projects including template info and creation dates.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Provides a list of all projects, allowing you to see their name.",
        },
        {
          heading: "Usage",
          body: "Run to view all projects:",
          list: ["view projects"],
        },
        {
          heading: "Example",
          body: "Viewing all projects:",
          subSection: {
            title: "Example",
            description: "view projects",
          },
        },
      ],
    },
  },

  template: {
    create: {
      title: "Create a Template",
      intro:
        "Generates a new reusable template with folders, files, placeholders, and configuration.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Creates a template that defines structure, files, and placeholders used for generating projects.",
        },
        {
          heading: "Usage",
          body: "Run to create a new template:",
          list: ["create template <name>"],
        },
        {
          heading: "Example",
          body: "Create a template called 'base-app':",
          subSection: {
            title: "Example",
            description: "create template base-app",
          },
        },
      ],
    },

    install: {
      title: "Install a Template",
      intro:
        "Installs a template into BEAM for project creation from local folders or remote sources.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Adds a template to the BEAM templates directory, making it available for project creation.",
        },
        {
          heading: "Usage",
          body: "Install a template from a folder or URL:",
          list: ["install template <path-or-name>"],
        },
        {
          heading: "Example",
          body: "Install a local template called 'base-app':",
          subSection: {
            title: "Example",
            description: "install template base-app",
          },
        },
      ],
    },

    download: {
      title: "Download a Template",
      intro: "Downloads a template from a remote URL into BEAM.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Fetches a template from an online source and installs it locally.",
        },
        {
          heading: "Usage",
          body: "Run the command with the template URL:",
          list: ["download template <url>"],
        },
        {
          heading: "Example",
          body: "Download a template from a remote source:",
          subSection: {
            title: "Example",
            description: "download template https://example.com/base-app.zip",
          },
        },
      ],
    },

    copy: {
      title: "Copy a Template",
      intro:
        "Creates a duplicate of an existing template in the templates directory.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Clones a template so you can modify or reuse it without affecting the original.",
        },
        {
          heading: "Usage",
          body: "Run the command specifying source and destination template names:",
          list: ["copy template <source> <destination>"],
        },
        {
          heading: "Example",
          body: "Copy template 'base-app' to 'base-app-copy':",
          subSection: {
            title: "Example",
            description: "copy template base-app base-app-copy",
          },
        },
      ],
    },

    rename: {
      title: "Rename a Template",
      intro:
        "Renames an existing template and updates its internal references.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Changes the template folder name while maintaining references in BEAM's template index.",
        },
        {
          heading: "Usage",
          body: "Run the command with old and new template names:",
          list: ["rename template <old-name> <new-name>"],
        },
        {
          heading: "Example",
          body: "Rename template 'base-app' to 'core-app':",
          subSection: {
            title: "Example",
            description: "rename template base-app core-app",
          },
        },
      ],
    },

    delete: {
      title: "Delete a Template",
      intro: "Removes a template from BEAM's templates directory.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Deletes a template, removing all associated files. Use carefully to avoid losing reusable project structures.",
        },
        {
          heading: "Usage",
          body: "Run to delete a template:",
          list: ["delete template <name>"],
        },
        {
          heading: "Example",
          body: "Delete template 'base-app':",
          subSection: {
            title: "Example",
            description: "delete template base-app",
          },
        },
      ],
    },

    list: {
      title: "View Templates",
      intro: "Shows all local templates.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Provides a list of all templates, allowing you to see their name.",
        },
        {
          heading: "Usage",
          body: "Run to view all templates:",
          list: ["view templates"],
        },
        {
          heading: "Example",
          body: "Viewing all templates:",
          subSection: {
            title: "Example",
            description: "view templates",
          },
        },
      ],
    },
  },

  trash: {
    clear: {
      title: "Clear Terminal",
      intro: "Clears all content from the terminal screen.",
      sections: [
        {
          heading: "Usage",
          body: "Simply run:",
          list: ["clear"],
        },
      ],
    },

    goto: {
      title: "Goto Directory or Project",
      intro:
        "Changes the current working directory or navigates to a project folder.",
      sections: [
        {
          heading: "Usage",
          body: "Navigate using folder name or project name:",
          list: ["goto <folder-or-project>"],
        },
      ],
    },

    view: {
      title: "View Trash",
      intro: "Displays the content of the trash folder.",
      sections: [
        {
          heading: "Usage",
          body: "Run the command to view the trash:",
          list: ["view trash"],
        },
      ],
    },

    recover: {
      title: "Recover File",
      intro: "Restores a deleted file from the trash.",
      sections: [
        {
          heading: "Usage",
          body: "Run with the file name to recover:",
          list: ["recover <file-name>"],
        },
      ],
    },

    empty: {
      title: "Empty Trash",
      intro: "Permanently deletes all files in the trash.",
      sections: [
        {
          heading: "Usage",
          body: "Run the command to empty trash:",
          list: ["empty trash"],
        },
      ],
    },

    help: {
      title: "Help",
      intro: "Displays the help menu for BEAM commands.",
      sections: [
        {
          heading: "Usage",
          body: "Run to see all available commands and usage instructions:",
          list: ["help"],
        },
      ],
    },
  },
} as const;
