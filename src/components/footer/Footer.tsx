import React from "react";
import "./Footer.scss";
import ThemeToggle from "../theme-toggle/ThemeToggle";

type FooterProps = {};
const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="name">
          <h1>BEAM</h1>
          <p>© 2025 BEAM</p>
          <ThemeToggle />
        </div>
        <div className="sections">
          <ul className="section">
            <p className="section-title">Getting Started</p>
            <li>What is BEAM?</li>
            <li>Template structure</li>
            <li>Install templates</li>
            <li>Commands</li>
          </ul>
          <ul className="section">
            <p className="section-title">Project Commands</p>
            <li>Create</li>
            <li>Rename</li>
            <li>Copy</li>
            <li>Delete</li>
            <li>View</li>
          </ul>
          <ul className="section">
            <p className="section-title">Template Commands</p>
            <li>Create</li>
            <li>Install</li>
            <li>Copy</li>
            <li>Delete</li>
            <li>Download</li>
            <li>Upload</li>
            <li>Edit</li>
            <li>View</li>
          </ul>
          <ul className="section">
            <p className="section-title">Trash Commands</p>
            <li>View</li>
            <li>Empty</li>
            <li>Restore file / folder</li>
          </ul>
          {/* <ul className="section">
            <p className="section-title">Guides</p>
            <li>Template structure</li>
            <li>Creating a project</li>
            <li>Uploading templates</li>
            <li>Downloading templates</li>
          </ul> */}
        </div>
        <div className="newsletter">
          {/* <div className="section">
            <p className="section-title">Subscribe to our newsletter</p>
            <p>
              Stay updated on new releases and features, guides, and case
              studies.
            </p>
            <div className="input">
              <input type="text" placeholder="you@domain.com" />
              <button>Subscribe</button>
            </div>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
