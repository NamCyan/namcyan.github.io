import { skeleton } from '../../helpers/utils';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ date, content }) => (
  <li className="mb-5 ml-4">
    <div
      className="absolute w-2 h-2 bg-base-300 rounded-full border border-base-300 mt-1.5"
      style={{ left: '-4.5px' }}
    ></div>
    <h3 className="font-semibold">{date}: {content}</h3>
  </li>
);

const New = ({ news, loading }) => {
  const renderSkeleton = () => {
    let array = [];
    for (let index = 0; index < 2; index++) {
      array.push(
        <ListItem
          key={index}
          date={skeleton({
            width: 'w-5/12',
            height: 'h-4',
          })}
          content={skeleton({
            width: 'w-6/12',
            height: 'h-4',
            className: 'my-1.5',
          })}
        />
      );
    }

    return array;
  };
  return (
    <>
      {news?.length !== 0 && (
        <div className="card shadow-lg compact bg-base-100">
          <div className="card-body">
            <div className="mx-3">
              <h5 className="card-title">
                {loading ? (
                  skeleton({ width: 'w-32', height: 'h-8' })
                ) : (
                  <span className="text-base-content opacity-70">
                    📢 News
                  </span>
                )}
              </h5>
            </div>
            <div className="text-base-content text-opacity-60">
              <ol className="relative border-l border-base-300 border-opacity-30 my-2 mx-4">
                {loading ? (
                  renderSkeleton()
                ) : (
                  <Fragment>
                    {news.items.map((item, index) => (
                      <ListItem
                        key={index}
                        date={item.date}
                        content={item.content}
                      />
                    ))}
                  </Fragment>
                )}
              </ol>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

ListItem.propTypes = {
  date: PropTypes.node,
  content: PropTypes.node,
};

New.propTypes = {
  news: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default New;
