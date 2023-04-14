import Country from "./Country.js";

fetch("./scripts/countries.json")
.then(res => res.json())
.then(data => {
    const trips = document.querySelector('#trips');
    data.salys.forEach(country => {
        const countryDiv = new Country(country);
        trips.appendChild(countryDiv);
    });
})