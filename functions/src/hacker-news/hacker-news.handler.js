const HackerNews = require('./hacker-news.model');

const handler = ({ axios }) => ({
    get: async(req, res) => {
        const result = await HackerNews.find({}).exec();

        res.send(result)
    },
    getExternal: async(req, res) => {
        const { data }   = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');

        res.send(data)
    },
    delete: (req, res) => {
        const { id } = req.params;
        
        res.send(result)
    }
})

module.exports = handler;