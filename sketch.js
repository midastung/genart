const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  // orientation: 'landscape',
  // units: 'cm',
  pixelsPerInch: 100
};

const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height);
    context.fillStyle = 'red';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width/2, height/2, width * 0.2, 0, Math.PI * 2, false);
    context.fillStyle = 'orange';
    context.fill();
    context.lineWidth =  width * 0.05;
    context.strokeStyle = 'blue'
    context.stroke()
  };
};

canvasSketch(sketch, settings);
