const API_KEY = 'rc_live_27ae7dd622d646e79d38594fb4c75a72'

const URL = `https://api.restcountries.com/countries/v5/name`

const headers = {
    'Authorization': `Bearer ${API_KEY}`
}

export default function fetchCountries(searchQuery = '') {
    return fetch(`${URL}?q=${searchQuery}`, {
        method: 'GET',
        headers,
    }).then(res => res.json())
}