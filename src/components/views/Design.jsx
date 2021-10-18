import React from 'react';
import classNames from 'classnames';
import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';

import homeBuildings from 'images/home-buildings.png';
import Button from '../Button';
import ButtonIcon from '../ButtonIcon';

import { ReactComponent as PencilIcon } from 'images/pencil.svg';
import FILTER_CATEGORIES from '../../utils/filters.categories';

const DesignView = ({ id, design }) => {
  const containerClasses = classNames(
      'bg-white',
      'px-6',
      'py-6',
      'lg:px-24',
      'lg:py-14',
      'min-h-screen',
      'flex',
      'flex-col',
      // 'justify-center',
  );
  const componentClasses = classNames(
      'max-w-screen-xl',
      'mx-auto',
      'grid',
      'grid-cols-1 lg:grid-cols-3',
      'gap-14',
  );

  return (
      <section className={containerClasses}>
        <section className={componentClasses}>
          <div>
            <h3 className="text-black-olive font-bold text-lg">Multi-Family Design Options</h3>
            <div className="mt-7">
              <ButtonIcon icon={PencilIcon}>Edit</ButtonIcon>
            </div>
            <div className="mt-7">
              {
                _map(FILTER_CATEGORIES, (columnData, index) => {
                  return _map(columnData, columnItem => {
                    const { title, filters, disabled = false, } = columnItem;
                    if (disabled) {
                      return null;
                    }

                    return (
                        <article className="mt-4" key={title}>
                          <h4 className="font-semibold text-rain-forest uppercase text-xs">{title}</h4>
                          {
                            _map(filters, (filter) => {
                              const filterValue = design[filter] || null;
                              if (!filterValue) {
                                return null;
                              }

                              return (
                                  <p key={filter} className="mt-0">
                                    <span className="inline-block px-2 py-1 bg-pale-gray rounded-xl text-xxs">
                                      {filterValue}
                                    </span>
                                  </p>
                              );
                            })
                          }
                        </article>
                    )
                  })
                })
              }
            </div>
          </div>
          <div>
            Image here
          </div>
          <div>
            <h2>Design {id}</h2>
          </div>
        </section>
      </section>
  );
};

export default DesignView;
