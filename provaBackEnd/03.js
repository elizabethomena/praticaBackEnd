const url = require('url')

const adress = new URL('https://nodejs.org/api/url.html#url_new_url_input_base')

console.log(url.urlToHttpOptions(adress))
console.log(adress.href)