import React from "react";
import { BiPurchaseTagAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

type SidebarProps = {};
const LeftSidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      <div className="version">
        <div className="icon-wrapper">
          <BiPurchaseTagAlt size={22} color="#0072f5ff" />
        </div>
        <div className="text">
          <p>Latest Version</p>
          <span>1.0.1</span>
        </div>
      </div>
      <ul className="links">
        <p className="section-title">Getting Started</p>
        <li>
          <Link to={"/docs/getting-started"}>What is BEAM?</Link>
        </li>
        <li>
          <Link to={"/docs/getting-started/template-structure"}>Template Structure</Link>
        </li>
        <li>Install templates</li>
        <li>Commands</li>

        <p className="section-title">Project Commands</p>
        <li>
          <Link to={"/docs/commands/project/create"} className="active">Create project</Link>
        </li>

        <li>
          <Link to={"/docs/commands/project/rename"} className="active">Rename project</Link>
        </li>
        <li>
          <Link to={"/docs/commands/project/copy"} className="active">Copy project</Link>
        </li>
        <li>
          <Link to={"/docs/commands/project/delete"} className="active">Delete project</Link>
        </li>
        <li>
          <Link to={"/docs/commands/project/view"} className="active">View projects</Link>
        </li>
        <p className="section-title">Template Commands</p>
        <li>
          <Link to={"/docs/commands/template/create"} className="active">Create template</Link>
        </li>
        <li className="active">Install template</li>
        <li className="active">Copy template</li>
        <li className="active">Delete template</li>
        <li>Download template</li>
        <li>Upload template</li>
        <li>Edit template</li>
        <li className="active">View templates</li>
        <p className="section-title">Trash Commands</p>

        <li className="active">View trash</li>
        <li className="active">Empty trash</li>
        <li className="active">Restore file</li>

        <p className="section-title">Guides</p>
        <li>Template Structure</li>
        <li>Creating a project</li>
        <li>Uploading templates</li>
        <li>Downloading templates</li>

        <p className="section-title">About the BEAM CLI</p>
        <li>About the examples</li>
        <li>Github</li>
      </ul>
    </div>
  );
};

export default LeftSidebar;
