import _each from 'lodash/each';
import _reverse from 'lodash/reverse';

import STRING from './strings';
const { DESIGN } = STRING;

const parseSummaryChartData = (designs) => {
  const labels = [];
  const data = [];

  _each(designs, (design, index) => {
    const {
      'Sum of embodied carbon': sumEmbodiedCarbon = 0,
    } = design;

    const replaceCommas = sumEmbodiedCarbon.replace(',', '');
    labels.push(`${DESIGN} ${index + 1}`);
    data.push(replaceCommas);

  });

  labels.push('');
  data.push(0);

  return {
    labels: _reverse(labels),
    datasets: [
      {
        data: _reverse(data),
      }
    ]
  }
};

export default parseSummaryChartData;
