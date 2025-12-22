import React from "react";
import { DownArrowIcon, FilterIcon } from "../../../icons";
import { useModalStore } from "../../../store/useModalStore";
import Modal from "../../modal/Modal";
import { uploadTemplate } from "../../../utils/uploadTemplate";
import "./TemplateFilter.scss";

type TemplateFilterProps = {};
const TemplateFilter: React.FC<TemplateFilterProps> = () => {
    const { modals, openModal, closeModal } = useModalStore();



 const handleUpload = async (data: { name: string; description: string; code: string }) => {
  await uploadTemplate({
    title: data.name,
    description: data.description,
    tags: [], // you can add tag input in modal too
    content: data.code,
    framework: "React",
    author: "Justin",
    userid: null,
  });

  closeModal("createTemplate");
};


  return (
    <div className="template-filter">
      {/* <div className="option">
        Filter
        <FilterIcon size={14} color="black" />
      </div>
      <div className="option">
        Sort By
        <DownArrowIcon size={18} color="black" />
      </div> */}
      <div className="option" style={{ marginLeft: "auto" }} onClick={() => openModal("createTemplate")}>
        Create a template
      </div>

      <Modal
        isOpen={modals["createTemplate"]}
        title={"Create Template"}
        onClose={() => closeModal("createTemplate")}
        description="Create and upload a template."
        buttonText="Create"
        onClick={handleUpload}
      />
    </div>
  );
};

export default TemplateFilter;
