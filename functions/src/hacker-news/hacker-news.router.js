const router = ({ hackerNewsDatabaseService }) => ({
    
    get: async(req, res) => {
        const result = await hackerNewsDatabaseService.get();
        res.send(result);
    },

    delete: (req, res) => {
        const { id } = req.params;
        
        res.send(result)
    }
})

module.exports = router;