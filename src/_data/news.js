const fetch = require("node-fetch")
require('dotenv').config()

const url = 'http://newsapi.org/v2/top-headlines?' +
    'country=us&' +
    `apiKey=${process.env.NEWS_API_KEY}`

const getNews = async () => {
    try {
        const response = await fetch(url)
        const json = await response.json()
        return json
    } catch(error) {
       console.error(error)
    }
}

module.exports = getNews
