import mongoose from 'mongoose';
import {Item} from './itemModel';

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
	// TODO :
	items: [{
		type: Item.schema
	}],
	allowedUsers: {
		type: [String]
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
