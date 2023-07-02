const scroller = scrollama();

const container4 = document.getElementById('container4');

////////////////////mi esfera
const mi_circle = document.createElement('div');
mi_circle.classList.add('mycircle');
mi_circle.style.backgroundColor = "white";

container4.appendChild(mi_circle)

//////////// cancion

const tu_song = document.createElement('div');
tu_song.classList.add('tu_song');
tu_song.style.opacity = 0;


const songTitle1 = document.createElement('p');
songTitle1.className = 'songtitle';
songTitle1.textContent = 'How Soon Is Now?';
tu_song.appendChild(songTitle1);

const artist = document.createElement('p');
artist.className = 'artist';
artist.textContent = 'The Smiths';
tu_song.appendChild(artist);

const escan = document.createElement('img');
escan.src = './imagenes/codigo.svg';
escan.alt = './imagenes/codigo.svg';
escan.classList.add('codigo');
tu_song.appendChild(escan);

container4.appendChild(tu_song);
//////////////////////////


const op1 = document.createElement('img');
op1.src = './imagenes/estrellasexplicit/4.false.svg';
op1.alt = './imagenes/estrellasexplicit/4.false.svg';
op1.classList.add('op1');

const op2 = document.createElement('img');
op2.src = './imagenes/estrellasexplicit/6.false.svg';
op2.alt = './imagenes/estrellasexplicit/6.false.svg';
op2.classList.add('op1');

const op3 = document.createElement('img');
op3.src = './imagenes/estrellasexplicit/8.false.svg';
op3.alt = './imagenes/estrellasexplicit/8.false.svg';
op3.classList.add('op1');

const op4 = document.createElement('img');
op4.src = './imagenes/estrellasexplicit/10.false.svg';
op4.alt = './imagenes/estrellasexplicit/10.false.svg';
op4.style.marginTop = '10px';
op4.classList.add('op1');

const op5 = document.createElement('img');
op5.src = './imagenes/estrellasexplicit/4.true.svg';
op5.alt = './imagenes/estrellasexplicit/4.true.svg';
op5.classList.add('op1');

const op6 = document.createElement('img');
op6.src = './imagenes/estrellasexplicit/6.true.svg';
op6.alt = './imagenes/estrellasexplicit/6.true.svg';
op6.classList.add('op1');

const op7 = document.createElement('img');
op7.src = './imagenes/estrellasexplicit/8.true.svg';
op7.alt = './imagenes/estrellasexplicit/8.true.svg';
op7.classList.add('op1');

const op8 = document.createElement('img');
op8.src = './imagenes/estrellasexplicit/10.true.svg';
op8.alt = './imagenes/estrellasexplicit/10.true.svg';
op8.classList.add('op1');


///////////////////

const container = document.getElementById('container');

// Array of circle texts
const circleTexts = ['Alt Rock', 'Art Pop', 'Dance Pop','Electro Pop', ' Rock', 'R&B', 'Hip Hop', 'Psychedelic Pop'];
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
    clickedElement = circleColors[i % circleColors.length];
    var section1 = document.getElementById("section-1");
    section1.scrollIntoView({ behavior: 'smooth' });
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

////////////danza
const imageContainer = document.getElementById('imageContainer');
imageContainer.classList.add('image-container');

// Array of image file names
const imageFiles = ['./imagenes/estrella4.png', './imagenes/estrella6.png', './imagenes/estrella8.png', './imagenes/estrella10.png'];
let danza = null;

const img = document.createElement('img');
img.src = './imagenes/estrella4.png';
img.alt = './imagenes/estrella4.png';
img.classList.add('img-0');
imageContainer.appendChild(img);
img.addEventListener('click', () => {
    danza = 1;
    var section2 = document.getElementById("section-2");
    section2.scrollIntoView({ behavior: 'smooth' });
});

const img1 = document.createElement('img');
img1.src = './imagenes/estrella6.png';
img1.alt = './imagenes/estrella6.png';
img1.classList.add('img-1');
imageContainer.appendChild(img1);
img1.addEventListener('click', () => {
  danza = 2;
  var section2 = document.getElementById("section-2");
  section2.scrollIntoView({ behavior: 'smooth' });
});

const img2 = document.createElement('img');
img2.src = './imagenes/estrella8.png';
img2.alt = './imagenes/estrella8.png';
img2.classList.add('img-2');
imageContainer.appendChild(img2);
img2.addEventListener('click', () => {
  danza = 3;
  var section2 = document.getElementById("section-2");
  section2.scrollIntoView({ behavior: 'smooth' });
});

