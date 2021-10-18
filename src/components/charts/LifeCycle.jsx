import { Bar } from 'react-chartjs-2';
import _merge from 'lodash/merge';

import { CHART_COLORS, MAIN_COLORS } from './config/config';
import {
  OPTIONS,
} from './config/life-cycles.config';
import gradientUnderZero from './plugins/gradientUnderZero.plugin';
import zeroZeroLine from './plugins/zeroZeroLine.plugin';

const LifeCycle = ({
  data,
  width = 940,
  height = 240,
}) => {

  const parsedData = () => {
    const { datasets } = data;
    const newDataSets = datasets.map((dataItem, index) => {
      dataItem.backgroundColor = CHART_COLORS[index] || MAIN_COLORS.black;
      dataItem.hoverbackgroundColor = CHART_COLORS[index] || MAIN_COLORS.black;

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
