export default class Country{
    constructor({image, country}){
        this.image = image;
        this.country = country;
        return this.render();
    }
    render(){
        this.divCard = document.createElement('div');
        this.divCard.classList.add('trips');
        
        this.countryLink = document.createElement('a');
        this.country.setAttribute('href', );

        this.countryImage = document.createElement('img');
        this.countryImage.setAttribute('src', this.image);
        this.countryImage.setAttribute('alt', 'country photo');
        this.countryLink.appendChild(this.countryImage);

        this.countryPar = document.createElement('p');
        this.countryParText = document.createTextNode(this.country);
        this.countryPar.appendChild(this.countryParText);
        this.countryLink.appendChild(this.countryPar);

        this.divCard.appendChild(this.countryLink);

        return this.divCard;
    }
}