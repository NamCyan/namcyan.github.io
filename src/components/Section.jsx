import PropTypes from 'prop-types';

const Section = ({ id, title, children }) => (
  <section
    id={id}
    className="scroll-mt-20 py-8 border-t border-black/10 dark:border-white/10 first:border-t-0 first:pt-0"
  >
    <h2 className="text-sm font-semibold tracking-[0.15em] uppercase text-accent dark:text-[#7fa8d9] mb-5">
      {title}
    </h2>
    {children}
  </section>
);

Section.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Section;
