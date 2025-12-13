import React from 'react';
import './TemplateFilter.scss';
import { DownArrowIcon, FilterIcon } from '../../../icons';

type TemplateFilterProps = {
 
 }
const TemplateFilter: React.FC<TemplateFilterProps> = () => {
  return (
    <div className="template-filter">
      <div className='option'>
        Filter
        <FilterIcon size={14} color='black'/>
        </div>
      <div className='option'>
        Sort By
        <DownArrowIcon size={18} color='black'/>
        </div>
    </div>
  );
};

export default TemplateFilter;