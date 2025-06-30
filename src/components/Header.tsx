import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Squash as Hamburger } from 'hamburger-react';

import Logo from './Logo';
import Menu from './Menu';
import Sidebar from './Sidebar';
import { Link } from 'react-router';
import { useToggle } from '../hooks/useToggle';

export default function Header() {
  const [isOpenSidebar, toggleSidebar] = useToggle(false);

  return (
    <>
      <header className="flex gap-4 px-16 py-4 items-center justify-between">
        <Link to="/">
          <Logo size="xl" />
        </Link>
        <Menu isHidden />

        <AnimatePresence>{isOpenSidebar && <Sidebar />}</AnimatePresence>

        <button
          type="button"
          className="md:hidden"
          aria-label="Abrir menú"
          onClick={toggleSidebar}
        >
          <Hamburger rounded />
        </button>
      </header>
    </>
  );
}
