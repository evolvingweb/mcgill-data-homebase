const zeroZeroLine = {
  id: 'zeroZeroLine',
  beforeDatasetsDraw: (chart, args, opts) => {
    const {
      ctx,
      chartArea: {
        left,
        right
      },
      scales: {
        y
      }
    } = chart;

    const color = opts.color || 'black';
    const width = opts.width || 1;

    ctx.beginPath();

    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.moveTo(left, y.getPixelForValue(0));
    ctx.lineTo(right, y.getPixelForValue(0));

    ctx.stroke();
  }
};

export default zeroZeroLine;
