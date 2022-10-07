import { User } from '../models/userModel';

export async function getUsers(){
	return User.find();
}
export async function getUsername(req){
	const authHeader=req.headers.authorization;

	const auth = Buffer.from(authHeader.split(' ')[1],
		'base64').toString().split(':');
	const userName = auth[0];
	return userName;
}
export async function register(req,res){
	try{
		// Creates new user if it does not exist otherwise won't update
		// await User.updateOne(
		// 	{username:req.body.username},
		// 	{ $setOnInsert: {username:req.body.username,password:req.body.password} },
		// 	{ upsert: true }
		// )

		const userExists = await User.findOne({username:req.body.username});
		if (!userExists){
			const user = new User({username:req.body.username,password:req.body.password})
			await user.save();
			return res.json('Registration successful!');
		} else return res.json('User already exists!');

	}catch (e) {
		return res.json('Something went wrong, please try again!');
	}
}
