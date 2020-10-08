const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.sendFile('index.html', {root: __dirname});
});

app.use(express.static(__dirname + "/dist"));

let PORT = process.env.PORT || 5000;
app.listen(PORT, ()=>{
    console.log('conected'+ PORT);
    console.log(__dirname);
})