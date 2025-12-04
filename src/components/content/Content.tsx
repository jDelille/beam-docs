import React from "react";
import "./Content.scss";

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

interface ContentProps {
  title: string;
  intro: string;
  sections: readonly Section[]; 
}

const Content: React.FC<ContentProps> = ({ title, intro, sections }) => {
  return (
    <article className="content">
      <h1>{title}</h1>
      <p>{intro}</p>

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
    </article>
  );
};

export default Content;
