export function addHeroSection() {

let hero = document.querySelector('section#hero');
const heroHeader = document.createElement('h1');
const heroHeaderTekst = document.createTextNode(`Discover story-worthy travel moments`);
heroHeader.appendChild(heroHeaderTekst);
const div1 = document.createElement('div');
const div2 = document.createElement('div');
const div3 = document.createElement('div');
div1.classList.add('heroDiv');
div2.classList.add('heroDiv');
div3.classList.add('heroDiv');
div1.setAttribute('id', 'div1');
div2.setAttribute('id', 'div2');
div3.setAttribute('id', 'div3');
hero.append(heroHeader, div1, div2, div3);

const div1Image = document.createElement('img');
const div2Image = document.createElement('img');
const div3Image = document.createElement('img');

div1Image.src ="https://lp-cms-production.imgix.net/2023-04/Versus-brittany-v-normandy-02.png?fit=crop&q=40&auto=format&w=600&h=800&dpr=2%22)";
div2Image.src ="https://lp-cms-production.imgix.net/2023-04/GettyImages-1176968565.jpg?fit=crop&q=40&auto=format&w=600&h=800&dpr=2";
div3Image.src ="https://lp-cms-production.imgix.net/2023-04/ALV_0464_AlishaVasudev2023.jpg?fit=crop&q=40&auto=format&w=600&h=800&dpr=2";

const div1TextDiv = document.createElement('div');
const div2TextDiv = document.createElement('div');
const div3TextDiv = document.createElement('div');
const div1Text = document.createTextNode("Brittany vs Normandy: which region in the west of France wins?");
const div2Text = document.createTextNode("The top 9 day trips from Athens");
const div3Text = document.createTextNode("Why this Mumbai architect's Walkitecture tour Draws locals and tourists alike");

div1TextDiv.append(div1Text);
div2TextDiv.append(div2Text);
div3TextDiv.append(div3Text);

div1.append(div1Image, div1TextDiv);
div2.append(div2Image, div2TextDiv);
div3.append(div3Image, div3TextDiv);

div1.addEventListener('click', function() {
    window.location.href = '#countries'; 
  });
  div2.addEventListener('click', function() {
    window.location.href = '#aboutUs'; 
  });
  div3.addEventListener('click', function() {
    window.location.href = '#footer';
  });

  div1.addEventListener('hover', function() {
    div1.classList.add = 'red'; 
  });
  div2.addEventListener('hover', function() {
    div1.classList.add = 'red'; 
  });
  div3.addEventListener('hover', function() {
    div1.classList.add = 'red';
  });

}

