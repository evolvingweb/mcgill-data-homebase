import _each from 'lodash/each';
import _reverse from 'lodash/reverse';

import STRING from './strings';
import _map from 'lodash/map';
const { DESIGN } = STRING;

const LABELS = [
  'Doors',
  'Floors',
  'Roofs',
  'Stairs and Railings',
  'Structure',
  'Walls',
  'Windows',
  // 'TBD category name',
];

const parseElementCategoriesChartData = (designs) => {
  const labels = [];
  const datasets = _map(LABELS, label => ({ label, data: [0] }));

  _each(designs, (design, index) => {
    labels.push(`${DESIGN} ${index + 1}`);
  });

  _each(datasets, ({ label: key, data }) => {
    _each(designs, (design) => {
      const value = design[key] && design[key].replace(',', '');
      data.splice(1, 0, value); // insert always in the position 1 in order to see the last first
    });
  });

  labels.push('');

  return {
    labels: _reverse(labels),
    datasets,
  };

};

export default parseElementCategoriesChartData;
