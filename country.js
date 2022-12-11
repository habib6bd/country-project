console.clear();

const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();

const displayCountries = (countries) => {
    const countryDiv = document.getElementById('countries');
    countries.forEach(country => {
        // console.log(country);
const div = document.createElement('div');
div.classList.add('country');
div.innerHTML = `
<h1>${country.name.common}</h1>
<p>${country.capital}</p>
<button onclick="loadCountry('${country.name.common}')">Show Detail</button>
`
countryDiv.appendChild(div);
    })
}

const loadCountry =(name) => {
   const url = `https://restcountries.com/v3.1/name/${name}`;
   fetch(url)
   .then(res => res.json())
   .then(data => displayCountryDetails(data[0]))
}

const displayCountryDetails = (country) => {
   const countryDetails = document.getElementById('countryDetail');
   countryDetails.innerHTML = `
   <h1>Name: ${country.name.common}</h1>
    <p>Population: ${country.population}</p>
    <img src="${country.flags.png}" alt="">
   `
}

