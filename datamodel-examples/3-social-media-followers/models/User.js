const mongoose = require("mongoose")
const { Schema, model } = mongoose

// "Instagram" or "twitter" user following others...

const UserSchema = new Schema({

  name: { type: String, required: true },
  following: [{ type: Schema.Types.ObjectId, ref: 'User' }], // the people this user follows...
  followers: [{ type: Schema.Types.ObjectId, ref: 'User' }], // the people who follow this users...
  
  // YES, a model can reference itself, so in one user we can reference other userIds !
  // populating the followers works just as usual: User.findById(...).populate("followers")
    // by default populating does just go ONE level deep, 
    // so it will not populate again the followers of the follwers (preventing potentially endless populate cycles)
})

const User = model("User", UserSchema)

module.exports = User

