const HackerNews = require('./hacker-news.model');

const controller = ({  }) => ({
    get: async(req, res) => {
        const result = await HackerNews.find({}).exec();

        res.send(result)
    },
    delete: (req, res) => {
        const { id } = req.params;
        
        res.send(result)
    }
})

module.exports = controller;