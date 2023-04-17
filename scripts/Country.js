export default class Country {
    constructor({ image, country, innerLink, moreInfo, continent }) {
      this.image = image;
      this.country = country;
      this.innerLink = innerLink;
      this.moreInfo = moreInfo;
      this.continent = continent;
      return this.render();
    }
  
    render() {
      const divCard = document.createElement("div");
      divCard.classList.add("trips");
  
      const countryLink = document.createElement("a");
      const countryImage = document.createElement("img");
      countryImage.src = this.image;
      countryImage.alt = "country photo";
      countryLink.href = this.innerLink;
      countryLink.appendChild(countryImage);
  
      const infoDiv = document.createElement("div");
      infoDiv.classList.add("cardInfo");
  
      const countryPar = document.createElement("p");
      countryPar.textContent = this.country;
  
      const icon = document.createElement("i");
      icon.classList.add("fa-regular", "fa-circle-question");
      icon.addEventListener("click", () => {
        this.toggleCountries();
        this.showModal();
      });
  
      infoDiv.append(countryPar, icon);
  
      divCard.appendChild(countryLink);
      divCard.appendChild(infoDiv);
  
      return divCard;
    }
  
    toggleCountries() {
      const countriesSection = document.querySelector("section#countries");
      countriesSection.classList.toggle("hide");
    }
  
    showModal() {
      const modal = document.createElement("div");
      modal.classList.add("modal");
  
      const content = document.createElement("div");
      content.classList.add("modal-content");
  
      const title = document.createElement("h1");
      title.textContent = this.country;
  
      const cont = document.createElement("h2");
      cont.textContent = this.continent;
  
      const text = document.createElement("p");
      text.textContent = this.moreInfo;
  
      const closeButton = document.createElement("button");
      closeButton.textContent = "Close";
      closeButton.addEventListener("click", () => {
        modal.remove();
        this.toggleCountries();
      });
  
      content.append(title, cont, text, closeButton);
  
      modal.appendChild(content);
  
      document.querySelector("section#countries").appendChild(modal);
      modal.classList.add('modal');
    }
  }