const img3 = document.createElement('img');
img3.src = './imagenes/estrella10.png';
img3.alt = './imagenes/estrella10.png';
img3.classList.add('img-3');
imageContainer.appendChild(img3);
img3.addEventListener('click', () => {
  danza = 4;
  var section2 = document.getElementById("section-2");
  section2.scrollIntoView({ behavior: 'smooth' });
});


//document.body.appendChild(imageContainer);

/////////barras
const container3 = document.getElementById('container3');
//const container3 = document.createElement('div');

// Bar Graph 1
const canvas1 = document.createElement('canvas');
canvas1.width = 500;
canvas1.height = 100;
canvas1.classList.add('canvas1')
container3.appendChild(canvas1);

let sliderValue1 = 0;

function handleSliderChange1(event) {
  sliderValue1 = event.target.value;
  pop = event.target.value;
  console.log(pop)
}

const slider1 = document.createElement('input');
let pop = 0;
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
canvas2.height = 100;
container3.appendChild(canvas2);


let sliderValue2 = 0;


function handleSliderChange2(event) {
  sliderValue2 = event.target.value;
  acoust = event.target.value;
}


const slider2 = document.createElement('input');
let acoust = 0;
slider2.type = 'range';
slider2.min = 0;
slider2.max = 100;
slider2.value = sliderValue2;
slider2.addEventListener('input', handleSliderChange2);
slider2.classList.add('slider-celeste');
container3.appendChild(slider2);


var button = document.createElement("button");
button.textContent = "Next";
button.classList.add('boton')

// Add click event listener to scroll to section2
button.addEventListener("click", function() {
  var section3 = document.getElementById("section-3");
  section3.scrollIntoView({ behavior: 'smooth' });
});

// Append the button to the body
container3.appendChild(button);

//////////explicit

const container5 = document.getElementById('container5');

const truei = document.createElement('img');
truei.src = './imagenes/true.png';
truei.alt = './imagenes/true.png';
truei.classList.add('truei');
container5.appendChild(truei);
truei.addEventListener('click', () => {
    if(danza ==1){
      mi_circle.appendChild(op5);
    }
    if(danza ==3){
      mi_circle.appendChild(op7);
    }
    if(danza ==4){
      mi_circle.appendChild(op8);
    }
    if(danza ==2){
      mi_circle.appendChild(op6);
    }
    mi_circle.style.backgroundColor = clickedElement;
    tu_song.style.opacity = 1;
    var section4 = document.getElementById("section-4");
    section4.scrollIntoView({ behavior: 'smooth' });
});

const falsei = document.createElement('img');
falsei.src = './imagenes/false.png';
falsei.alt = './imagenes/false.png';
falsei.classList.add('falsei');
container5.appendChild(falsei);
falsei.addEventListener('click', () => {
  if(danza ==1){
    img.style.opacity = 1;
    mi_circle.appendChild(op1);
  }
  if(danza ==3){
    img2.style.opacity = 1;
    mi_circle.appendChild(op3);
  }
  if(danza ==4){
    img3.style.opacity = 1;
    mi_circle.appendChild(op4);
  }
  if(danza ==2){
    img1.style.opacity = 1;
    mi_circle.appendChild(op2);
  }
  mi_circle.style.backgroundColor = clickedElement;
  tu_song.style.opacity = 1;
  var section4 = document.getElementById("section-4");
  section4.scrollIntoView({ behavior: 'smooth' });
});

///////////////your song
/*
d3.csv('vizdatabase.csv', d3.autoType).then(data => {
    
  const bio = d3.select('#chart_container')
    .data(data)
    .join('div')
  
  bio.append('h3')
    .attr('class', 'cancion')
    .text(d => d.cancion)

  bio.append('p')
  .attr('class', 'jugador_edad')
  .text(d => d.genero)
  
  bio.append('p')
    .attr('class', 'jugador_nac')
    .text(d => d.acousticness)
    .append('span')
    .text('% acústica')

  bio.append('p')
    .attr('class', 'jugador_nac')
    .text(d => d.danceability)
    .append('span')
    .text('% danzabilidad')

  bio.append('p')
    .attr('class', 'jugador_nac')
    .text('Explícito: ')
    .append('span')
    .text(d => d.explicit)

  bio.append('p')
    .attr('class', 'jugador_nac')
    .text(d => d.popularity)
    .append('span')
    .text('% popularidad')
})*/
///////////////hover
const mi_song = document.createElement('div');
mi_song.classList.add('tu_song');
mi_song.style.display = 'none';

