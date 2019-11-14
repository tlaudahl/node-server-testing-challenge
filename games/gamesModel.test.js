const db = require('../data/db-config');

const { insert, remove } = require('./gamesModel');

describe('Games Model', function() {
    describe('insert', function() {
        beforeEach(async () => {
            await db('games').truncate();
        });

        it('should insert a game', async function() {
            await insert({ title: "RDR2", rating: "M"});
            const games = await db('games');

            expect(games).toHaveLength(1);
            expect(games[0].title).toBe("RDR2");
            expect(games[0].rating).toBe("M");
        });

        it('should insert multiple games', async function() {
            let rdr2 = await insert({ title: "RDO", rating: "M"})
            await insert({ title: "ESO", rating: "M"})

            const games = await db('games');
            expect(games).toHaveLength(2);
            expect(rdr2.id).toBeDefined();
            expect(games[1].title).toBe('ESO');
        });
    });
})