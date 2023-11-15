const express = require('express')
const app = express()

app.get('/', (req, res) => {
    let date_time = new Date();
    let date = ("0" + date_time.getDate()).slice(-2);
    let month = ("0" + (date_time.getMonth() + 1)).slice(-2);
    let year = date_time.getFullYear();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    let seconds = date_time.getSeconds();

    console.log("\n============================ ")
    console.log(year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds)
    console.log(req);
    console.log(`origin: ${req.get('origin')}`)
    console.log("\n============================\n")
    res.send('Yee haw >>>')
})
app.listen(process.env.PORT || 3000, () => {
    console.log("started on port 3000!")
})
