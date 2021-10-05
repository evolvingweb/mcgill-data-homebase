const gradientUnderZero = {
  id: 'gradientUnderZero',
  beforeDraw: (chart, args, opts) => {
    const {
      ctx,
      canvas,
      height,
      chartArea: {
        left,
        right,
        top,
        bottom,
      },
      scales: {
        y,
      }
    } = chart;

    const {
      colorStart = '#DDD',
      colorEnd = '#FFF',
    } = opts;

    const zeroGradient = canvas.getContext('2d')
        .createLinearGradient(0, y.getPixelForValue(0), 0, height - top);
    zeroGradient.addColorStop(0, colorStart);
    zeroGradient.addColorStop(1, colorEnd);
    ctx.fillStyle = zeroGradient;
    ctx.fillRect(left, y.getPixelForValue(0), right - left, bottom);
  }
};

export default gradientUnderZero;
