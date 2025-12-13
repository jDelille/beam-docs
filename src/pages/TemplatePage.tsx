import React, { useEffect, useState } from 'react';
import type { Template } from '../types/template';
import { fetchTemplateById } from '../utils/getTemplates';
import { useParams } from 'react-router-dom';
import TemplatePageContent from '../components/template-page-content/TemplatePageContent';

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
    <div className='page'>
      <div className='content'>
        <TemplatePageContent template={template} />
      </div>
    </div>
  );
};

export default TemplatePage;