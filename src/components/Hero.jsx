import { useState } from 'react';
import { FiMail, FiGithub, FiLinkedin, FiFileText } from 'react-icons/fi';
import { SiGooglescholar } from 'react-icons/si';
import { profile } from '../data/profile';

// Drop your photo at public/photo.jpg (or .png) to replace the placeholder.
const PHOTO_URL = '/photo.jpg';

const initials = profile.name
  .split(' ')
  .map((w) => w[0])
  .join('');

const links = [
  { href: `mailto:${profile.email}`, label: profile.email, icon: FiMail },
  { href: profile.github, label: 'GitHub', icon: FiGithub },
  { href: profile.linkedin, label: 'LinkedIn', icon: FiLinkedin },
  { href: profile.scholar, label: 'Google Scholar', icon: SiGooglescholar },
].filter((l) => l.href);

const Hero = () => {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      id="top"
      className="pt-12 pb-8 flex flex-col sm:flex-row gap-6 items-start"
    >
      <div className="w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-full bg-accent/10 dark:bg-[#7fa8d9]/15 border border-accent/20 dark:border-[#7fa8d9]/30 grid place-items-center overflow-hidden">
        {photoFailed ? (
          <span className="font-serif text-3xl text-accent dark:text-[#7fa8d9]">
            {initials}
          </span>
        ) : (
          <img
            src={PHOTO_URL}
            alt={profile.name}
            className="w-full h-full object-cover"
            onError={() => setPhotoFailed(true)}
          />
        )}
      </div>

      <div className="flex-1">
        <h1 className="font-serif text-3xl sm:text-4xl font-semibold">
          {profile.name}
        </h1>
        <p className="mt-1 text-base text-black/70 dark:text-white/70">
          {profile.title}
        </p>
        <p className="text-sm text-black/60 dark:text-white/60">
          {profile.affiliation}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
          {links.map(({ href, label, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-accent dark:hover:text-[#7fa8d9] transition-colors"
            >
              <Icon size={15} />
              {label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-black/15 dark:border-white/20 px-3 py-1 hover:border-accent hover:text-accent dark:hover:text-[#7fa8d9] transition-colors"
          >
            <FiFileText size={15} />
            Download CV
          </a>
        </div>

        <p className="mt-5 leading-relaxed text-[15px] text-black/80 dark:text-white/80">
          {profile.bio}
        </p>
      </div>
    </section>
  );
};

export default Hero;