const tit = document.createElement('p');
tit.className = 'songtitle';
tit.textContent = 'Lovesong';
mi_song.appendChild(tit);

const art = document.createElement('p');
art.className = 'artist';
art.textContent = 'Lana del Rey';
mi_song.appendChild(art);

const mi_song2 = document.createElement('div');
mi_song2.classList.add('tu_song');
mi_song2.style.display = 'none';

const tit2 = document.createElement('p');
tit2.className = 'songtitle';
tit2.textContent = 'Enchanted';
mi_song2.appendChild(tit2);

const art2 = document.createElement('p');
art2.className = 'artist';
art2.textContent = 'Taylor Swift';
mi_song2.appendChild(art2);

const mi_song3 = document.createElement('div');
mi_song3.classList.add('tu_song');
mi_song3.style.display = 'none';

const tit3 = document.createElement('p');
tit3.className = 'songtitle';
tit3.textContent = 'Little by Little';
mi_song3.appendChild(tit3);

const art3 = document.createElement('p');
art3.className = 'artist';
art3.textContent = 'Oasis';
mi_song3.appendChild(art3);
///////
const mi_song4 = document.createElement('div');
mi_song4.classList.add('tu_song');
mi_song4.style.display = 'none';

const tit4 = document.createElement('p');
tit4.className = 'songtitle';
tit4.textContent = 'Bags';
mi_song4.appendChild(tit4);

const art4 = document.createElement('p');
art4.className = 'artist';
art4.textContent = 'Clairo';
mi_song4.appendChild(art4);
///////////////////
const mi_song5 = document.createElement('div');
mi_song5.classList.add('tu_song');
mi_song5.style.display = 'none';

const tit5 = document.createElement('p');
tit5.className = 'songtitle';
tit5.textContent = 'I Bet on Losing Dogs';
mi_song5.appendChild(tit5);

const art5 = document.createElement('p');
art5.className = 'artist';
art5.textContent = 'Mitski';
mi_song5.appendChild(art5);
/////////////////////
const mi_song6 = document.createElement('div');
mi_song6.classList.add('tu_song');
mi_song6.style.display = 'none';

const tit6 = document.createElement('p');
tit6.className = 'songtitle';
tit6.textContent = 'Green Lights';
mi_song6.appendChild(tit6);

const art6 = document.createElement('p');
art6.className = 'artist';
art6.textContent = 'Lorde';
mi_song6.appendChild(art6);
///////////////
const mi_song7 = document.createElement('div');
mi_song7.classList.add('tu_song');
mi_song7.style.display = 'none';

const tit7 = document.createElement('p');
tit7.className = 'songtitle';
tit7.textContent = 'bad guy';
mi_song7.appendChild(tit7);

const art7 = document.createElement('p');
art7.className = 'artist';
art7.textContent = 'Billie Eilish';
mi_song7.appendChild(art7);
///////////////
const mi_song8 = document.createElement('div');
mi_song8.classList.add('tu_song');
mi_song8.style.display = 'none';

const tit8 = document.createElement('p');
tit8.className = 'songtitle';
tit8.textContent = 'Electric Feel';
mi_song8.appendChild(tit8);

const art8 = document.createElement('p');
art8.className = 'artist';
art8.textContent = 'MGMT';
mi_song8.appendChild(art8);
//////////////////
const mi_song9 = document.createElement('div');
mi_song9.classList.add('tu_song');
mi_song9.style.display = 'none';

const tit9 = document.createElement('p');
tit9.className = 'songtitle';
tit9.textContent = 'Hung Up';
mi_song9.appendChild(tit9);

const art9 = document.createElement('p');
art9.className = 'artist';
art9.textContent = 'Madonna';
mi_song9.appendChild(art9);
/////////////////77
const mi_song10 = document.createElement('div');
mi_song10.classList.add('tu_song');
mi_song10.style.display = 'none';

const tit10 = document.createElement('p');
tit10.className = 'songtitle';
tit10.textContent = 'Is It True';
mi_song10.appendChild(tit10);

const art10 = document.createElement('p');
art10.className = 'artist';
art10.textContent = 'Tame Impala';
mi_song10.appendChild(art10);
///////////////7
const mi_song11 = document.createElement('div');
mi_song11.classList.add('tu_song');
mi_song11.style.display = 'none';

