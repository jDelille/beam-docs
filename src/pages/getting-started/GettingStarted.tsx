import React from 'react';
import Content from '../../components/content/Content';
import { GETTING_STARTED_DOC } from '../../docs/gettingStarted';

type GettingStartedPageProps = {
 
 }
const GettingStartedPage: React.FC<GettingStartedPageProps> = () => {
  return (
    <div className="page">
      <Content {...GETTING_STARTED_DOC} />
    </div>
  );
};

export default GettingStartedPage;