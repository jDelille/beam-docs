import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.scss";

type SidebarProps = {};
const LeftSidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="sidebar">
      {/* <div className="version">
        <div className="icon-wrapper">
          <BiPurchaseTagAlt size={22} color="#0072f5ff" />
        </div>
        <div className="text">
          <p>Latest Version</p>
          <span>1.0.1</span>
        </div>
      </div> */}
      <ul className="links">
        <p className="section-title">Getting Started</p>
        <li>
          <NavLink to="/docs/getting-started/whatIsBeam" className={({ isActive }) => isActive ? "active" : ""}>
            What is BEAM?
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/getting-started/templateStructure" className={({ isActive }) => isActive ? "active" : ""}>
            Template Structure
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/getting-started/installTemplates" className={({ isActive }) => isActive ? "active" : ""}>
            Install Templates
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/getting-started/commands" className={({ isActive }) => isActive ? "active" : ""}>
            Commands
          </NavLink>
        </li>

        <p className="section-title">Project Commands</p>
        <li>
          <NavLink to="/docs/commands/project/create" className={({ isActive }) => isActive ? "active" : ""}>
            Create
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/project/rename" className={({ isActive }) => isActive ? "active" : ""}>
            Rename
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/project/copy" className={({ isActive }) => isActive ? "active" : ""}>
            Copy
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/project/delete" className={({ isActive }) => isActive ? "active" : ""}>
            Delete
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/project/view" className={({ isActive }) => isActive ? "active" : ""}>
            View
          </NavLink>
        </li>

        <p className="section-title">Template Commands</p>
        <li>
          <NavLink to="/docs/commands/template/create" className={({ isActive }) => isActive ? "active" : ""}>
            Create 
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/template/install" className={({ isActive }) => isActive ? "active" : ""}>
            Install 
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/template/copy" className={({ isActive }) => isActive ? "active" : ""}>
            Copy 
          </NavLink>
        </li>
         <li>
          <NavLink to="/docs/commands/template/rename" className={({ isActive }) => isActive ? "active" : ""}>
            Rename 
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/template/delete" className={({ isActive }) => isActive ? "active" : ""}>
            Delete 
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/template/download" className={({ isActive }) => isActive ? "active" : ""}>
            Download 
          </NavLink>
        </li>
        <li className="greyed-out">Upload </li>

        <p className="section-title">Trash Commands</p>
        <li>
          <NavLink to="/docs/commands/trash/view" className={({ isActive }) => isActive ? "active" : ""}>
            View 
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/trash/empty" className={({ isActive }) => isActive ? "active" : ""}>
            Empty
          </NavLink>
        </li>
        <li>
          <NavLink to="/docs/commands/trash/recover" className={({ isActive }) => isActive ? "active" : ""}>
            Recover
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default LeftSidebar;