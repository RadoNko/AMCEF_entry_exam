import mongoose from 'mongoose';
import {User} from './userModel';
/**
 * Refresh Token Schema
 * @private
 */
const listSchema = new mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true,
	},
	allowedUsers: {
		type: [User.schema]
	},
});

/*
* Run pre-save fn
*/

listSchema.pre('save', (next) => {
	// this.updated_at = Date.now();
	return next();
});
export const List = mongoose.model('List', listSchema);
