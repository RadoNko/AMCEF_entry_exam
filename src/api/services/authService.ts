import { User } from '../models/userModel';

export async function auth(req, res, next){
	const authHeader=req.headers.authorization;

	const auth = Buffer.from(authHeader.split(' ')[1],
		'base64').toString().split(':');
	const userAuth = auth[0];
	const passAuth = auth[1];

	const users = await User.find();
	let success = false;
	users.forEach((user) => {
		if (user.username === userAuth && user.password === passAuth) {
			next();
			success = true;
			return;
		}
	})
	if (!success) res.status(400).json({ error: "Invalid credentials" });
}
