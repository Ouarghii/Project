const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rass:warghui110@cluster0.zx8hs.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {

  console.log(' we re connected!')
});