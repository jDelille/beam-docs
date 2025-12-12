import React from "react";
import Content from "../components/content/Content";
import { COMMAND_DOCS } from "../docs/commandDocs";
import { useParams } from "react-router-dom";

type Section = {
  heading: string;
  body: string;
  list?: string[];
  subSection?: {
    title: string;
    description: string;
  };
};

type CommandData = {
  title: string;
  intro: string;
  sections: Section[];
  navigation: {
    nextLink: string;
    nextName: string;
    previousName: string;
    previousLink: string;
  }
};

type CommandPageProps = {};

const CommandPage: React.FC<CommandPageProps> = () => {
  const { category, command } = useParams<{ category: string; command: string }>();

  if (!category || !command) return <p>Invalid command URL</p>;

  const categoryData = COMMAND_DOCS[category as keyof typeof COMMAND_DOCS];
  if (!categoryData) return <p>Category not found.</p>;

  const commandData = categoryData[command as keyof typeof categoryData] as CommandData;
  if (!commandData) return <p>Command not found.</p>;

  return (
    <div className="page">
      <Content {...commandData} />
    </div>
  );
};

export default CommandPage;