const scroller = scrollama();

const container = document.getElementById('container');

// Array of circle texts
const circleTexts = ['Alt Rock', 'Art Pop', 'Dance Pop','Electro Pop', ' Tango', 'R&B', 'Hip Hop', 'Psychedelic Pop'];
const circleColors = ['#022E79', '#710461', '#EC0E49', '#E87032','#05732A','#15C386', '#A9DA6E','#FFEF5B'];

let clickedElement = null;

// Create circles dynamically
for (let i = 0; i < circleTexts.length; i++) {
  const circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.backgroundColor = circleColors[i % circleColors.length];


  const text = document.createElement('div');
  text.classList.add('text');
  text.textContent = circleTexts[i];

  circle.appendChild(text);
  container.appendChild(circle);

  // Add click event listener to circles
  circle.addEventListener('click', () => {
    clickedElement = circleColors[i % circleColors.length];;
    console.log('Clicked color:', clickedElement);
    window.scrollTo(0, document.getElementById('section-1').offsetTop);
});
}

/////SCROLLAMA
// Define Scrollama step details
const steps = document.querySelectorAll('.step');

// Setup the Scrollama instance
scroller
  .setup({
    step: steps,
    offset: 0.5,
    progress: true
  })
  .onStepEnter(({ index }) => {
    // Handle scroll step enter event
    console.log(`Step ${index} entered`);
  })
  .onStepExit(({ index }) => {
    // Handle scroll step exit event
    console.log(`Step ${index} exited`);
  });

////////////
const imageContainer = document.getElementById('imageContainer');
imageContainer.classList.add('image-container');

// Array of image file names
const imageFiles = ['./imagenes/estrella4.png', './imagenes/estrella6.png', './imagenes/estrella8.png', './imagenes/estrella10.png'];

const img = document.createElement('img');
img.src = './imagenes/estrella4.png';
img.alt = './imagenes/estrella4.png';
img.classList.add('img-0');
imageContainer.appendChild(img);
img.addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('section-2').offsetTop);
});

const img1 = document.createElement('img');
img1.src = './imagenes/estrella6.png';
img1.alt = './imagenes/estrella6.png';
img1.classList.add('img-1');
imageContainer.appendChild(img1);
img1.addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('section-2').offsetTop);
});

const img2 = document.createElement('img');
img2.src = './imagenes/estrella8.png';
img2.alt = './imagenes/estrella8.png';
img2.classList.add('img-2');
imageContainer.appendChild(img2);
img2.addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('section-2').offsetTop);
});

const img3 = document.createElement('img');
img3.src = './imagenes/estrella10.png';
img3.alt = './imagenes/estrella10.png';
img3.classList.add('img-3');
imageContainer.appendChild(img3);
img3.addEventListener('click', () => {
    window.scrollTo(0, document.getElementById('section-2').offsetTop);
});
//document.body.appendChild(imageContainer);

/////////barras

const container3 = document.createElement('div');
document.body.appendChild(container3);

// Bar Graph 1
const canvas1 = document.createElement('canvas');
canvas1.width = 500;
canvas1.height = 200;
container3.appendChild(canvas1);

const ctx1 = canvas1.getContext('2d');
const maxBarWidth1 = canvas1.width - 40; // Adjust the value to control the maximum width of the bars
const xTicks1 = ['0%', '50%', '100%'];
const tickSpacing1 = maxBarWidth1 / (xTicks1.length - 1);
let sliderValue1 = 0;

function drawBarGraph1() {
  ctx1.clearRect(0, 0, canvas1.width, canvas1.height);

  const barHeight = 80;
  const barWidth = sliderValue1 * maxBarWidth1 / 100; // Adjust the value to control the scaling of the bars
  const barX = 20; // Adjust the value to control the horizontal position of the bars
  const barY = (canvas1.height - barHeight) / 2;

  ctx1.fillStyle = '#E73BA5';
  ctx1.fillRect(barX, barY, barWidth, barHeight);

  // Draw x-axis ticks and labels
  ctx1.strokeStyle = 'black';
  ctx1.lineWidth = 1;
  ctx1.font = '12px Arial';
  ctx1.textAlign = 'center';
  ctx1.textBaseline = 'top';
  ctx1.fillStyle = 'black';

  for (let i = 0; i < xTicks1.length; i++) {
    const tickValue = xTicks1[i];
    const tickX = barX + (i * tickSpacing1);
    const tickY = barY + barHeight + 10; // Position the tick labels below the bars

    ctx1.beginPath();
    ctx1.moveTo(tickX, tickY - 5);
    ctx1.lineTo(tickX, tickY);
    ctx1.stroke();

    ctx1.fillText(tickValue, tickX, tickY + 10);
  }
}

function handleSliderChange1(event) {
  sliderValue1 = event.target.value;
  drawBarGraph1();
}

drawBarGraph1();

const slider1 = document.createElement('input');
slider1.type = 'range';
slider1.min = 0;
slider1.max = 100;
slider1.value = sliderValue1;
slider1.addEventListener('input', handleSliderChange1);
slider1.classList.add('slider-pink');
container3.appendChild(slider1);

// Bar Graph 2
const canvas2 = document.createElement('canvas');
canvas2.width = 500;
canvas2.height = 200;
container3.appendChild(canvas2);

const ctx2 = canvas2.getContext('2d');
const maxBarWidth2 = canvas2.width - 40; // Adjust the value to control the maximum width of the bars
const xTicks2 = ['0%', '50%', '100%'];
const tickSpacing2 = maxBarWidth2 / (xTicks2.length - 1);
let sliderValue2 = 0;

function drawBarGraph2() {
  ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

  const barHeight = 80;
  const barWidth = sliderValue2 * maxBarWidth2 / 100; // Adjust the value to control the scaling of the bars
  const barX = 20; // Adjust the value to control the horizontal position of the bars
  const barY = (canvas2.height - barHeight) / 2;

  ctx2.fillStyle = '#5BDCE1';
  ctx2.fillRect(barX, barY, barWidth, barHeight);

  // Draw x-axis ticks and labels
  ctx2.strokeStyle = 'black';
  ctx2.lineWidth = 1;
  ctx2.font = '12px Arial';
  ctx2.textAlign = 'center';
  ctx2.textBaseline = 'top';
  ctx2.fillStyle = 'black';

  for (let i = 0; i < xTicks2.length; i++) {
    const tickValue = xTicks2[i];
    const tickX = barX + (i * tickSpacing2);
    const tickY = barY + barHeight + 10; // Position the tick labels below the bars

    ctx2.beginPath();
    ctx2.moveTo(tickX, tickY - 5);
    ctx2.lineTo(tickX, tickY);
    ctx2.stroke();

    ctx2.fillText(tickValue, tickX, tickY + 10);
  }
}

function handleSliderChange2(event) {
  sliderValue2 = event.target.value;
  drawBarGraph2();
}

drawBarGraph2();

const slider2 = document.createElement('input');
slider2.type = 'range';
slider2.min = 0;
slider2.max = 100;
slider2.value = sliderValue2;
slider2.addEventListener('input', handleSliderChange2);
slider2.classList.add('slider-celeste');
container3.appendChild(slider2);

///////////tu esfera
const container4 = document.createElement('div');
document.body.appendChild(container4);

const mi_circle = document.createElement('div');
mi_circle.classList.add('circle');
mi_circle.style.backgroundColor = clickedElement;

container4.appendChild(mi_circle)