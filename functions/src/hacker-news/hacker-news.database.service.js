const service = ({ HackerNews }) => ({

    save: async(data) => {
        const dataSaved = await HackerNews.find({ objectID: data.objectID }).exec();
        if( dataSaved.length === 0 ){
            const hackerNews = new HackerNews({
                objectID: data.objectID,
                title: data.title,
                author: data.author,
                url: data.url,
                createdAt:  data.createdAt
            });
            hackerNews.save();
            console.log(hackerNews);
        }
    }

});

module.exports = service;