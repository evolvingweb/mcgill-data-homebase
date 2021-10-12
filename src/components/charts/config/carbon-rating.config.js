import { FONT_FAMILY, MAIN_COLORS } from './config';

export const carbonRatingData = {
  labels: [''],
  datasets: [
    {
      label: 'Best',
      data: [100],
      range: [-100, 0],
    },
    {
      label: 'Great',
      data: [100],
      range: [0, 100],
    },
    {
      label: 'Good',
      data: [100],
      range: [100, 200],
    },
    {
      label: 'Fair',
      data: [100],
      range: [200, 300],
    },
    {
      label: '',
      data: [100],
    },
    {
      label: 'Average',
      data: [100],
      range: [300, 600],
    },
    {
      label: '',
      data: [100],
    },
    {
      label: 'Poor',
      data: [50],
      range: [600, 100000],
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
        align: 'start',
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
      value: 100,
    },
  },
};
