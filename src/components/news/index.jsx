import PropTypes from 'prop-types';
import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar } from 'react-icons/ai';
import { MdInsertLink } from 'react-icons/md';
import { ga, languageColor, skeleton } from '../../helpers/utils';

const displaySection = (news) => {
  if (
    news &&
    Array.isArray(news) &&
    news.length
  ) {
    return true;
  } else {
    return false;
  }
};

const New = ({ news, loading, googleAnalytics }) => {

  const renderSkeleton = () => {
    // let array = [];
    // for (let index = 0; index < news.limit; index++) {
    //   array.push(
    return <div className="card shadow-lg compact bg-base-100" key={index}>
          <div className="flex justify-between flex-col p-8 h-full w-full">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="card-title text-lg">
                    {skeleton({
                      width: 'w-32',
                      height: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mb-5 mt-1">
                {skeleton({
                  width: 'w-full',
                  height: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ width: 'w-full', height: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="mr-3 flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ width: 'w-12', height: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>
  //     );
  //   }

  //   return array;
  };

  const renderNews = () => {
    return news.items.slice(0, news.limit).map((item, index) => (
      // <a
      //   className="card shadow-lg compact bg-base-100 cursor-pointer"
      //   href={item.html_url}
      //   key={index}
      //   onClick={(e) => {
      //     e.preventDefault();

      //     try {
      //       if (googleAnalytics?.id) {
      //         ga.event({
      //           action: 'Click project',
      //           params: {
      //             project: item.name,
      //           },
      //         });
      //       }
      //     } catch (error) {
      //       console.error(error);
      //     }

      //     window?.open(item.html_url, '_blank');
      //   }}
      // >
        <div className="flex justify-between flex-col p-8 h-full w-full">
          <div>
            <div className="flex items-center">
              <div className="card-title text-lg tracking-wide flex text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <b><span>{item.date}</span></b>
              </div>
            </div>
            <p className="mb-5 mt-1 text-base-content text-opacity-60 text-sm">
              {item.content}
            </p>
          </div>
        </div>
      // </a>
    ));
  };

  return (
    <Fragment>
      {displaySection(news) && (
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="card compact bg-base-100 shadow bg-opacity-40">
              <div className="card-body">
                <div className="mx-3 flex items-center justify-between mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-40', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        📢 News
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {loading || !news ? renderSkeleton() : renderNews()}
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

New.propTypes = {
  news: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  github: PropTypes.object.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default New;
