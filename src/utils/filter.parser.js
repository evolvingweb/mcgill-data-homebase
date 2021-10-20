import _each from 'lodash/each';
import _isEmpty from 'lodash/isEmpty';
import _find from 'lodash/find';
import _every from 'lodash/every';

const VALID_FILTERS = [
  'Roof type',
  'Roof Material',
  'Basement',
  'Structure Type',
  'Foundation',
  'Wall Facade Material',
  'Interior Wall Material',
  'Floor Finish Material',
  'Interior Door Material',
  'Exterior Door Material',
  'Double sliding Door Material',
  'Stairs and Railing Material',
  'Casement Window',
  'Awning Window',
  'Fixed Window',
  'Skylight Flat Window',
  'Skylight Top Hung Window',
  'Fenster Window',
  'Dormer Window',
  'Light Dome',
  'Solarium',
  'Balcony',
  'Porch',
];

const parseFilters = (rawFilters) => {
  if (rawFilters && rawFilters.length) {
    const filters = {};
    _each(rawFilters, (filterItem) => {
      _each(filterItem, (value, key) => {
        if (VALID_FILTERS.includes(key)) {
          const filterItems = filters[key] || [];
          if (!filterItems.includes(value) && !_isEmpty(value)) {
            filterItems.push(value);
          }
          filters[key] = filterItems;
        }
      });
    });
    return filters;
  }

  return [];
};

/**
 * Validate each filter in order to know if it fits with any record in the raw filter data.
 * @param rawFilters
 * @param filters
 * @returns {*}
 */
export const validateFilters = (rawFilters, filters) => {
  return _find(rawFilters, (filter) => {
    // console.group(`Option number ${filter['Option number']}`);
    const isValid = _every(filters, (value, key) => {
      const valueInFilter = filter[key];
      // console.log({value, key, valueInFilter});
      return valueInFilter === value;
    })
    if (isValid) {
      // console.log(`%c Valid Option number ${filter['Option number']}`, 'color: yellow; font-weight: 800;');
    } else {
      // console.log(`%c Invalid Option number ${filter['Option number']}`, 'color: red; font-weight: 800;');
    }
    // console.groupEnd();
    return isValid;
  });
};

export default parseFilters;
