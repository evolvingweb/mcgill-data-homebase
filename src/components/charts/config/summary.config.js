import { extendConfig } from './config';

export const DEFAULT_GRADIENT_COLORS = [
  '#377B65',
  '#3F3F37',
];

export const DEFAULT_DATA = {
  labels: ['', ''],
  datasets: [
    {
      data: [0, 25000],
      backgroundColor: '#377B65',
    }
  ],
};

export const OPTIONS = extendConfig({});
