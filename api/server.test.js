const request = require('supertest');

const server = require('./server');

describe('server', function() {
    describe('GET /', function() {
        it("should return 200 OK", function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.status).toBe(200);
            });
        });

        it("should return JSON formatted response", function() {
            return request(server)
            .get('/')
            .then(res => {
                expect(res.type).toMatch(/json/i);
            });
        });

        it('removes from the database', function() {
            return request(server)
            .delete('/game/2')
            .then(res => {
                expect(res.status).toBe(200);
            })
        })
    })
})