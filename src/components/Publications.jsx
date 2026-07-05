import PropTypes from 'prop-types';
import Section from './Section';
import { publications } from '../data/profile';
import { renderAuthors } from '../helpers/text';

const RankBadge = ({ rank }) =>
  rank ? (
    <span className="text-[11px] font-medium px-1.5 py-0.5 rounded border border-accent/30 text-accent dark:border-[#7fa8d9]/40 dark:text-[#7fa8d9]">
      {rank}
    </span>
  ) : null;

RankBadge.propTypes = {
  rank: PropTypes.string,
};

const Publications = () => {
  const total = publications.length;

  return (
    <Section id="publications" title="Publications">
      <ol className="space-y-5">
        {publications.map((pub, i) => (
          <li key={i} className="flex gap-4">
            <span className="w-6 shrink-0 text-sm text-black/40 dark:text-white/40 pt-0.5">
              {total - i}.
            </span>
            <div className="text-[15px] leading-relaxed">
              <p>
                {pub.link ? (
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium hover:text-accent dark:hover:text-[#7fa8d9] hover:underline underline-offset-2"
                  >
                    {pub.title}
                  </a>
                ) : (
                  <span className="font-medium">{pub.title}</span>
                )}
              </p>
              <p className="text-black/70 dark:text-white/70">
                {renderAuthors(pub.authors)}
              </p>
              <p className="mt-0.5 flex flex-wrap items-center gap-2 text-sm text-black/55 dark:text-white/55">
                <span>
                  {pub.venue}, {pub.year}
                </span>
                <RankBadge rank={pub.rank} />
                {pub.note && (
                  <span className="text-[11px] font-medium px-1.5 py-0.5 rounded bg-accent/10 text-accent dark:bg-[#7fa8d9]/15 dark:text-[#7fa8d9]">
                    {pub.note}
                  </span>
                )}
              </p>
            </div>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-xs text-black/50 dark:text-white/50">
        * Equal contribution &nbsp;·&nbsp; † Corresponding author &nbsp;·&nbsp;{' '}
        Full list with citation counts on{' '}
        <a
          href="https://scholar.google.com/citations?user=1R5vE1UAAAAJ&hl=en"
          target="_blank"
          rel="noreferrer"
          className="underline underline-offset-2 hover:text-accent dark:hover:text-[#7fa8d9]"
        >
          Google Scholar
        </a>
        .
      </p>
    </Section>
  );
};

export default Publications;
