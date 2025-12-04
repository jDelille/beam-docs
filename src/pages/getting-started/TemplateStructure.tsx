import React from 'react';
import Content from '../../components/content/Content';
import { TEMPLATE_STRUCTURE_DOC } from '../../docs/templateStructure';


type TemplateStructurePageProps = {
 
 }
const TemplateStructurePage: React.FC<TemplateStructurePageProps> = () => {
  return (
    <div className="page">
      <Content {...TEMPLATE_STRUCTURE_DOC} />
    </div>
  );
};

export default TemplateStructurePage;