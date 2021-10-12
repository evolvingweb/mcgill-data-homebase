import { FONT_FAMILY, MAIN_COLORS } from './config';

export const carbonRatingData = {
  labels: [''],
  datasets: [
    {
      label: 'Best',
      data: [100],
    },
    {
      label: 'Great',
      data: [100],
    },
    {
      label: 'Good',
      data: [100],
    },
    {
      label: 'Fair',
      data: [100],
    },
    {
      label: 'Average',
      data: [100],
    },
    {
      label: 'Average',
      data: [100],
    },
    {
      label: 'Average',
      data: [100],
    },
    {
      label: 'Poor',
      data: [50],
    },
  ],
};

export const OPTIONS = {
  indexAxis: 'y',
  barThickness: 40,
  maintainAspectRatio: false,
  responsive: true,
  animation: false,
  elements: {
    bar: {
      borderWidth: 0,
    }
  },
  scales: {
    y:{
      stacked: true,
      grid: {
        display: false,
        borderWidth: 0,
      },
    },
    x: {
      stacked: true,
      grid:{
        display: false,
        borderWidth: 0,
        drawTicks: false,
      },
      ticks: {
        padding: 15,
        color: MAIN_COLORS.darkGray,
        font: {
          family: FONT_FAMILY,
          size: 12,
          weight: 600,
        },
        callback: (value) => {
          if (value === 800) {
            return '';
          }
          return value - 100;
        }
      },
    },
  },
  plugins: {
    tooltip: {
      enabled: false,
    },
    legend: {
      display: false,
    },
    carbonRatingDecorators: {
      dots: { ...carbonRatingData.datasets },
      lineColor: MAIN_COLORS.gridColor,
      value: 345,
    },
  },
};
