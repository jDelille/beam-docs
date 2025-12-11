import React from 'react';
import Content from '../components/content/Content';
import { HOME_DOC } from '../docs/home';

type HomePageProps = {
 
 }
const HomePage: React.FC<HomePageProps> = () => {
  return (
    <div className="page">
      <Content {...HOME_DOC} />
    </div>
  );
};

export default HomePage;