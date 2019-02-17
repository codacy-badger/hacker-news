const { HackerNewsRouter } = require('./index');

describe('HackerNewsRouter', () => {
    
    describe('get', () => {
        it('should get data from database and send', async() => {
            const hackerNewsDatabaseService = {
                getNotInDeleted: jest.fn().mockResolvedValue(1)
            }

            const hackerNewsDeletedDatabaseService = {
                getByUserId: jest.fn().mockResolvedValue([])
            }

            const res = {
                send: jest.fn()
            }

            const req = {
                params: { token : 'token'}
            }

            await HackerNewsRouter({ hackerNewsDatabaseService, hackerNewsDeletedDatabaseService }).get(req, res);
            expect(res.send.mock.calls).toEqual([ [1] ]);
        });
    });


});