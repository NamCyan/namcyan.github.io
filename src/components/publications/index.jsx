import { Fragment, useEffect, useState } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import PropTypes from 'prop-types';
// import { AiOutlineContainer } from 'react-icons/ai';
// import { getDevPost, getMediumPost } from '@arifszn/blog-js';
import { formatDistance } from 'date-fns';

const displaySection = (publications) => {
  if (
    publications &&
    Array.isArray(publications) &&
    publications.length
  ) {
    return true;
  } else {
    return false;
  }
};
const Publications = ({ publications, loading, googleAnalytics }) => {
  // const [articles, setArticles] = useState(null);

  // useEffect(() => {
  //   if (displaySection(publications)) {
  //     if (blog.source === 'medium') {
  //       getMediumPost({
  //         user: blog.username,
  //       }).then((res) => {
  //         setArticles(res);
  //       });
  //     } else if (blog.source === 'dev') {
  //       getDevPost({
  //         user: blog.username,
  //       }).then((res) => {
  //         setArticles(res);
  //       });
  //     }
  //   }
  // }, []);
  console.log(publications)
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < publications.length; index++) {
      array.push(
        <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0">
                <div className="w-24 h-24 mask mask-squircle">
                  {skeleton({
                    width: 'w-full',
                    height: 'h-full',
                    shape: '',
                  })}
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="w-full">
                    <h2>
                      {skeleton({
                        width: 'w-full',
                        height: 'h-8',
                        className: 'mb-2 mx-auto md:mx-0',
                      })}
                    </h2>
                    {skeleton({
                      width: 'w-24',
                      height: 'h-3',
                      className: 'mx-auto md:mx-0',
                    })}
                    <div className="mt-3">
                      {skeleton({
                        width: 'w-full',
                        height: 'h-4',
                        className: 'mx-auto md:mx-0',
                      })}
                    </div>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {skeleton({
                        width: 'w-32',
                        height: 'h-4',
                        className: 'md:mr-2 mx-auto md:mx-0',
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return array;
  };

  const renderPublications = () => {
    return publications.map((publication, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={publication.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalytics?.id) {
                ga.event({
                  action: 'Click Blog Post',
                  params: {
                    post: publication.title,
                  },
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(publication.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={publication.imageUrl}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      width: 'w-full',
                      height: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-semibold text-base-content opacity-60">
                      {publication.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      {formatDistance(publication.year, new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                    <p className="mt-3 text-base-content text-opacity-60 text-sm">
                      {publication.description}
                    </p>
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {publication.keywords.map((keyword, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          #{keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ));
    };

  return (
    <Fragment>
      {displaySection(publications) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div
                className={`card compact bg-base-100 ${
                  loading || publications.length
                    ? 'shadow bg-opacity-40'
                    : 'shadow-lg'
                }`}
              >
                <div className="card-body">
                  <div className="mx-3 mb-2">
                    <h5 className="card-title">
                      {loading ? (
                        skeleton({ width: 'w-28', height: 'h-8' })
                      ) : (
                        <span className="text-base-content opacity-70">
                          Publications
                        </span>
                      )}
                    </h5>
                  </div>
                  <div className="col-span-2">
                    <div className="grid grid-cols-1 gap-6">
                      {loading
                        ? renderSkeleton()
                        : renderPublications()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

Publications.propTypes = {
  loading: PropTypes.bool.isRequired,
  publications: PropTypes.array,
  googleAnalytics: PropTypes.object,
};

export default Publications;
