import _map from 'lodash/map';
import _isFunction from 'lodash/isFunction';

import filterRawData from 'mock-data/filters.json';
import parseFilters from '../utils/filter.parser';
import Heading from './common/Heading';
import classNames from 'classnames';
import Container from './common/Container';

import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import FilterField from './FilterField';

const Filters = ({
                   onClose,
                 }) => {
  const filterData = parseFilters(filterRawData);
  const componentClasses = classNames(
      'fixed',
      'top-0',
      'left-0',
      'w-full',
      'h-full',
      'overflow-visible',
      'bg-pale-gray',
      'px-6',
      'py-6',
      'lg:py-14',
  );
  const onClickClose = () => {
    if (_isFunction(onClose)) {
      onClose();
    }
  };
  return (
      <section className={componentClasses}>
        <Heading size={2} className="pr-14 lg:pr-0">Select Multi-Family Design Options</Heading>
        <button type="button" className="absolute top-4 right-6 z-10" onClick={onClickClose}>
          <CancelIcon />
        </button>
        <Container className="relative max-h-full overflow-y-auto pb-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
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
                                      const filterItemData = filterData[filter]
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
          <pre>
              {JSON.stringify(filterData)}
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
      ],
    },
    {
      title: '6. Floors and Stairs',
      filters: [
        'Floor Finish Material',
        'Stairs and Railing Material',
      ],
    },
  ]
];
