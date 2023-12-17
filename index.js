import express from 'express'

const app = express();

app.get('/', (req, res) => {
    res.json({
        kitty: 'helo'
    })
})

app.listen(5001, () => {
    console.log('Api running on port 5001')
})

