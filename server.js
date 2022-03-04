const express = require('express');
const app = express ();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
//listen on port 3000
app.listen(port, () => console.info (`listening on port ${port}`))