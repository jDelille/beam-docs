import React from "react";
import { useNavigate } from "react-router-dom";

type TemplatesPageProps = {};
const TemplatesPage: React.FC<TemplatesPageProps> = () => {
    const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      name: "React - Firebase",
      rating: 5,
      downloads: 52882,
      author: "JustinD",
    },
    {
      id: 2,
      name: "Next.js SaaS Starter",
      rating: 5,
      downloads: 193024,
      author: "beamdev",
    },
    {
      id: 3,
      name: "Express REST API",
      rating: 4.5,
      downloads: 87412,
      author: "codeforge",
    },
    {
      id: 4,
      name: "C++ Game Loop Boilerplate",
      rating: 4,
      downloads: 22054,
      author: "justinD",
    },
    {
      id: 5,
      name: "Python CLI App",
      rating: 4.7,
      downloads: 45200,
      author: "pywizard",
    },
    {
      id: 6,
      name: "React Native Starter",
      rating: 4.3,
      downloads: 33881,
      author: "mobilemark",
    },
    {
      id: 7,
      name: "Node.js + MongoDB API",
      rating: 4.8,
      downloads: 112902,
      author: "stacksmith",
    },
    {
      id: 8,
      name: "Static HTML Landing Page",
      rating: 4.2,
      downloads: 60012,
      author: "uiartisan",
    },
    {
      id: 9,
      name: "Vite + TypeScript Template",
      rating: 5,
      downloads: 154883,
      author: "justinD",
    },
    {
      id: 10,
      name: "Go Microservice Boilerplate",
      rating: 4.6,
      downloads: 48331,
      author: "gopherlab",
    },
    {
      id: 11,
      name: "Full-Stack T3 Stack",
      rating: 5,
      downloads: 128449,
      author: "beamteam",
    },
    {
      id: 12,
      name: "PHP + MySQL Starter",
      rating: 4,
      downloads: 29874,
      author: "phpexpert",
    },
  ];
  return (
    <div className="page">
      <div className="content">
        <h1>BEAM starter templates</h1>
        <p>
          Discover BEAM templates to jumpstart your application or website
          build.
        </p>
        <div className="templates">
          {templates.map((template) => (
            <div className="template" onClick={() => navigate(`/templates/${template.id}`)}>
              <p className="author">{template.author} <span>{template.rating} stars</span></p>

              <h1 className="name">{template.name}</h1>
              <div className="stats">
                <p>Downloads: {template.downloads}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
