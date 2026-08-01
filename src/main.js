import fetchCountries from "./fetchCountries";
import message from "./message";

const countryInput = document.getElementById("country-input");
const fetchContainer = document.querySelector('.fetch-container')

let debounceTimeout;

const renderCountriesList = (countries) => {
    fetchContainer.insertAdjacentHTML("beforeend", `
        <ul class="country-list">
            ${
                countries.map(country => `
                    <li>${country?.names.common}</li>
                `).join('')
            }
        </ul>
    `)
}

const renderCountryInfo = (country) => {
    if (country) {
        const {
            names,
            capitals,
            population,
            languages,
            flag,
        } = country;

        fetchContainer.insertAdjacentHTML("beforeend", `
        <main class="container">

          <h1 class="country-name">${names.common}</h1>

          <div class="country-card">

            <div class="country-info">
              <p><strong>Capital: </strong>
                    ${capitals.map(capital => `<span class="capital"> ${capital.name}</span>`)}
              </p>

              <p><strong>Population:</strong>
                <span class="population">${population}</span>
              </p>

              <div class="languages-block">
                <strong>Languages:</strong>
                <ul class="languages">
                    ${languages.map(language => `<li> ${language.name}</li>`).join('')}
                </ul>
              </div>
            </div>

            <div class="flag">
              <img class="flag-img" src="${flag.url_svg}" alt="Country flag">
            </div>

          </div>

        </main>

        `)
    } else {
        message('Country not found!')
    }
}

countryInput.addEventListener("input", event => {
    clearTimeout(debounceTimeout);

    debounceTimeout = setTimeout(() => {
        const query = countryInput.value.trim()

        if (query) {
            fetchCountries(query).then(countries => {
                fetchContainer.innerHTML = '';

                const {
                    data,
                } = countries

                data.meta.total > 1 ? renderCountriesList(data.objects) : renderCountryInfo(data.objects[0])
            })
        }
    }, 500)
})