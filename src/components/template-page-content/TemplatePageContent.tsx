import React from "react";
import type { Template } from "../../types/template";
import "./TemplatePageContent.scss";
import { Link } from "react-router-dom";
import { LeftArrowIcon } from "../../icons";

type TemplatePageContentProps = {
  template: Template;
};
const TemplatePageContent: React.FC<TemplatePageContentProps> = ({
  template,
}) => {
  return (
    <div className="template-page-content">
      <div className="back">
        <Link to="/templates">
          <LeftArrowIcon size={12} color="" />
          Back to Templates
        </Link>
      </div>

      <div className="header">
        <div className="title">
          {template.title}
          <div className="meta">
            <p>{template.rating}/5 </p>
            <p>•</p>
            <p>{template.downloads} downloads</p>
          </div>
        </div>
        <p className="description">{template.description}</p>
        <p>Created by {template.author}</p>
      </div>
      <div className="template-file">
        <pre>
          <code>{template.content}</code>
        </pre>
      </div>

      <div className="getting-started">
        <p className="title">Getting Started</p>
        <p>TODO: </p>
        <p>Have user add more data about the template when they upload one.</p>
        <p>Display the languages for the template</p>
        <p>Show placeholders in template </p>
        <p>Have copy button on the template code </p>
        <p>Show accurate rating and downloads </p>
        <p>Maybe add user accounts so people can see other templates that user made or liked</p>
        <p>People can put their user id or something into the cli command when they upload a template</p>
      </div>
    </div>
  );
};

export default TemplatePageContent;
