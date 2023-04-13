let hero = document.querySelector('section#hero');
const heroHeader = document.createElement('h1');
const heroHeaderTekst = document.createTextNode('Tekstas esantis hero');
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

div1Image.src ="https://i.natgeofe.com/k/e800ca90-2b5b-4dad-b4d7-b67a48c96c91/spain-madrid.jpg?w=636&h=358";
div2Image.src ="https://i.guim.co.uk/img/media/925fbfbfbf01a380d98d55fee1cee197b468ee54/0_128_5120_3073/master/5120.jpg?width=465&quality=85&dpr=1&s=none";
div3Image.src ="https://media.istockphoto.com/id/1175877931/photo/aerial-view-of-the-old-town-and-the-modern-center-of-vilnius-lithuania.jpg?s=612x612&w=0&k=20&c=r_PGLciRBYoyVmQWS7K-Re3dyu6jioTmm1BcBi7-iqo=";

const div1TextDiv = document.createElement('div');
const div2TextDiv = document.createElement('div');
const div3TextDiv = document.createElement('div');
const div1Text = document.createTextNode("Spain is a country located in southwestern Europe, known for its rich history, diverse culture, and stunning landscapes. It is famous for its art and architecture, such as the works of Gaudi and the Alhambra palace. Spain is also renowned for its cuisine, including paella, tapas, and sangria. Its sunny beaches, picturesque cities, and vibrant nightlife make it a popular tourist destination. Spain is also home to many important historical sites, such as the Roman aqueduct in Segovia and the medieval city of Toledo.");
const div2Text = document.createTextNode("Spain is a country located in southwestern Europe, known for its rich history, diverse culture, and stunning landscapes. It is famous for its art and architecture, such as the works of Gaudi and the Alhambra palace. Spain is also renowned for its cuisine, including paella, tapas, and sangria. Its sunny beaches, picturesque cities, and vibrant nightlife make it a popular tourist destination. Spain is also home to many important historical sites, such as the Roman aqueduct in Segovia and the medieval city of Toledo.");
const div3Text = document.createTextNode("Spain is a country located in southwestern Europe, known for its rich history, diverse culture, and stunning landscapes. It is famous for its art and architecture, such as the works of Gaudi and the Alhambra palace. Spain is also renowned for its cuisine, including paella, tapas, and sangria. Its sunny beaches, picturesque cities, and vibrant nightlife make it a popular tourist destination. Spain is also home to many important historical sites, such as the Roman aqueduct in Segovia and the medieval city of Toledo.");

div1TextDiv.append(div1Text);
div2TextDiv.append(div2Text);
div3TextDiv.append(div3Text);

div1.append(div1Image, div1TextDiv);
div2.append(div2Image, div2TextDiv);
div3.append(div3Image, div3TextDiv);
