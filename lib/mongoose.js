import mongoose from 'mongoose';
const {Schema,model} = mongoose;

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    username:{type:String},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

const User = mongoose.models.User || model('User',UserSchema);
export default User;