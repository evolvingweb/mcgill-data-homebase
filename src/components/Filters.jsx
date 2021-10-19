import React, { useEffect, useState } from 'react';
import _map from 'lodash/map';
import _each from 'lodash/each';

import { AppContext } from 'context/AppContextProvider';
import filterRawData from 'mock-data/filters.json';
import parseFilters, { validateFilters } from 'utils/filter.parser';
import FILTER_CATEGORIES from 'utils/filters.categories';
import Heading from './common/Heading';
import classNames from 'classnames';
import Container from './common/Container';

import { ReactComponent as CancelIcon } from 'images/cancel.svg';
import FilterField from './FilterField';
import Button from './Button';
import _isFunction from 'lodash/isFunction';

const ROOF_TYPE_KEY = 'Roof type';
const ROOF_TYPE_VALUE = 'Flat';
const ROOF_FLAT_EXCLUDED_FIELDS = [
  'Skylight Flat Window',
  'Skylight Top Hung Window',
];



const Filters = ({ onApply }) => {
  const {
    showFilters,
    toggleShowFilters,
    currentDesign,
  } = React.useContext(AppContext);

  const filterData = parseFilters(filterRawData);
  const [currentFilter, setCurrentFilter] = useState({});
  const [validFilter, setIsValidFilter] = useState(false);
  const isFlatRoofType = currentFilter[ROOF_TYPE_KEY] === ROOF_TYPE_VALUE;

  const onFilterFieldChange = (fieldName, value) => {
    const newCurrentFilter = { ...currentFilter, [fieldName]: value };

    /* remove Slight options*/
    if (fieldName === ROOF_TYPE_KEY) {
      _each(ROOF_FLAT_EXCLUDED_FIELDS, value => {
        newCurrentFilter[value] = '';
      })
    }
    setCurrentFilter(newCurrentFilter);
  };
  const onApplyFilters = () => {
    if (validFilter && _isFunction(onApply)) {
      onApply(validFilter);
      toggleShowFilters();
    }
  };

  useEffect(() => {
    const isValidFilter = validateFilters(filterRawData, currentFilter);
    if (isValidFilter !== validFilter) {
      setIsValidFilter(isValidFilter);
    }
    /* eslint-disable-next-line */
  }, [currentFilter, setIsValidFilter]);

  useEffect(() => {
    if (showFilters) {
      const assignValuesToFilter = {};
      _each(filterData, (value, key) => {
        assignValuesToFilter[key] = (currentDesign && currentDesign[key]) || '';
      });
      setCurrentFilter(assignValuesToFilter);
    }
    /* eslint-disable-next-line */
  }, [currentDesign, showFilters]);

  /* @TODO: Remove this */
  useEffect(() => {
    onApply(filterRawData[0]);
    /* eslint-disable-next-line */
  }, []);

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
                          const { key, title, filters, disabled = false, } = columnItem;
                          if (disabled) {
                            return null;
                          }
                          return (
                              <div key={title}>
                                <p className="text-xs text-rain-forest">{key}. {title}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                                  {
                                    _map(filters, filter => {
                                      const filterItemData = filterData[filter] || [];
                                      /* Remove ROOF_FLAT_EXCLUDED_FIELDS when the filter is Roof Type*/
                                      if (isFlatRoofType && ROOF_FLAT_EXCLUDED_FIELDS.includes(filter)) {
                                        return null;
                                      }
                                      if (!filterItemData.length) {
                                        return null;
                                      }
                                      return (
                                          <FilterField
                                              options={filterItemData}
                                              defaultOption={filter}
                                              key={filter}
                                              onChange={onFilterFieldChange} />
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
            <Button onClick={onApplyFilters} disabled={!validFilter}>Apply</Button>
          </div>
        </Container>
        <pre className="max-w-full whitespace-pre-wrap text-xxs">
          {JSON.stringify(currentFilter)}
        </pre>
      </section>
  );
};

export default Filters;
