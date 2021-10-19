import React from 'react';
import _map from 'lodash/map';

import FILTER_CATEGORIES from 'utils/filters.categories';

const DesignCompareItem = ({ id, design, /*designs, compare, */className }) => {
  const designTitle = `Design ${id}`;
  const designImageSrc = `https://via.placeholder.com/166x260.png/F00?text=${designTitle}%13Image`;

  return (
      <section className={className}>
        <h2 className="font-bold text-black text-2xl">{designTitle}</h2>
        <div className="flex mt-6">
          <div className="flex-shrink-0 pr-6">
            <img src={designImageSrc} alt={designTitle} className="mx-auto" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {
              _map(FILTER_CATEGORIES, (columnData) => {
                return (
                    <div>
                      {
                        _map(columnData, columnItem => {
                          const { title, filters, disabled = false, } = columnItem;
                          if (disabled) {
                            return null;
                          }

                          return (
                              <article className="mt-4" key={title}>
                                <h4 className="font-semibold text-rain-forest uppercase text-xxs">{title}</h4>
                                {
                                  _map(filters, (filter) => {
                                    const filterValue = design[filter] || null;
                                    if (!filterValue) {
                                      return null;
                                    }

                                    return (
                                        <p key={filter} className="mt-1">
                                          <span
                                              className="inline-block px-2 py-1 bg-pale-gray rounded-xl text-xxs truncate max-w-full">
                                            {filterValue}
                                          </span>
                                        </p>
                                    );
                                  })
                                }
                              </article>
                          )
                        })
                      }
                    </div>
                )
              })
            }
          </div>
        </div>
      </section>
  );
};

export default DesignCompareItem;
