const proxy = ({ axios }) => ({

    getHackerNewsFromAPI: async() => {
        const { data } = await axios.get('https://hn.algolia.com/api/v1/search_by_date?query=nodejs');
        return data;
    }
})

module.exports = proxy;