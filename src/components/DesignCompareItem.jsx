import React from 'react';
import _map from 'lodash/map';

import { ReactComponent as PencilIcon } from 'images/pencil.svg';
import useImage from 'hooks/useImage';
import FILTER_CATEGORIES from 'utils/filters.categories';
import Button, { BUTTON_TYPE, ICON_POSITION } from './Button';
import { AppContext } from 'context/AppContextProvider';

import 'styles/DesignCompareItem.css';


const DesignCompareItem = ({ id, design, className }) => {
  const {
    setDesignByIndex,
    toggleShowFilters,
    hideCompareView,
  } = React.useContext(AppContext);
  const designTitle = `Design ${id}`;
  const { imageUrl } = useImage(id); // @TODO change id for Option Number

  const onEditClick = () => {
    const index = id - 1;
    setDesignByIndex(index);
    toggleShowFilters()
    hideCompareView()
  };

  return (
      <section className={`design-compare-item ${className ? className : ''}`}>
        <h2 className="font-bold text-black text-2xl flex items-center title">
          {designTitle}
          <Button
              type={BUTTON_TYPE.TEXT}
              onClick={onEditClick}
              icon={PencilIcon}
              iconPosition={ICON_POSITION.LEFT}
              className="text-xs ml-4 opacity-0 transition-opacity">Edit</Button>
        </h2>
        <div className="flex mt-6">
          <div className="flex-shrink-0 pr-6">
            <img
                src={imageUrl}
                alt={designTitle}
                className="mx-auto bg-pale-gray"
                width={166}
                height={260}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            {
              _map(FILTER_CATEGORIES, (columnData, index) => {
                return (
                    <div key={index}>
                      {
                        _map(columnData, columnItem => {
                          const { title, filters, disabled = false, } = columnItem;
                          if (disabled) {
                            return null;
                          }

                          return (
                              <article className="mt-4" key={title}>
                                <h4 className="font-semibold text-rain-forest uppercase text-xxs mb-1">{title}</h4>
                                {
                                  _map(filters, (filter) => {
                                    const filterValue = design[filter] || null;
                                    if (!filterValue) {
                                      return null;
                                    }

                                    return (
                                        <p key={filter} className="mt-0">
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
