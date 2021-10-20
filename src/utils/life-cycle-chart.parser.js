import _each from 'lodash/each';

import STRING from './strings';
import _map from 'lodash/map';
const { DESIGN } = STRING;

const LABELS = [
  'Manufacturing',
  'Transportation',
  'Operation and Maintenance',
  'End of life',
];

const parseLifeCycleChartData = (designs) => {
  const labels = [];
  const datasets = _map(LABELS, label => ({ label, data: [] }));

  _each(designs, (design, index) => {
    labels.push(`${DESIGN} ${index + 1}`);
  });

  _each(datasets, ({ label: key, data }) => {
    _each(designs, (design) => {
      const value = design[key] || 0;
      data.splice(0, 0, value); // insert always in the first position in order to see the last first
    });
  });

  return {
    labels: labels,
    datasets,
  };

};

export default parseLifeCycleChartData;
