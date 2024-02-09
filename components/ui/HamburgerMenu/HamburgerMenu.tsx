"use client";
import React from "react";
import styles from "@/components/ui/HamburgerMenu/HamburgerMenu.module.css";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="flex justify-end mb-12">
    <button className={styles.hamburgerButton} onClick={toggleMenu}>
      <div className={styles.hamburgerIcon}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
    {isOpen && (
      <div className={styles.menu}>
        {/* Menu items go here */}
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    )}
  </div>
  );
};

export default HamburgerMenu;
