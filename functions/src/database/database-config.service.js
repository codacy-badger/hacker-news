const service = ({ mongoose }) => ({

    connect: () => {
        const config = {
            useNewUrlParser: true
        };
        const credentials = {
            user: 'ealiaga',
            password: 'EvrEvrEvr'
        }
        mongoose.connect(`mongodb://${credentials.user}:${credentials.password}@cluster0-shard-00-00-6zdiu.gcp.mongodb.net:27017,cluster0-shard-00-1-6zdiu.gcp.mongodb.net:27017,cluster0-shard-00-02-6zdiu.gcp.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true`, config);
    }

});

module.exports = service;