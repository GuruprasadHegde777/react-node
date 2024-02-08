const express =  require('express');
const path = require('path');
const cors = require('cors');
const app = express();

app.use(cors());

app.use(express.static(path.join(__dirname, '../myapp1/build')));
app.get('/react',(req,res) => {
 res.sendFile(path.join(__dirname,'../myapp1/build/'));
});

app.get('/react',(req,res) => {
    res.sendFile(path.join(__dirname,'../myapp1/build/index.html'));
   });

const port = process.env.PORT || 5002;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

