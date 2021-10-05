import { Bar } from 'react-chartjs-2';
import _merge from 'lodash.merge';

import {
  OPTIONS,
  COLORS,
} from './config/life-cycles.config';
import gradientUnderZero from './plugins/gradientUnderZero.plugin';
import zeroZeroLine from './plugins/zeroZeroLine.plugin';

const LifeCycle = ({
  data,
  width = 940,
  height = 220,
}) => {

  const parsedData = () => {
    const { datasets } = data;
    const newDataSets = datasets.map((dataItem, index) => {
      dataItem.backgroundColor = COLORS[index] || '#000';
      dataItem.hoverbackgroundColor = COLORS[index] || '#000';

      return dataItem;
    });

    return _merge(
        {},
        data,
        {
          datasets: newDataSets,
        }
    );
  };

  return (
      <section className="chart-container">
        <Bar data={parsedData} options={OPTIONS} width={width} height={height} plugins={[zeroZeroLine, gradientUnderZero]} />
      </section>
  );
};

export default LifeCycle;
