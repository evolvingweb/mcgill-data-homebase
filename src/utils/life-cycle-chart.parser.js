import _each from 'lodash/each';

import STRING from './strings';
import _map from 'lodash/map';
const { DESIGN } = STRING;

const LABELS_LIFECYCLE = [
  'Manufacturing',
  'Transportation',
  'Operation and Maintenance',
  'End of life',
];

const LABELS_DIVISIONS = [
  'Concrete',
  'Masonry',
  'Metals',
  'Wood/Plastics/Composites',
  'Thermal and Moisture Protection',
  'Openings and Glazing',
  'Finishes',
];

const parseLifeCycleChartData = (designs, isDivisions = false) => {
  const sourceLabels = isDivisions ? LABELS_DIVISIONS : LABELS_LIFECYCLE;
  const labels = [];
  const datasets = _map(sourceLabels, label => ({ label, data: [] }));

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
