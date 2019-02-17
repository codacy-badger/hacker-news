const service = ({ HackerNewsDeleted }) => ({

    save: async(objectID, userId) => {
        const hackerNewsDeleted = new HackerNewsDeleted({
            objectID: objectID,
            userId: userId
        });
        hackerNewsDeleted.save();
        return hackerNewsDeleted;
    },

    getByUserId: async(userId) => {
        const data = await HackerNewsDeleted.find({'userId': userId}).exec();
        return data;
    }

});

module.exports = service;