import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.json({
        Le: 'Le dan'
    })
})

app.listen(5001, () => {
    console.log('Api running on port 5001')
})

