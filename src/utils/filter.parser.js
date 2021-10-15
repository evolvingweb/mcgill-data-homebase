import _each from 'lodash/each';

const VALID_FILTERS = [
  'Roof type',
  'Roof Material',
  'Basement',
  'Structure',
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
];

const parseFilters = (rawFilters) => {
  if (rawFilters && rawFilters.length) {
    const filters = {};
    _each(rawFilters, (filterItem) => {
      _each(filterItem, (value, key) => {
        if (VALID_FILTERS.includes(key)) {
          const filterItems = filters[key] || [];
          if (!filterItems.includes(value)) {
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

export default parseFilters;
