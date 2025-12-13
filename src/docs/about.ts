export const ABOUT_PAGE = {
  title: "About BEAM CLI",
  intro:
    "BEAM CLI is a command-line tool designed to streamline project and template management. Its name reflects the core workflow: Blueprint, Execute, Adapt, and Manage—steps that guide you from project creation to ongoing management.",

  sections: [
    {
      heading: "What is BEAM CLI?",
      body: "BEAM CLI helps developers create, manage, and maintain projects and templates efficiently. It automates repetitive tasks, enforces consistent project structure, and provides a smooth workflow from start to finish.",
    },
    {
      heading: "The BEAM Workflow",
      body: "The CLI itself is designed around the acronym BEAM, representing the four main steps of project management:",
      list: [
        "Blueprint - Plan your project or create a reusable template.",
        "Execute - Generate a new project from a template quickly.",
        "Adapt - Rename, copy, or modify projects as needed.",
        "Manage - List, delete, or maintain your projects efficiently.",
      ],
    },
    {
      heading: "Key Features",
      body: "BEAM CLI provides the following features to streamline your workflow:",
      list: [
        "Create new projects from templates with placeholders resolved automatically",
        "Copy and rename projects without breaking references",
        "Create reusable templates for consistent project structures",
        "List all projects with template info and creation dates",
        "Delete projects safely while optionally backing up important data",
      ],
    },
    {
      heading: "Getting Started",
      body: "To start using BEAM CLI, install it and explore the available commands. Here are a few examples:",
      list: ["beam project create <name>", "beam template create <template-name>", "beam project list"],
    },
    {
      heading: "Example",
      body: "Here’s a quick example of creating a new project from a template:",
      subSection: {
        title: "Create a New Project",
        description: "beam project create my-app",
      },
    },
    {
      heading: "Support & Documentation",
      body: "For detailed guides, visit the official documentation or reach out to support channels if you encounter issues.",
    },
  ],
  navigation: {
        previousLink: "/templates",
        previousName: "Templates",
        nextLink: "/docs/getting-started/whatIsBEAM",
        nextName: "Rename Project",
      },
} as const;