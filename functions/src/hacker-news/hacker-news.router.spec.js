const { HackerNewsRouter } = require('./index');

describe('HackerNewsRouter', () => {
    
    describe('get', () => {
        it('should get data from database and send', async() => {
            const hackerNewsDatabaseService = {
                get: jest.fn().mockResolvedValue(1)
            }

            const res = {
                send: jest.fn()
            }

            await HackerNewsRouter({ hackerNewsDatabaseService }).get({}, res);
            expect(res.send.mock.calls).toEqual([ [1] ]);
        });
    });


});