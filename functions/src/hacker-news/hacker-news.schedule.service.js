const service = ({ schedule, hackerNewsService }) => ({

    getDataNow: () => {
        hackerNewsService.saveData();
    },

    getDataEveryHour: () => {
        return schedule.scheduleJob('0 0 * * * *', () => {
            hackerNewsService.saveData();
        });
    }
});

module.exports = service;