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
      barPercentage: .2,
      categoryPercentage: .2,
    }
  ],
};

export const OPTIONS = {
  indexAxis: 'y',
  barThickness: 40,
  maintainAspectRatio: false,
  scales: {
    y:{
      grid: {
        display: false,
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
        color: '#3F3F37',
        stepSize: 10000,
        callback: (value) => {
          if (!value) {
            return `0 KgCO2eq`;
          }

          return `${value / 1000}K`
        }
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    tooltip: {
      enabled: false,
    },
  },
};
