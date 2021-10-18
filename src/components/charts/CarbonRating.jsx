import React, { useEffect } from 'react';
import _debounce from 'lodash/debounce';
import _merge from 'lodash/merge';
import _find from 'lodash/find';
import { Bar } from 'react-chartjs-2';


import { MAIN_COLORS } from './config/config';
import { carbonRatingData, OPTIONS } from './config/carbon-rating.config';
import carbonRatingDecorators from './plugins/carbon-rating-decorators.plugin';

import 'styles/CarbonRating.css';

const CarbonRating = ({
 value = 0,
 width = 940,
 height = 90,
}) => {
  const chartRef = React.createRef();
  const mergedOptions = _merge({}, OPTIONS, {
    plugins: {
      carbonRatingDecorators: {
        value,
      }
    }
  });
  const currentRatingLabel = _find(carbonRatingData.datasets, ({ range = [] }) => {
    if (!range.length) {
      return false;
    }
    const [min = 0, max = 0] = range || [];
    return value > min && value < max;
  });

  const { label = '' }= currentRatingLabel || {};

  useEffect(() => {
    const parsedData = (canvas, canvasWidth = width) => {
      if (!canvas) {
        return;
      }
      const ctx = canvas.getContext('2d');
      if (!ctx) {
        return;
      }
      const gradient = ctx.createLinearGradient(0,0, canvasWidth, 0);
      gradient.addColorStop(.28, MAIN_COLORS.green);
      gradient.addColorStop(.7, MAIN_COLORS.orange);
      gradient.addColorStop(.94, MAIN_COLORS.red);
      const { datasets } = carbonRatingData;
      const newDataSets = datasets.map((dataItem) => {
        dataItem.backgroundColor = gradient;
        dataItem.borderColor = 'transparent';
        return dataItem;
      });

      return _merge(
          {},
          carbonRatingData,
          { datasets: newDataSets },
      );
    };

    const onResize = _debounce(() => {
      const chart = chartRef?.current;
      if (chart) {
        chart.data = parsedData(chart.canvas, chart.chartArea.width);
        chart.update();
      }
    }, 120);
    window.addEventListener('resize', onResize);
    onResize();
    return () => window.removeEventListener('resize', onResize);
  }, [chartRef, width]);

  return (
      <section className="carbon-rating">
      <h3 className="text-2xl font-normal">
        {label}
        <span className="ml-3 text-xs">({value} KgCO2eq/m2)</span>
      </h3>
      <section className="chart-container">
        <div className="relative -left-3">
          <Bar data={{}} options={mergedOptions} ref={chartRef} width={width} height={height} plugins={[carbonRatingDecorators]} />
        </div>
      </section>
      </section>
  );
};



export default CarbonRating;
