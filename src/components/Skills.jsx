import Section from './Section';
import { skills, languages } from '../data/profile';

const Skills = () => (
  <Section id="skills" title="Skills & Languages">
    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[15px]">
      {Object.entries(skills).map(([label, items]) => (
        <div key={label}>
          <p className="text-sm font-medium text-black/60 dark:text-white/60">
            {label}
          </p>
          <p>{items.join(', ')}</p>
        </div>
      ))}
      <div>
        <p className="text-sm font-medium text-black/60 dark:text-white/60">
          Languages
        </p>
        <p>{languages.map((l) => `${l.name} (${l.detail})`).join(' · ')}</p>
      </div>
    </div>
  </Section>
);

export default Skills;
