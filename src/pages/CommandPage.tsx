import React from "react";
import Content from "../components/content/Content";
import { COMMAND_DOCS } from "../docs/commandDocs";
import { useParams } from "react-router-dom";

type CommandPageProps = {};
const CommandPage: React.FC<CommandPageProps> = () => {
  const { category, command } = useParams<{
    category: string;
    command: string;
  }>();
  if (!category || !command) {
    return <p>Invalid command URL</p>;
  }

  const categoryKey = category as keyof typeof COMMAND_DOCS;
  const commandKey = command as keyof typeof COMMAND_DOCS[typeof categoryKey];

  const commandData = COMMAND_DOCS[categoryKey]?.[commandKey];

  if (!commandData) {
    return <p>Command not found.</p>;
  }

  console.log(categoryKey, commandKey)

  return (
    <div className="page">
      <Content {...commandData} />
    </div>
  );
};

export default CommandPage;
