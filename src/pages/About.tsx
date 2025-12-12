import React from 'react';
import Content from '../components/content/Content';
import { ABOUT_PAGE } from '../docs/about';

type AboutPageProps = {
 
 }
const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="page">
        <Content {...ABOUT_PAGE} />
    </div>
  );
};

export default AboutPage;