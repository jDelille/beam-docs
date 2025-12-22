import type React from "react";
import { CloseIcon } from "../../icons";
import { useEffect, useState } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import { TEMPLATE_BOILERPLATE } from "../../docs/templateBoilerplate";
import "./Modal.scss";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  buttonText: string;
  onClick: (data: { name: string; description: string; code: string }) => void;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  buttonText,
  onClick,
}) => {
  if (!isOpen) return null;

  useBodyScrollLock(isOpen);

  const [name, setName] = useState("My Template");
  const [desc, setDesc] = useState("This is for a React Typescript project.");
  const [code, setCode] = useState(() => TEMPLATE_BOILERPLATE.body);

  return (
    <div className="overlay">
      <div className="modal">
        <div className="header">
          <h2 className="title">{title}</h2>
          <div className="icon" onClick={onClose}>
            <CloseIcon size={20} color="black" />
          </div>
        </div>
        <div className="modal-body">
          <div className="options">
            <div className="option">
              <label htmlFor="choose-name">Name</label>
              <input
                type="text"
                id="choose-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="option">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div className="tags">
              <label htmlFor="tags">Tags</label>
            </div>
          </div>
          <div className="template-code">
            <textarea value={code} onChange={(e) => setCode(e.target.value)} />
          </div>
        </div>

        <div className="modal-footer">
          <button
            onClick={() =>
              onClick({
                name,
                description: desc,
                code,
              })
            }
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
