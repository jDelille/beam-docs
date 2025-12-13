import React, { useEffect, useState } from "react";
import type { Template } from "../../types/template";
import { supabase } from "../../lib/supabase";
import { useNavigate } from "react-router-dom";
import "./Templates.scss";

type TemplatesProps = {};
const Templates: React.FC<TemplatesProps> = () => {
  const [templates, setTemplates] = useState<Template[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data, error } = await supabase.from("templates").select("*");

      if (error) {
        console.error(error);
      } else {
        setTemplates(data);
      }
    };

    fetchTemplates();
  }, []);

  console.log(templates);

  return (
    <div className="templates">
      <div className="templates">
        {templates.length == 0 && <p>Loading templates</p>}
        {templates.map((template) => (
          <div
            className="template"
            onClick={() => navigate(`/templates/${template.id}`)}
          >
            <p className="author">
              {template.author} <span>{template.rating} stars</span>
            </p>

            <h1 className="name">{template.title}</h1>
            <div className="stats">
              <p>Downloads: {template.downloads}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
