const { HackerNewsProxyService } = require('./index');

describe('HackerNewsProxyService', () => {    

    describe('getHackerNewsFromAPI', () => {

        it('should get data from Hacker News API', async() => {
            const axios = {
                get: jest.fn().mockResolvedValue({ data: 1 })
            };
            
            const data = await HackerNewsProxyService({ axios }).getHackerNewsFromAPI();
            expect(data).toEqual(1);
        });

    });

});