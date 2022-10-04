import mongoose from 'mongoose';
/**
 * Refresh Token Schema
 * @private
 */
const userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
		lowercase: true,
	},
	password: {
		type: String,
		required: true,
	},
});

/*
* Run pre-save fn
*/

userSchema.pre('save', (next) => {
	// this.updated_at = Date.now();
	return next();
});

export const User = mongoose.model('User', userSchema);

