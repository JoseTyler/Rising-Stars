const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req,res) => {
  res.send('Hello Again Jose!')
})

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Magic happening on port " + PORT);
})