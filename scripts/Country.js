export default class Country{
    constructor({image, country, innerLink}){
        this.image = image;
        this.country = country;
        this.innerLink = innerLink;
        return this.render();
    }
    render(){
        this.divCard = document.createElement('div');
        this.divCard.classList.add('trips');
        
        this.countryLink = document.createElement('a');
        this.countryImage = document.createElement('img');
        this.countryImage.setAttribute('src', this.image);
        this.countryImage.setAttribute('alt', 'country photo');
        this.countryLink.setAttribute('href', this.innerLink);
        this.countryLink.appendChild(this.countryImage);

        this.infoDiv = document.createElement('div');
        this.infoDiv.classList.add('cardInfo');

        this.countryPar = document.createElement('p');
        this.countryParText = document.createTextNode(this.country);
        this.countryPar.appendChild(this.countryParText);
        
        this.icon = document.createElement('i');
        this.icon.classList.add("fa-regular", "fa-circle-question");
        this.infoDiv.append(this.countryPar, this.icon);
        
        this.divCard.appendChild(this.countryLink);
        this.divCard.appendChild(this.infoDiv);
        
        return this.divCard;
    }
}