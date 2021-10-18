import { Bar } from 'react-chartjs-2';
import _merge from 'lodash/merge';

import {
  DEFAULT_DATA,
  OPTIONS,
  DEFAULT_GRADIENT_COLORS,
} from './config/summary.config'

const Summary = ({
  data,
  width = 940,
  height = 220,
  gradientColors = DEFAULT_GRADIENT_COLORS,
  options = [],
}) => {

  console.log({ data });
  const mergedOptions = _merge({}, OPTIONS, options);

  const parsedData = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0,0,600, 0);
    if (gradientColors.length) {
      gradientColors.forEach((color, index) => {
        if (index < 2) {
          gradient.addColorStop(index, color)
        }
      });

      const { datasets } = data;

      const newDataSets = datasets.map((dataItem) => {
        dataItem.backgroundColor = gradient;
        dataItem.hoverbackgroundColor = gradient;
        return dataItem;
      });

      return _merge(
        {},
        DEFAULT_DATA,
        data,
        {
            datasets: newDataSets,
        }
      );
    }

    return data;
  };

  return (
      <section className="chart-container">
        <Bar data={parsedData} options={mergedOptions} width={width} height={height} />
      </section>
  );
};

export default Summary;
