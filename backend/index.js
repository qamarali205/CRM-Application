const app = require("./app");

const mongoose = require('mongoose');


// Connect to MongoDB

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database is connected");

 
}).catch((err) => {
  console.log(err);
});
// console.log(process.env.MONGODB_URI)

// Start the Express server
app.listen(process.env.PORT, () => {
  console.log(`App listening on port ${process.env.PORT}!`);
});