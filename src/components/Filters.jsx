import React from 'react';
import _map from 'lodash/map';

import { AppContext } from 'context/AppContextProvider';
import filterRawData from 'mock-data/filters.json';
import parseFilters from 'utils/filter.parser';
import Heading from './common/Heading';
import classNames from 'classnames';
import Container from './common/Container';

import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import FilterField from './FilterField';
import Button from './Button';

const Filters = () => {
  const { showFilters, toggleShowFilters } = React.useContext(AppContext);

  const filterData = parseFilters(filterRawData);
  // const [selectedFilter, ]
  const componentClasses = classNames(
      'fixed',
      'z-10',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'overflow-visible',
      'bg-pale-gray',
      'px-6',
      'py-6',
      'lg:py-14',
      'transition-transform',
      'transform',
      'duration-500',
      {
        '-translate-x-full': !showFilters,
      },
  );

  return (
      <section className={componentClasses}>
        <Container className="relative max-h-full relative">
          <Heading size={2} className="pr-14 lg:pr-0">Select Multi-Family Design Options</Heading>
          <button type="button" className="absolute -top-4 right-0 z-10" onClick={toggleShowFilters}>
            <CancelIcon />
          </button>
        </Container>
        <Container className="relative max-h-full overflow-y-auto pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {
              _map(FILTER_CATEGORIES, (columnData, index) => {
                return (
                    <div className="grid grid-cols-1 gap-8" key={index}>
                      {
                        _map(columnData, columnItem => {
                          const { title, filters } = columnItem;
                          return (
                              <div key={title}>
                                <p className="text-xs text-rain-forest">{title}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                                  {
                                    _map(filters, filter => {
                                      const filterItemData = filterData[filter] || [];
                                      if (!filterItemData.length) {
                                        return null;
                                      }
                                      return (
                                          <FilterField options={filterItemData} defaultOption={filter} key={filter} />
                                      );
                                    })
                                  }
                                </div>
                              </div>
                          );
                        })
                      }
                    </div>
                );
              })
            }
          </div>
          <div className="mt-8 pt-8 border-t border-rain-forest text-right">
              <Button onClick={toggleShowFilters}>Apply</Button>
          </div>
          <pre>
            { JSON.stringify(filterData) }
          </pre>
        </Container>
      </section>
  );
};

export default Filters;

const FILTER_CATEGORIES = [
  [
    {
      title: '1. Roof',
      filters: [
        'Roof type',
        'Roof Material',
      ],
    },
    {
      title: '2. Structure',
      filters: [
        'Basement',
        'Structure',
        'Foundation',
      ],
    },
    {
      title: '3. Doors',
      filters: [
        'Basement',
        'Structure',
        'Foundation',
      ],
    },
  ],
  [
    {
      title: '4. Walls',
      filters: [
        'Wall Facade Material',
        'Interior Wall Material',
      ],
    },
    {
      title: '5. Windows',
      filters: [
        'Casement Window',
        'Awning Window',
        'Fixed Window',
        'Skylight Flat Window',
        'Skylight Top Hung Window',
        'Fenster Window',
        'Dormer Window',
        'Light Dome',
        'Solarium',
      ],
    },
    {
      title: '6. Floors and Stairs',
      filters: [
        'Floor Finish Material',
        'Stairs and Railing Material',
      ],
    },
    {
      title: '7. TBD',
      filters: [
        'Porch',
        'Balcony',
      ],
    },
  ]
];
