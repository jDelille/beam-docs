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
            title: "Terminal output",
            description: `beam> create project
✔ What is your project named? » my-project
✔ Which template do you want to use? » React-Typescript.tmpl
✔ Do you want to customize placeholder values? » Yes

PAGE_COMPONENT [Page]: Page
PAGE_CLASSNAME [page]: page
NAVBAR_COMPONENT [Navbar]: Navbar
BUTTON_COMPONENT [Button]: PrimaryButton

Creating file: projects/my-project/app/Page.tsx
Creating file: projects/my-project/app/components/navbar/Navbar.tsx
Creating file: projects/my-project/app/components/reusable/button/Button.tsx 
Creating file: projects/my-project/styles/globals.scss
Creating file: projects/my-project/.gitignore
Creating file: projects/my-project/README.md

🚀 Project my-project created using the React-Typescript.tmpl template
`,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/getting-started/commands",
        previousName: "Commands",
        nextLink: "/docs/commands/project/rename",
        nextName: "Rename Project",
      },
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
            title: "Terminal output",
            description: `beam> rename project
✔ Which project do you want to rename? » my-project
Enter a new name for the project 'my-project': renamed-project
Project 'my-project' successfully renamed to 'renamed-project'.
            `,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/commands/project/create",
        previousName: "Create Project",
        nextLink: "/docs/commands/project/copy",
        nextName: "Copy Project",
      },
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
          list: ["copy project"],
        },
        {
          heading: "Example",
          body: "Copy 'my-app' to 'my-app-copy':",
          subSection: {
            title: "Terminal output",
            description: `beam> copy project
✔ Which project do you want to copy? » renamed-project
Enter a new name for the copied project: copied-project
Project copied successfully to 'projects/copied-project'
            
            `,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/commands/project/rename",
        previousName: "Rename Project",
        nextLink: "/docs/commands/project/delete",
        nextName: "Delete Project",
      },
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
          list: ["delete project"],
        },
        {
          heading: "Example",
          body: "Deleting a project:",
          subSection: {
            title: "Terminal output",
            description: `beam> delete project
✔ Which project do you want to delete? » renamed-project
✔ Are you sure you want to delete this project? » Yes
Project 'renamed-project' moved to trash successfully.
✔ Which project do you want to delete? » Quit  
            `,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/commands/project/copy",
        previousName: "Copy Project",
        nextLink: "/docs/commands/project/view",
        nextName: "View Project",
      },
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
            title: "Terminal output",
            description: `beam> view projects
Projects:
demo-project
my-project
            `,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/commands/project/delete",
        previousName: "Delete Project",
        nextLink: "/docs/commands/template/create",
        nextName: "Create Template",
      },
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
          body: "Running this command creates a new template file with some boilerplate code in it already to show you how to structure it.",
        },
        {
          heading: "Usage",
          body: "Run to create a new template:",
          list: ["create template"],
        },
        {
          heading: "Example",
          body: "Create a template called 'my-template':",
          subSection: {
            title: "Terminal output",
            description: `beam> create template
What is your template named? » my-template
Template 'my-template' created successfully in '.templates'!
            `,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/commands/project/view",
        previousName: "View Projects",
        nextLink: "/docs/commands/template/install",
        nextName: "Install Template",
      },
    },

    install: {
      title: "Install a Template",
      intro:
        "Installs a template into BEAM for project creation from local folders or remote sources.",
      sections: [
        {
          heading: "What does this command do?",
          body: "Adds a template to the BEAM templates directory, making it available for project creation. To successfully add a template, create a new .tmpl file on your desktop or anywhere on your computer, and right click it and select 'copy as path'. Paste this path into the command and install your new template.",
        },
        {
          heading: "Usage",
          body: "Install a template from a file on your computer:",
          list: ["install template <path>"],
        },
        {
          heading: "Example",
          body: "Install a local template called 'demo-template':",
          subSection: {
            title: "Terminal output",
            description: `beam> install template "C:\Users\\user\\Desktop\\demo-template.tmpl"
Installed template: .templates/demo-template.tmpl
            `,
          },
        },
      ],
      navigation: {
        previousLink: "/docs/commands/template/create",
        previousName: "Create Template",
        nextLink: "/docs/commands/template/copy",
        nextName: "Copy Template",
      },
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
            title: "Terminal output",
            description: "download template https://example.com/base-app.zip",
          },
        },
      ],
       navigation: {
        previousLink: "/docs/commands/template/delete",
        previousName: "Delete Template",
        nextLink: "/docs/commands/trash/view",
        nextName: "View Trash",
      }
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
          list: ["copy template"],
        },
        {
          heading: "Example",
          body: "Copy a template and rename to 'React-SQL':",
          subSection: {
            title: "Terminal output",
            description: `beam> copy template
✔ Which template do you want to copy? » demo-template.tmpl
Enter a new filename for the copied template: React-SQL          
Template copied successfully to .templates/React-SQL.tmpl
            `,
          },
        },
      ],
        navigation: {
        previousLink: "/docs/commands/template/install",
        previousName: "Install Template",
        nextLink: "/docs/commands/template/rename",
        nextName: "Rename Template",
      }
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
          body: "Run the command to rename a template:",
          list: ["rename template"],
        },
        {
          heading: "Example",
          body: "Rename template 'react' to 'React-Firebase':",
          subSection: {
            title: "Terminal output",
            description: `beam> rename template
✔ Which template do you want to rename? » react.tmpl
Enter a new name for the template 'react.tmpl': React-Firebase
Template 'react.tmpl' successfully renamed to 'React-Firebase'.
            `,
          },
        },
      ],
        navigation: {
        previousLink: "/docs/commands/template/copy",
        previousName: "Copy Template",
        nextLink: "/docs/commands/template/delete",
        nextName: "Delete Template",
      }
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
          list: ["delete template"],
        },
        {
          heading: "Example",
          body: "Delete multiple templates:",
          subSection: {
            title: "Terminal output",
            description: `beam> delete template
✔ Which template do you want to delete? » demo-template.tmpl
✔ Are you sure you want to delete this template? » Yes
Template 'demo-template.tmpl' deleted successfully.
✔ Which template do you want to delete? » my-template.tmpl
✔ Are you sure you want to delete this template? » Yes
Template 'my-template.tmpl' deleted successfully.
✔ Which template do you want to delete? » Quit
            `,
          },
        },
      ],
          navigation: {
        previousLink: "/docs/commands/template/rename",
        previousName: "Rename Template",
        nextLink: "/docs/commands/template/download",
        nextName: "Download Template",
      }
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
            title: "Terminal output",
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
       navigation: {
        previousLink: "/docs/commands/trash/recover",
        previousName: "Recover file / folder",
        nextLink: "/docs/commands/trash/empty",
        nextName: "Empty Trash",
      },
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
       navigation: {
        previousLink: "/docs/commands/trash/empty",
        previousName: "Empty Trash",
        nextLink: "/docs/getting-started/whatIsBEAM",
        nextName: "What Is BEAM?",
      },
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
       navigation: {
        previousLink: "/docs/commands/trash/view",
        previousName: "View Trash",
        nextLink: "/docs/commands/trash/recover",
        nextName: "Recover file / folder",
      },
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
