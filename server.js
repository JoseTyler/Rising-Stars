const express = require('express');
const app = express();

app.use(express.json());




// const routes = require('./routes/index.js')

// app.use(express.urlencoded({ extended: true }));

app.use(express.static(`${__dirname}/client/build`))

// app.use('/api/v1', routes)
// app.get('/', (req,res) => {
//   res.send('Hello Again Jose!')
// })
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})





const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})