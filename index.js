
const express = require('express');



var msg = "hello world";
 console.log(msg);
const PORT = 3000;
const app = express();
app.get('/',(req,res) => {
    res.send("this is test || SUCCESS || YUP || JENKINS INTEGRATED");
});

app.listen(PORT, () => console.log(`Server Running at port ${PORT}`));
