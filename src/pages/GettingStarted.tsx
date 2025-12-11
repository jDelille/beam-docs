import React from "react";

import { useParams } from "react-router-dom";
import Content from "../components/content/Content";
import { GETTING_STARTED_DOCS } from "../docs/gettingStarted";

type GettingStartedPageProps = {};
const GettingStartedPage: React.FC<GettingStartedPageProps> = () => {
  const { section } = useParams<{ section: string }>();

  if (!section) return <p>Invalid URL</p>;

  const pageData = GETTING_STARTED_DOCS[section as keyof typeof GETTING_STARTED_DOCS];

  if (!pageData) return <p>Page not found.</p>;

  return (
    <div className="page">
      <Content {...pageData} />
    </div>
  );
};

export default GettingStartedPage;