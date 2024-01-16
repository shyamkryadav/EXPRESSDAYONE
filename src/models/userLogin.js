const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  password: String,
})

const Userlogin = mongoose.model('Userlogin',UserSchema);

module.exports = Userlogin;