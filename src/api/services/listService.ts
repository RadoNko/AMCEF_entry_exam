import {List} from '../models/listModel';
import {User} from '../models/userModel';

export async function saveNewTODO(req){
	try{
		// TODO:get current user
		const user = await User.findOneAndUpdate(
			{username: 'test'},
			{username: 'test',password: 'test'},
			{ upsert: true });
		//------------------
		await List.findOneAndUpdate(
			{name : req.body.name},
			{name : req.body.name, allowedUsers : [user!.username]},
			{ upsert: true });
		return 'Success!';
	}catch (e) {
		console.log(`${e}`);
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
	// TODO:get current user
	const username = 'test';
	// ----------------

	return List.findOneAndUpdate(
		{name: req.body.name, allowedUsers: username},
		{$push: {allowedUsers: req.body.username}},
		{upsert: true});
}
