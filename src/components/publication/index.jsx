import { Fragment, useEffect, useState } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import PropTypes from 'prop-types';
import { AiOutlineContainer } from 'react-icons/ai';
import { getDevPost, getMediumPost } from '@arifszn/blog-js';
import { formatDistance } from 'date-fns';

const displaySection = (publications) => {
  <script>
  console.log(publications);
  </script>
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

const Publication = ({ loading, publications, googleAnalytics }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    if (displaySection(publications)) {
      setArticles(publications);
    }
  }, []);

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

  const renderArticles = () => {
    return articles && articles.length ? (
      articles.map((article, index) => (
        <a
          className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={index}
          href={article.link}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalytics?.id) {
                ga.event({
                  action: 'Click Publication Post',
                  params: {
                    post: article.title,
                  },
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open(article.link, '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={article.imageUrl}
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
                      {article.title}
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      {article.conference}-{article.year}
                    </p>
                    {/* <p className="mt-3 text-base-content text-opacity-60 text-sm">
                      {article.description}
                    </p> */}
                    <div className="mt-4 flex items-center flex-wrap justify-center md:justify-start">
                      {article.keywords.map((category, index2) => (
                        <div
                          className="py-2 px-4 text-xs leading-3 rounded-full bg-base-300 mr-1 mb-1 opacity-50 text-base-content"
                          key={index2}
                        >
                          #{category}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      ))
    ) : (
      <div className="text-center mb-6">
        <AiOutlineContainer className="mx-auto h-12 w-12 opacity-30" />
        <p className="mt-1 text-sm opacity-50 text-base-content">
          No recent post
        </p>
      </div>
    );
  };

  return (
    <Fragment>
      {displaySection(publications) && (
        <div className="col-span-1 lg:col-span-2">
          <div className="grid grid-cols-2 gap-6">
            <div className="col-span-2">
              <div
                className={`card compact bg-base-100 ${
                  loading || (articles && articles.length)
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
                      {loading || !articles
                        ? renderSkeleton()
                        : renderArticles()}
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

Publication.propTypes = {
  loading: PropTypes.bool.isRequired,
  publications: PropTypes.array,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Publication;