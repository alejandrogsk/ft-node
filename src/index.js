const app = require('./app');
const connectDB = require('./db/DatabaseConnection');
const port = 4000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectDB();