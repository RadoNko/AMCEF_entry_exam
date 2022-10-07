import {List} from '../models/listModel';
import {Item} from '../models/itemModel';
import { ObjectId } from 'bson';
import * as UserService from '../services/userService';

export async function createNewItem (req) {
	try {
		const username = await UserService.getUsername(req);
		const newItem = new Item({title:req.body.title,text:req.body.text,deadline:req.body.deadline,status:'new'})
		await newItem.save();
		return List.findOneAndUpdate(
			{name: req.body.name, allowedUsers: username},
			{$push: {items: newItem}},
			{upsert: true});
	}catch (e) {
		return 'Something went wrong, please try again!';
	}

}
export async function updateItem (req) {
	try {
		const username = await UserService.getUsername(req);
		return List.findOneAndUpdate(
			{'items._id': new ObjectId(req.body.task_id),allowedUsers: username},{$set : {'items.$.status' : req.body.status}});
	}catch (e) {
		return 'Something went wrong, please try again!';
	}
}
