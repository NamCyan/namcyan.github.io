import Section from './Section';
import { awards } from '../data/profile';

const Awards = () => (
  <Section id="awards" title="Awards & Honors">
    <ul className="space-y-3">
      {awards.map((award, i) => (
        <li key={i} className="flex gap-4 text-[15px]">
          <span className="w-20 shrink-0 text-sm text-black/50 dark:text-white/50 pt-0.5">
            {award.year}
          </span>
          <span>
            <span className="font-medium">{award.title}</span>
            <span className="text-black/60 dark:text-white/60">
              {' '}
              — {award.org}
            </span>
          </span>
        </li>
      ))}
    </ul>
  </Section>
);

export default Awards;
