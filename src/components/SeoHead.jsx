import { Helmet } from 'react-helmet-async';
import { profile } from '../data/profile';

const SeoHead = () => (
  <Helmet>
    <title>{profile.name}</title>
    <meta name="description" content={profile.bio} />
    <meta property="og:title" content={profile.name} />
    <meta property="og:description" content={profile.bio} />
    <meta property="og:type" content="website" />
  </Helmet>
);

export default SeoHead;
