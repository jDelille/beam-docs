export const HOME_DOC = {
  title: "Welcome to BEAM Docs",
  intro: "BEAM is a CLI tool that helps you generate projects instantly from reusable, customizable templates.",
  sections: [
    {
      heading: "Why BEAM?",
      body: `Tired of repeating the same setup steps for every project? BEAM streamlines your workflow
by letting you define templates once and generate new projects with a single command.
It’s perfect for solo developers and teams alike.`,
    },
    {
      heading: "Get Started Quickly",
      body: `Start building projects right away. Visit the Getting Started section to learn how to:
- Create templates
- Install templates locally or remotely
- Generate new projects automatically`,
    },
    {
      heading: "Explore Commands",
      body: `Every BEAM command is documented with usage, arguments, and examples.
You can browse the Commands section to see everything BEAM can do.`,
    },
    {
      heading: "Step-by-Step Guides",
      body: `Learn workflows with practical guides:
- Installing templates
- Using placeholders
- Managing files and directories safely
- Leveraging advanced automation`,
    },
    {
      heading: "Next Steps",
      body: `Ready to dive deeper? Check out the Getting Started guide for a complete walkthrough,
then explore Commands and Guides to unlock BEAM’s full potential.`,
    },
  ],
   navigation: {
        previousLink: "/templates",
        previousName: "Templates",
        nextLink: "/docs/getting-started/whatIsBeam",
        nextName: "Rename Project",
      },
} as const;