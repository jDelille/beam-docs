import React, { useEffect, useState } from 'react';
import type { Template } from '../types/template';
import { fetchTemplateById } from '../utils/getTemplates';
import { useParams } from 'react-router-dom';

type TemplatePageProps = {
 
 }
const TemplatePage: React.FC<TemplatePageProps> = () => {
  const { id } = useParams<{ id: string }>();

  const [template, setTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState(true);

 useEffect(() => {
    if (!id) return;

    const loadTemplate = async () => {
      try {
        const data = await fetchTemplateById(id);
        setTemplate(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadTemplate();
  }, [id]);

  if (loading) return <div>Loading…</div>;
  if (!template) return <div>Template not found</div>;

  return (
    <div className="page">
       <div className="content">
        <div className='header'>
          <h1>{template.title}</h1>
          <p>by {template.author}</p>
          <p>{template.description}</p>
        </div>
        
        <div className="meta">
          ⭐ {template.rating} • ⬇ {template.downloads}
        </div>

        <pre>
          <code>{template.content}</code>
        </pre>
      </div>
    </div>
  );
};

export default TemplatePage;