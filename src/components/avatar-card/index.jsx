import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const avatar = "https://media.licdn.com/dms/image/D5603AQEGENt6v5WqWg/profile-displayphoto-shrink_400_400/0/1692181630800?e=1723075200&v=beta&t=uNx3p_hd3tuUXY-0nbJdPJ0LFhgM3J-U8zEnIkvNMWo"

const AvatarCard = ({ profile, loading, avatarRing, resume }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              {
                <LazyImage
                  src={avatar ? avatar : fallbackImage}
                  alt={profile.name}
                  placeholder={skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                />
              }
            </div>
          </div>
        )}
        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              <span className="text-base-content opacity-70">
                {profile.name}
              </span>
            )}
          </h5>
          <div className="mt-3 text-base-content text-opacity-60 font-mono" align="justify">
            {/* {loading || !profile
              ? skeleton({ width: 'w-48', height: 'h-5' })
              : profile.bio} */}
              I completed Master of Data Science at Hanoi University of Science and Technology. At present, I am engaged in research as an AI resident at FPT Software AIC Lab, working under the supervision of <a href="https://bdqnghi.github.io/" style={{ color: 'blue' }}>Dr. Nghi Bui</a>, and my primary focus is on AI4Code. Looking to the future, I am excited about the possibility of pursuing a Ph.D. in 2024, with a strong desire to delve further into research in the field of AI4Code or Natural Language Processing.
          </div>
        </div>
        {resume?.fileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ width: 'w-40', height: 'h-8' })}
            </div>
          ) : (
            <a
              href={resume.fileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-50"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;
