import { useState } from 'react';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import { useDarkMode } from '../helpers/useDarkMode';
import { profile } from '../data/profile';

const links = [
  { id: 'news', label: 'News' },
  { id: 'publications', label: 'Publications' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'awards', label: 'Awards' },
  { id: 'skills', label: 'Skills' },
];

const Nav = () => {
  const [dark, setDark] = useDarkMode();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 backdrop-blur bg-paper/85 dark:bg-[#15130f]/85 border-b border-black/10 dark:border-white/10">
      <div className="max-w-3xl mx-auto px-5 h-14 flex items-center justify-between">
        <a href="#top" className="font-serif font-semibold">
          {profile.name}
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="hover:text-accent dark:hover:text-[#7fa8d9] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
        </nav>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            aria-label="Toggle dark mode"
            onClick={() => setDark(!dark)}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            {dark ? <FiSun size={16} /> : <FiMoon size={16} />}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-1.5 rounded-full hover:bg-black/5 dark:hover:bg-white/10"
          >
            {open ? <FiX size={18} /> : <FiMenu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-5 pb-4 text-sm">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="py-1.5"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Nav;
