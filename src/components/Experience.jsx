import PropTypes from 'prop-types';
import Section from './Section';
import { experience } from '../data/profile';

const Entry = ({ item }) => (
  <div className="flex gap-4">
    <span className="w-24 shrink-0 text-sm text-black/50 dark:text-white/50 pt-0.5">
      {item.from === item.to ? item.from : `${item.from} – ${item.to}`}
    </span>
    <div>
      <p className="font-medium">{item.role}</p>
      <p className="text-sm text-black/60 dark:text-white/60">{item.org}</p>
      {item.bullets?.length > 0 && (
        <ul className="mt-1.5 list-disc list-outside pl-5 space-y-1 text-[15px] text-black/80 dark:text-white/80">
          {item.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

Entry.propTypes = {
  item: PropTypes.shape({
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    org: PropTypes.string.isRequired,
    bullets: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

const Group = ({ label, items }) => (
  <div>
    <h3 className="text-xs font-semibold uppercase tracking-wide text-black/45 dark:text-white/45 mb-3">
      {label}
    </h3>
    <div className="space-y-5">
      {items.map((item, i) => (
        <Entry key={i} item={item} />
      ))}
    </div>
  </div>
);

Group.propTypes = {
  label: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};

const Experience = () => (
  <Section id="experience" title="Experience">
    <div className="space-y-8">
      <Group label="Research" items={experience.research} />
      <Group label="Industry" items={experience.industry} />
      <Group label="Service" items={experience.service} />
    </div>
  </Section>
);

export default Experience;
