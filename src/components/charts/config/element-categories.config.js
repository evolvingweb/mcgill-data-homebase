import { extendConfig } from './config';

export const COLORS = [
  '#A3BA19',
  '#377B65',
  '#C1E8C3',
  '#2346A0',
  '#67BAB3',
  '#F05D5E',
  '#FC8F40',
];

export const OPTIONS = extendConfig({
  scales: {
    y:{
      stacked: true,
    },
    x: {
      stacked: true,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'bottom',
      align: 'start',
      fullSize: false,
    },
  },
});
