const mongoose = require("mongoose");
const profieSchema = mongoose.Schema({
    image:String
})
module.exports = mongoose.model("Profie" , profieSchema);