import React from "react";
import "./Content.scss";
import { Link } from "react-router-dom";
import { LeftArrowIcon, RightArrowIcon } from "../../icons";
import { useTheme } from "../../context/ThemeContext";

interface SubSection {
  title: string;
  description: string;
}

interface Section {
  heading: string;
  body: string;
  list?: readonly string[];
  subSection?: SubSection;
}

interface Navigation {
  previousName: string;
  previousLink: string;
  nextName: string;
  nextLink: string;
}

interface ContentProps {
  title: string;
  intro: string;
  sections: readonly Section[]; 
  navigation: Navigation;
}

const Content: React.FC<ContentProps> = ({ title, intro, sections, navigation }) => {
    const { theme } = useTheme();

    const isLightMode = theme === "light";
  
  return (
    <article className="content">
      <h1>{title}</h1>
      <p className="intro">{intro}</p>

      {sections.map((s, i) => (
        <div key={i}>
          <h2 className="docs-heading">{s.heading}</h2>
          <p className="paragraph">{s.body}</p>

          {s.list && (
            <ul className="paragraph">
              {s.list.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          )}

          {s.subSection && (
            <div className="sub-heading">
              <h3>{s.subSection.title}</h3>
              <p>{s.subSection.description}</p>
            </div>
          )}
        </div>
        
      ))}

       {navigation && (
        <div className="navigation-buttons">
          {navigation.previousLink && (
            <Link to={navigation.previousLink} className="nav-button prev">
              <LeftArrowIcon size={14} color={isLightMode ? "gray" : "white"}/>
              {navigation.previousName}
            </Link>
          )}
          {navigation.nextLink && (
            <Link to={navigation.nextLink} className="nav-button next">
              {navigation.nextName}
              <RightArrowIcon size={14} color={isLightMode ? "gray" : "white"}/>
            </Link>
          )}
        </div>
      )}
      
    </article>
  );
};

export default Content;
