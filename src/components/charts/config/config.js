import _merge from 'lodash.merge';

export const COLORS = {
  blackOlive: '#3F3F37',
  darkGray: '#6E7777',
};

export const FONT_FAMILY = "'Inter', sans-serif";

export const DEFAULT_OPTIONS = {
  indexAxis: 'y',
  barThickness: 40,
  maintainAspectRatio: false,
  scales: {
    y:{
      grid: {
        display: false,
      },
      ticks: {
        color: COLORS.blackOlive,
        font: {
          family: FONT_FAMILY,
          size: 14,
          weight: 600,
        },
      },
    },
    x: {
      grid:{
        borderDash: [2,3],
        color: '#D9DEDD',
        borderWidth: 2,
        borderColor: 'black',
      },
      ticks: {
        stepSize: 10000,
        color: COLORS.darkGray,
        font: {
          family: FONT_FAMILY,
          size: 12,
          weight: 600,
        },
        callback: (value) => {
          if (!value) {
            return `  0 KgCO2eq`;
          }

          return `${value / 1000}K`
        }
      },
    },
  },
  plugins: {
    legend: {
      display: false,
      labels: {
        boxWidth: 16,
        boxHeight: 16,
        padding: 20,
        textAlign: 'left',
        font: {
          family: FONT_FAMILY,
          size: 11,
          weight: 400,
        },
      },
    },
    tooltip: {
      enabled: false,
    },
  },
};

export const extendConfig = (config) => {
  return _merge(
      {},
      DEFAULT_OPTIONS,
      config,
  )
};
