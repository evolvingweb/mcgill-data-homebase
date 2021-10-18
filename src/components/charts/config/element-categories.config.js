import { extendConfig } from './config';

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
