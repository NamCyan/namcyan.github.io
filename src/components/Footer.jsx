import { profile } from '../data/profile';

const Footer = () => (
  <footer className="max-w-3xl mx-auto px-5 py-10 text-center text-xs text-black/45 dark:text-white/45">
    © {new Date().getFullYear()} {profile.name}
  </footer>
);

export default Footer;
