import _forEach from 'lodash/forEach';

const carbonRatingDecorators = {
  id: 'carbonRatingDecorators',
  afterDatasetDraw: (chart, args, opts) => {
    const {
      ctx,
      chartArea: {
        top,
        bottom,
        left,
        right
      },
      scales: {
        x,
        y
      }
    } = chart;

    const { datasets = [] } = chart.data;
    const { value = 0, lineColor = 'black' } = opts;
    const lineEndYPosition = bottom + 8;

    /* Horizontal Line */
    const lastData = ((datasets.length) * 100) - 50;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = lineColor;
    ctx.setLineDash([]);
    ctx.moveTo(left, lineEndYPosition);
    ctx.lineTo(x.getPixelForValue(lastData), lineEndYPosition);

    ctx.stroke();

    const makeTriangle = (canvasCtx, xPosition, yPosition, lineColor, direction = 'left') => {
      const directionFactor = direction === 'left' ? -1 : 1
      canvasCtx.beginPath();
      canvasCtx.moveTo(xPosition + directionFactor, yPosition - 3);
      canvasCtx.lineTo(xPosition + directionFactor, yPosition + 3);
      canvasCtx.lineTo(xPosition + (directionFactor * 7), yPosition);
      canvasCtx.fillStyle = lineColor;
      canvasCtx.fill();
    };

    _forEach(datasets, (set, index) => {
      const {
        label,
        data = [],
      } = set;


      const [itemValue = null] = data;
      if (itemValue !== null) {
        const realItemValue = (index * 100);
        const xPosition = x.getPixelForValue(realItemValue);
        // console.log({ label, itemValue, realItemValue, xPosition });

        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = lineColor;
        ctx.setLineDash([2, 3]);
        ctx.moveTo(xPosition, top);
        ctx.lineTo(xPosition, lineEndYPosition);
        ctx.stroke();

        if (index) {
          makeTriangle(ctx, xPosition, lineEndYPosition);
          makeTriangle(ctx, xPosition, lineEndYPosition, lineColor, 'right');
        } else {
          makeTriangle(ctx, xPosition, lineEndYPosition, lineColor, 'right');
        }
      }

    });
  }
};

export default carbonRatingDecorators;
