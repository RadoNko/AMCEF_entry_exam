import {List} from '../models/listModel';
import {Item} from '../models/itemModel';
import { ObjectId } from 'bson';

export async function createNewItem (req) {
	// TODO:get current user
	const username = 'test';
	// ----------------
	const newItem = new Item({title:req.body.title,text:req.body.text,deadline:req.body.deadline,status:'new'})
	await newItem.save();
	return List.findOneAndUpdate(
			{name: req.body.name, allowedUsers: username},
			{$push: {items: newItem}},
			{upsert: true});
}
export async function updateItem (req) {
	// TODO:get current user
	const username = 'test';
	// ----------------
	// const newItem = new Item({title:req.body.title,text:req.body.text,deadline:req.body.deadline})
	console.log(req.body.task_id);
	console.log(req.body.status);

	// const x = await List.findOneAndUpdate(
	// 	{_id: new ObjectId(req.body.task_id)},{status : req.body.status},{upsert: true});
	// console.log(x);
	// return Item.findOneAndUpdate({_id:new ObjectId(req.body.task_id)},{status : req.body.status},{upsert: true});
	return List.findOneAndUpdate(
		{'items._id': new ObjectId(req.body.task_id)},{$set : {'items.$.status' : req.body.status}});
}
