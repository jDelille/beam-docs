export const TEMPLATE_BOILERPLATE = {
    body: `%%%
name: React-Firebase Template
description: Starter project for react frontend and a firebase db
author: Justin D
tags: react, typescript, scss
framework: react
%%%

-- app/Page.tsx
import Navbar from "./components/navbar/Navbar"
  export default function [PAGE_COMPONENT=Page]() {
    return (
      <div className="[PAGE_CLASSNAME=page]">
        <[NAVBAR_COMPONENT=Navbar] />
      </div>
    );
  }

-- app/components/navbar/Navbar.tsx
import React from "react";
import [BUTTON_COMPONENT=Button] from "../reusable/button/Button"

  type [NAVBAR_COMPONENT]Props = {
    isAuthPage?: boolean;
  };

  const [NAVBAR_COMPONENT]: React.FC<[NAVBAR_COMPONENT]Props> = ({isAuthPage}) => {

    const handleClick = () => {
      console.log("Clicked...");
    }

    return (
      <nav className="navbar">
        <div className="logo">
          <img src="" alt="" />
        </div>
        <[BUTTON_COMPONENT] text={isAuthPage ? "Login" : "Signup"} onClick={handleClick} />
      </nav>
    );
  }

  export default [NAVBAR_COMPONENT];

-- app/components/reusable/button/Button.tsx 
import React from "react";

  type [BUTTON_COMPONENT]Props = {
    text: string;
    onClick: () => void;
  };

  const [BUTTON_COMPONENT]: React.FC<[BUTTON_COMPONENT]Props> = ({text, onClick}) => {
    return (
      <button className="button" onClick={onClick}>
        <span>{text}</span>
      </button>
    );
  }

  export default [BUTTON_COMPONENT];

-- styles/globals.scss
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: "Poppins", sans-serif;
  }

-- .gitignore
  **/node_modules/

-- README.md
  This is a project created with BEAM CLI.
`
}