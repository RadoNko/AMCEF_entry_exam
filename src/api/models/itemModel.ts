import mongoose from 'mongoose';
/**
 * Refresh Token Schema
 * @private
 */
const itemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	text: {
		type: String,
		required: true,
	},
	deadline: {
		type: String,
		required: true,
	},
	status: {
		type: String,
	},
});

/*
* Run pre-save fn
*/

itemSchema.pre('save', (next) => {
	// this.updated_at = Date.now();
	return next();
});
export const Item = mongoose.model('Item', itemSchema);
