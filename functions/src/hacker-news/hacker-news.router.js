const router = ({ hackerNewsDatabaseService, hackerNewsDeletedDatabaseService }) => ({
    
    get: async(req, res) => {
        const { token } = req.params;

        const hackerNewsDeleted = await hackerNewsDeletedDatabaseService.getByUserId( token );
        const deleted = hackerNewsDeleted.map(x => x.objectID);
        const result = await hackerNewsDatabaseService.getNotInDeleted(deleted);

        res.send(result);
    },

    delete: async(req, res) => {
        const { id, token } = req.params;
        const result = await hackerNewsDeletedDatabaseService.save(id, token);
        res.send(result)
    }
})

module.exports = router;