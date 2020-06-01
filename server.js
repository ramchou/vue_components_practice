const express = require('express')
const app = express()

app.get('/user/info', (req, res) => {
    res.send({
        status: 200,
        items: [
            { id: 1, name: 'agatha' },
            { id: 2, name: 'poly' }
        ]
    })
})

app.listen(4000, () => {
    console.log('server started listening on http://localhost:4000');
})