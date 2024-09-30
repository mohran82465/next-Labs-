const { default: mongoose } = require("mongoose");



const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    }
})
export const userModel = mongoose.models.User || mongoose.model('User', userSchema);