const tit11 = document.createElement('p');
tit11.className = 'songtitle';
tit11.textContent = 'Flowers';
mi_song11.appendChild(tit11);

const art11 = document.createElement('p');
art11.className = 'artist';
art11.textContent = 'Miley Cyrus';
mi_song11.appendChild(art11);
/////////////////
const mi_song12 = document.createElement('div');
mi_song12.classList.add('tu_song');
mi_song12.style.display = 'none';

const tit12 = document.createElement('p');
tit12.className = 'songtitle';
tit12.textContent = 'Oblivion';
mi_song12.appendChild(tit12);

const art12 = document.createElement('p');
art12.className = 'artist';
art12.textContent = 'Grimes';
mi_song12.appendChild(art12);
/////////////////////////
const mi_song13 = document.createElement('div');
mi_song13.classList.add('tu_song');
mi_song13.style.display = 'none';

const tit13 = document.createElement('p');
tit13.className = 'songtitle';
tit13.textContent = 'On My Mind';
mi_song13.appendChild(tit13);

const art13 = document.createElement('p');
art13.className = 'artist';
art13.textContent = 'Diplo';
mi_song13.appendChild(art13);
///////////////////////
const mi_song14 = document.createElement('div');
mi_song14.classList.add('tu_song');
mi_song14.style.display = 'none';

const tit14 = document.createElement('p');
tit14.className = 'songtitle';
tit14.textContent = 'Roses';
mi_song14.appendChild(tit14);

const art14 = document.createElement('p');
art14.className = 'artist';
art14.textContent = 'Outkast';
mi_song14.appendChild(art14);
////////////////
const mi_song15 = document.createElement('div');
mi_song15.classList.add('tu_song');
mi_song15.style.display = 'none';

const tit15 = document.createElement('p');
tit15.className = 'songtitle';
tit15.textContent = 'Wannabe';
mi_song15.appendChild(tit15);

const art15 = document.createElement('p');
art15.className = 'artist';
art15.textContent = 'Spice Girls';
mi_song15.appendChild(art15);

const repo = [mi_song, mi_song2, mi_song3, mi_song4, mi_song5,mi_song6,mi_song7,mi_song8,mi_song9,mi_song10,mi_song11,mi_song12,mi_song13,mi_song14,mi_song15];
/////////vecindario de canciones
function updatePlot() {
  d3.dsv(',', 'vizdatabase.csv', d3.autoType).then(data => {
    let chart = Plot.plot({
      width: 800,
      height: 400,
      inset : 20,
      marks: [
        Plot.dot(data, {
          x: "popularity",
          y: "acousticness",
          fill: "miembro",
          r: 4,
        }),
        Plot.dot(data, {
          x: () => pop,
          y: () => acoust,
          fill: "#000000",
          r: 4,
        }),
      ],
      y:{
        domain: [0,100],
        label: "Acústica",
      },
      x:{
        domain: [0,100],
        label: "Popularidad",
      },
      color:{
        range: ['#EDAE29', '#861275', '#10A7A0'],
        legend: true,
      }
    });

    d3.select('#grafico').html(''); // Clear the previous chart
    d3.select('#grafico').append(() => chart);
    const chartContainer = d3.select('#grafico').node();
    chartContainer.appendChild(mi_song);
    chartContainer.appendChild(mi_song2);
    chartContainer.appendChild(mi_song3);
    chartContainer.appendChild(mi_song4);
    chartContainer.appendChild(mi_song5);
    chartContainer.appendChild(mi_song6);
    chartContainer.appendChild(mi_song7);
    chartContainer.appendChild(mi_song8);
    chartContainer.appendChild(mi_song9);
    chartContainer.appendChild(mi_song10);
    chartContainer.appendChild(mi_song11);
    chartContainer.appendChild(mi_song12);
    chartContainer.appendChild(mi_song13);
    chartContainer.appendChild(mi_song14);
    chartContainer.appendChild(mi_song15);


    d3.selectAll('circle')
      .on('mouseover', handleMouseOver)
      .on('mouseout', handleMouseOut);
  });
}

// Call updatePlot initially
updatePlot();

// Call updatePlot every 5 seconds (adjust the interval as needed)
setInterval(updatePlot, 5000);

let index = 0;
function handleMouseOver(d, i) {
  d3.select(this).style('opacity', 0.7);
  let j = Math.floor(Math.random() * 15);
  repo[j].style.display = 'block';
  index = j;

}

function handleMouseOut(d, i) {
  repo[index].style.display = 'none';
  d3.select(this).style('opacity', 1);
}


