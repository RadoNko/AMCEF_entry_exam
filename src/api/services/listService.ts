import {List} from '../models/listModel';
import * as UserService from '../services/userService';

export async function saveNewTODO(req){
	try{
		const username = await UserService.getUsername(req);
		if(req.body.name.trim().length < 3){
			return 'TODO List name needs to be atleast 3 characters long...'
		}
		await List.findOneAndUpdate(
			{name : req.body.name},
			{name : req.body.name, allowedUsers : [username]},
			{ upsert: true });
		return 'Success!';
	}catch (e) {
		return 'An error occured, please try again!';
	}

}
export async function getTODO(req){
	const result =  await List.findOne({name: req.body.name}, 'name allowedUsers items');
	if (result === null ) return `TODO List does not exist`
	else return result;
}
export async function deleteTODO(req){
	return List.findOneAndRemove({name: req.body.name});
}

export async function shareUserTODO(req) {
	try {
		const username = await UserService.getUsername(req);
		if (!await List.findOne({name:req.body.name})){
			return 'List does not exist!';
		}
		return List.findOneAndUpdate(
			{name: req.body.name, allowedUsers: username},
			{$push: {allowedUsers: req.body.username}});
	}catch (e) {
		return 'An error occured, please try again!';
	}

}
