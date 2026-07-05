import Section from './Section';
import { education } from '../data/profile';

const Education = () => (
  <Section id="education" title="Education">
    <div className="space-y-4">
      {education.map((edu, i) => (
        <div key={i} className="flex gap-4">
          <span className="w-24 shrink-0 text-sm text-black/50 dark:text-white/50 pt-0.5">
            {edu.from} – {edu.to}
          </span>
          <div>
            <p className="font-medium">{edu.degree}</p>
            <p className="text-sm text-black/60 dark:text-white/60">
              {edu.institution}
            </p>
            {edu.detail && (
              <p className="text-sm text-black/70 dark:text-white/70 mt-0.5">
                {edu.detail}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  </Section>
);

export default Education;
