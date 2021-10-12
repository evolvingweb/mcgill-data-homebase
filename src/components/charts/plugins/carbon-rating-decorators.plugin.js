import _forEach from 'lodash/forEach';
import { MAIN_COLORS } from '../config/config';

const TOO_SMALL_CHART_WIDTH = 320;
const ONE_UNIT_WIDTH = 100;
const HALF_UNIT_WIDTH = ONE_UNIT_WIDTH / 2;
const MAX_CHART_VALUE = 650;

const carbonRatingDecorators = {
  id: 'carbonRatingDecorators',
  afterDatasetDraw: (chart, args, opts) => {
    const {
      ctx,
      chartArea: {
        top,
        bottom,
        left,
        width,
      },
      scales: {
        x
      }
    } = chart;

    const { datasets = [] } = chart.data;
    const { value = 0, lineColor = 'black' } = opts;
    const lineEndYPosition = bottom + 8;

    /* Horizontal Line */
    const lastData = ((datasets.length) * ONE_UNIT_WIDTH) - HALF_UNIT_WIDTH;
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = lineColor;
    ctx.setLineDash([]);
    ctx.moveTo(left, lineEndYPosition);
    ctx.lineTo(x.getPixelForValue(lastData), lineEndYPosition);

    ctx.stroke();

    const makeSquare = (canvasCtx, xPosition, yPosition) => {
      const size = 6;
      canvasCtx.beginPath();
      ctx.fillStyle = MAIN_COLORS.blackOlive;
      ctx.strokeStyle = MAIN_COLORS.blackOlive;
      canvasCtx.moveTo(xPosition, yPosition - size);
      canvasCtx.lineTo(xPosition + size, yPosition);
      canvasCtx.lineTo(xPosition, yPosition + size);
      canvasCtx.lineTo(xPosition - size, yPosition);
      canvasCtx.fill();
    };

    const makeTriangle = (canvasCtx, xPosition, yPosition, lineColor, direction = 'left') => {
      const directionFactor = direction === 'left' ? -1 : 1
      canvasCtx.beginPath();
      canvasCtx.moveTo(xPosition + directionFactor, yPosition - 3);
      canvasCtx.lineTo(xPosition + directionFactor, yPosition + 3);
      canvasCtx.lineTo(xPosition + (directionFactor * 7), yPosition);
      canvasCtx.fill();
    };

    const lastIndex = datasets.length - 1;
    _forEach(datasets, (set, index) => {
      const {
        label,
        data = [],
      } = set;


      const [itemValue = null] = data;
      const realItemValue = (index * ONE_UNIT_WIDTH);
      const xPosition = x.getPixelForValue(realItemValue);
      const isTooSmallChart = width < TOO_SMALL_CHART_WIDTH;
      if (itemValue !== null) {
        ctx.fillStyle = lineColor;
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

      /* Draw labels */
      ctx.font = `12px Inter`;
      ctx.fillStyle = MAIN_COLORS.blackOlive;
      ctx.textAlign = 'center';

      if (label) {
        const labelText = isTooSmallChart ? label.substr(0, 1) : label;
        const xPositionGap = index === lastIndex ? 75 : HALF_UNIT_WIDTH;
        const labelXPosition = x.getPixelForValue(((index + 1) * ONE_UNIT_WIDTH) - xPositionGap);
        ctx.fillText(labelText.toUpperCase(), labelXPosition, top + 22);
      }
    });

    /* Draw value position */
    ctx.fillStyle = MAIN_COLORS.blackOlive;
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = MAIN_COLORS.blackOlive;
    ctx.setLineDash([0, 0]);
    const xPositionForValue = x.getPixelForValue(value + ONE_UNIT_WIDTH);
    const valueXPosition = value >= MAX_CHART_VALUE ? x.getPixelForValue(MAX_CHART_VALUE + ONE_UNIT_WIDTH) : xPositionForValue;
    ctx.moveTo(valueXPosition, top);
    ctx.lineTo(valueXPosition, lineEndYPosition);
    ctx.stroke();

    makeSquare(ctx,valueXPosition, top);
    makeSquare(ctx,valueXPosition, lineEndYPosition);

  }
};

export default carbonRatingDecorators;
