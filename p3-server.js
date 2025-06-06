/*
CIT 281 Spring 2025 Project 3
Ulys Chauncey Drumrongthai
*/

const express = require('express');
const { coinCombo, coinValue } = require('./p3-module');

const app = express();

app.use(express.static('public'));

app.get('/coincombo', (req, res) => {
    const amount = Number(req.query.amount);

    if (isNaN(amount) || amount < 0) {
        return res.json({ error: 'Amount must be a non-negative number'});
    }

    res.json(coinCombo(amount));
});

app.get('/coinvalue', (req, res) => {
    const pennies = parseInt(req.query.pennies) || 0;
    const nickels = parseInt(req.query.nickels) || 0;
    const dimes = parseInt(req.query.dimes) || 0;
    const quarters = parseInt(req.query.quarters) || 0;
    const halves = parseInt(req.query.halves) || 0;
    const dollars = parseInt(req.query.dollars) || 0;

    res.json(coinValue({ pennies, nickels, dimes, quarters, }));
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

const HOST = 'localhost';
const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running at http://${HOST}:${PORT}`);
});