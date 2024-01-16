const mongoose = require( 'mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
  userName: String, // String is shorthand for {type: String}
  password: String,
  phoneNumebr: Number,
  address:{primaryAddress:String,TemporaryAddress:String}
})

const User = mongoose.model('User',UserSchema);

module.exports = User;