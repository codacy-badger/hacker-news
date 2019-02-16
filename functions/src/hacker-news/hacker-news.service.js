
const service = ({ hackerNewsProxyService, hackerNewsDatabaseService }) => ({

    saveData: async() => {
        const { hits } = await hackerNewsProxyService.getHackerNewsFromAPI();

        hits.forEach( hit => {
            const hacker = { 
                objectID: hit.objectID,
                title: hit.story_title || hit.title,
                author: hit.author,
                url: hit.story_url || hit.url,
                createdAt: hit.created_at
            };
            hackerNewsDatabaseService.save(hacker);
        });
        
    }

})

module.exports = service;