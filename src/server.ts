import express from 'express';
import Hipoteca from './hipoteca';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Learning Node.js + Express + TypeScript!');
});

app.get('/hello', (req, res) => {
    const greeting = {
        message: 'Aprendiendo Node.js + Express + TypeScript !',
        date: new Date()
    }
    res.type('application/json');
    res.send(greeting);
});

app.get('/hipoteca', (req, res) => {
    const capital = Number(req.query.capital);
    const interes = Number(req.query.interes);
    const plazo = Number(req.query.plazo);
    try {
        const hipoteca = new Hipoteca(capital, interes, plazo);
        let cuotas = hipoteca.calcularCuotas();    
        res.status(200);
        res.type('application/json');
        res.send({ hipoteca, cuotas });
    } catch (error) {
        res.status(400);
        if (error instanceof Error) {
            res.send({ error: error.message });
        } else {
            res.send({ error: 'An unknown error occurred' });
        }
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

