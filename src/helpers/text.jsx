// Renders an authors string where `**Name**` segments are bolded
// (used to highlight the site owner's name in the publication list).
export const renderAuthors = (authors) => {
  const parts = authors.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return <span key={i}>{part}</span>;
  });
};
