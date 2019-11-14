const express = require('express');

const server = express();

const db = require('../data/db-config');
const Game = require('../games/gamesModel');

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: "running" });
})

server.get('/games', (req, res) => {
    Game.find()
    .then(games => {
        res.json(games)
    })
})

server.delete('/game/:id', (req, res) => {
    const { id } = req.params;

    Game.remove(id)
    .then(deleted => {
        if(deleted) {
            res.status(200).json({ removed: deleted })
        } else {
            res.status(404).json({ message: "Could not find the game with given ID" })
        }
    })
    .catch(err => res.status(500).json({ message: "Failed to delete the game" }))
})

module.exports = server;