import React, { useEffect, useState } from "react";
import { useAnimate, stagger } from "framer-motion";

import "./header.css";
import logo from "../../img/logo.png";

const staggerMenuItems = stagger(0.1, { startDelay: 0.15 });
function useMenuAnimation(isOpen) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      "ul",
      {
        clipPath: isOpen
          ? "inset(0% 0% 0% 0% round 10px)"
          : "inset(10% 50% 90% 50% round 10px)",
      },
      {
        type: "spring",
        bounce: 0,
        duration: 0.5,
      }
    );

    animate(
      "li",
      isOpen
        ? { opacity: 1, scale: 1, filter: "blur(0px)" }
        : { opacity: 0, scale: 0.3, filter: "blur(25px)" },
      {
        duration: 0.25,
        delay: isOpen ? staggerMenuItems : 0,
      }
    );
  }, [isOpen, animate]);

  return scope;
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const scope = useMenuAnimation(isOpen);
  return (
    <>
      <div className={isOpen ? "menuContainer menuOpen" : "menuContainer"}>
        <div className="menuHeader">
          <div className="menuHeaderWrapper">
            <div className="menuHeader_logoWrapper">
              <img className="imgLogo" src={logo} alt="imageLogo" />
            </div>
            <div className="menuHeader_expandMenuWrapper">
              <div
                id="hamburger_menu"
                className={`${isOpen ? "open" : ""}`}
                onClick={() => setIsOpen(!isOpen)}
              >
                <div className="hamburger_menu_menu">Menu:</div>
                <span></span>
              </div>
            </div>
          </div>
        </div>
        <div className={isOpen ? "menuItems" : "visibility"}>
          <div className="menuItemsWrapper">
            <nav className="menu" ref={scope}>
              <ul
                style={{
                  pointerEvents: isOpen ? "auto" : "none",
                  clipPath: "inset(10% 50% 90% 50% round 10px)",
                }}
                className="menuItems_items"
              >
                <li>Наша компанія</li>
                <li>Наші адвокати</li>
                <li>Наша допомога для вас</li>
                <li>Наші клієнти про нас</li>
                <li>Ми в соціальних мережах</li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
