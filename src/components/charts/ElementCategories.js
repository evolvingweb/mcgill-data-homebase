import { Bar } from 'react-chartjs-2';
import _merge from 'lodash.merge';

import {
  COLORS,
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
      dataItem.backgroundColor = COLORS[index] || '#000';

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
