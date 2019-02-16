const service = ({ schedule, hackerNewsService }) => ({

    getDataNow: () => {
        console.log('Get getDataNow from API');
        hackerNewsService.saveData();
    },

    getDataEveryHour: () => {
        return schedule.scheduleJob('0 0 * * * *', () => {
            console.log('Get getDataEveryHour from API');
            hackerNewsService.saveData();
        });
    }
});

module.exports = service;