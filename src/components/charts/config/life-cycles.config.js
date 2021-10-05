import { FONT_FAMILY, COLORS as MAIN_COLORS } from './config';

export const COLORS = [
  '#A3BA19',
  '#377B65',
  '#C1E8C3',
  '#2346A0',
  '#67BAB3',
  '#F05D5E',
  '#FC8F40',
];

export const OPTIONS = {
  indexAxis: 'x',
  maintainAspectRatio: false,
  responsive: true,
  scales: {
    y:{
      grid: {
        borderDash: [2,3],
        color: function(context) {
          const { tick: { value } = {} } = context;
          return value === 0 ? MAIN_COLORS.black : MAIN_COLORS.gridColor;
        },
        borderWidth: 2,
        lineWidth: 1,
        borderColor: MAIN_COLORS.black,
        drawBorder: true,
        drawTicks: false,
      },
      ticks: {
        padding: 8,
        stepSize: 10000,
        color: MAIN_COLORS.darkGray,
        font: {
          family: FONT_FAMILY,
          size: 12,
          weight: 600,
        },
        callback: (value) => {
          if (!value) {
            return '0';
          }

          return `${value / 1000}K`
        }
      },
    },
    x: {
      title: {
        display: true,
        text: '0 KgCO2eq',
        color: MAIN_COLORS.blackOlive,
        align: 'start',
        font: {
          family: FONT_FAMILY,
          size: 12,
          weight: 600,
        },
        padding: { top: 12 }
      },
      grid: {
        display: false,
        drawBorder: false,
        drawTicks: false,
      },
      ticks: {
        display: false,
      },
    },
  },
  plugins: {
    legend: {
      display: true,
      position: 'right',
      align: 'start',
      fullSize: false,
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
    zeroZeroLine: {
      color: MAIN_COLORS.black,
      width: 2,
    },
    gradientUnderZero: {
      colorStart: 'rgba(196, 196, 196, .4)',
      colorEnd: 'rgba(196, 196, 196, 0)',
    },
  },
};
