import { Bar } from 'react-chartjs-2';

export const DEFAULT_GRADIENT_COLORS = [
    '#377B65',
    '#3F3F37',
];

const data = {
  labels: ['Design 1'],
  datasets: [
    {
      data: [25000],
      backgroundColor: '#377B65',
      barPercentage: .2,
      categoryPercentage: .2,
    }
  ],
};

const options = {
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

const Summary = ({
  gradientColors = DEFAULT_GRADIENT_COLORS,
}) => {

  const parsedData = (canvas) => {
    const ctx = canvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0,0,600, 0);
    if (gradientColors.length) {
      gradientColors.forEach((color, index) => {
        if (index < 2) {
          gradient.addColorStop(index, color)
        }
      });

      const { datasets } = data;

      const newDataSets = datasets.map((dataItem) => {
        dataItem.backgroundColor = gradient;
        dataItem.hoverbackgroundColor = gradient;
        return dataItem;
      });

      return {
        ...data,
        datasets: newDataSets,
      };
    }

    return data;
  };
  return (
      <Bar data={parsedData} options={options} />
  );
};


export default Summary;
