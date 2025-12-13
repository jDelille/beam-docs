import React from "react";
import Templates from "../components/templates/Template";
import TemplateFilter from "../components/filter/template-filter/TemplateFilter";

type TemplatesPageProps = {};
const TemplatesPage: React.FC<TemplatesPageProps> = () => {

  return (
    <div className="page">
      <div className="content">
        <h1>BEAM starter templates</h1>
        <p>
          Discover BEAM templates to jumpstart your application or website
          build.
        </p>
        <TemplateFilter />
        <Templates />
      </div>
    </div>
  );
};

export default TemplatesPage;
