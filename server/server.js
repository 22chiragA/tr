import express from 'express'
require('dotenv').config()

const app = express();
app.get('/',(req,res) =>{
    res.send('server is ready');
});
app.get('/api/jokes',(req,res) => {
    const jokes = [
        {
        id: 1,
        title: 'A joke',
        content: 'this is first joke'
        },
        {
            id: 2,
            title: 'A joke',
            content: 'this is second joke',
        },
        {
            id: 3,
            title: 'A joke',
            content: 'this is third joke',
        }

    ];
    res.json(jokes);
})
const port = process.env.PORT || 3000;
app.listen(port,() =>{
    console.log(`serve at http://localhost:${port}`);
})

