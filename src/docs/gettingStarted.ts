export const GETTING_STARTED_DOC = {
  title: "BEAM Docs",
  intro: "Welcome to the official BEAM documentation!",
  sections: [
    {
      heading: "What is BEAM?",
      body: `BEAM is a command-line tool for generating new projects from reusable,
customizable templates. It allows you to define a project structure one
time, then create new projects instantly without copying folders,
renaming files, or handling boilerplate by hand.

Whether you're a solo developer or part of a larger team, BEAM helps
maintain consistency, speed up development, and eliminate the repetitive
setup work that slows you down.`,
    },
    {
      heading: "How to use the docs",
      body: `The BEAM documentation is organized into three main sections:`,
      list: [
        "Getting Started: Learn installation, setup, and how to create your first template and project.",
        "Commands: A complete list of every BEAM command, including arguments, examples, and usage notes.",
        "Guides: Step-by-step tutorials for real workflows like installing templates, replacing placeholders, trash management, and more.",
      ],
    },
    {
      heading: "Creating a Template",
      body: `Templates are reusable blueprints for generating new projects. A
template can contain folders, files, placeholders, configuration, and
anything else required to scaffold a project.

Below is the basic workflow for creating your first template:`,
      subSection: {
        title: "Getting Started",
        description: `Learn how to build a simple template, define placeholders, and make it
ready to use with the create project command.`,
      },
    },
    {
      heading: "Installing a Template",
      body: `Once a template exists, you can import it from local storage, download
it, or install it from an external source.

BEAM allows you to install templates using:`,
      list: ["Local folders", "Downloaded ZIP files", "Remote URLs", "Package exports (coming soon)"],
      subSection: {
        title: "Installing Your First Template",
        description: "Follow the guide to add templates to BEAM and verify they are ready to use.",
      },
    },
    {
      heading: "Using a Template",
      body: `After installing a template, you can generate new projects instantly.
BEAM will copy the template, replace placeholders, and build your project
directory automatically.

Learn how to:`,
      list: [
        "Create a project from a template",
        "Customize placeholder values",
        "Handle nested directories and file replacements",
        "Manage template versions",
      ],
      subSection: {
        title: "Create Your First Project",
        description: `A walkthrough of the create project command and how BEAM
turns templates into ready-to-code applications.`,
      },
    },
    {
      heading: "Next Steps",
      body: `Once you're comfortable with the basics, dive into the advanced features
BEAM offers:`,
      list: [
        "Trash system for safe deletion and restoration",
        "Template management commands",
        "File replacement and placeholder scanning",
        "Building custom automation workflows",
      ],
      subSection: {
        title: "Continue Learning",
        description: "Explore the guides and full API reference to unlock the complete power of BEAM.",
      },
    },
  ],
} as const;