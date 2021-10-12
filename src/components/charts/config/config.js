import _merge from 'lodash/merge';

export const CHART_COLORS = [
  '#A3BA19',
  '#377B65',
  '#C1E8C3',
  '#2346A0',
  '#67BAB3',
  '#F05D5E',
  '#FC8F40',
];

export const MAIN_COLORS = {
  black: '#000',
  blackOlive: '#3F3F37',
  darkGray: '#6E7777',
  gridColor: '#D9DEDD',
  green: '#A3BA19',
  orange: '#FC8F40',
  red: '#F05D5E',
};

export const FONT_FAMILY = "'Inter', sans-serif";

export const DEFAULT_OPTIONS = {
  indexAxis: 'y',
  barThickness: 40,
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y:{
      grid: {
        display: false,
      },
      ticks: {
        color: MAIN_COLORS.blackOlive,
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
        color: MAIN_COLORS.gridColor,
        borderWidth: 2,
        borderColor: 'black',
      },
      ticks: {
        stepSize: 10000,
        color: MAIN_COLORS.darkGray,
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
  },
};

export const extendConfig = (config) => {
  return _merge(
      {},
      DEFAULT_OPTIONS,
      config,
  )
};
