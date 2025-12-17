import React from "react";
import { DownArrowIcon, FilterIcon } from "../../../icons";
import "./TemplateFilter.scss";

type TemplateFilterProps = {};
const TemplateFilter: React.FC<TemplateFilterProps> = () => {
  return (
    <div className="template-filter">
      <div className="option">
        Filter
        <FilterIcon size={14} color="black" />
      </div>
      <div className="option">
        Sort By
        <DownArrowIcon size={18} color="black" />
      </div>
      <div className="option" style={{marginLeft: "auto"}}>
        Create a template
      </div>
    </div>
  );
};

export default TemplateFilter;
