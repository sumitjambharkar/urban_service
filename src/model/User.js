import mongoose, {Schema} from "mongoose";

const userSchema = new Schema({
    email:String,
    password:String,
    refreshToken:{
        type:String,
        default:null,
    }
},{
    timestamps: true,
})

const User = mongoose.models.User || mongoose.model("User",userSchema);

export default User