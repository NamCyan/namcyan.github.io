import Section from './Section';
import { news } from '../data/profile';

const News = () => (
  <Section id="news" title="News">
    <ul className="space-y-3">
      {news.map((item, i) => (
        <li key={i} className="flex gap-4 text-[15px] leading-relaxed">
          <span className="w-20 shrink-0 text-sm text-black/50 dark:text-white/50 pt-0.5">
            {item.date}
          </span>
          <span>{item.content}</span>
        </li>
      ))}
    </ul>
  </Section>
);

export default News;
