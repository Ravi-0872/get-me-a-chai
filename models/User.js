import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  image: { type: String },
  provider: { type: String },
  providerId: { type: String }
}, { timestamps: true });

// Prevent model overwrite upon hot reloads in development
const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
