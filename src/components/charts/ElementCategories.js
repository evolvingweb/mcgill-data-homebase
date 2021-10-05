import { Bar } from 'react-chartjs-2';
import _merge from 'lodash.merge';

import { CHART_COLORS, MAIN_COLORS } from './config/config';
import {
  OPTIONS,
} from './config/element-categories.config'

const ElementCategories = ({
  data,
  width = 940,
  height = 220,
}) => {

  const parsedData = () => {
    const { datasets } = data;
    const newDataSets = datasets.map((dataItem, index) => {
      dataItem.backgroundColor = CHART_COLORS[index] || MAIN_COLORS.black;

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
        <Bar data={parsedData} options={OPTIONS} width={width} height={height} />
      </section>
  );
};

export default ElementCategories;
