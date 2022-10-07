import * as UserService from '../services/userService';
exports.register = async (req, res, next) => {
	try {
		await UserService.register(req,res)
	} catch (error) {
		next(error);
	}
};
exports.login = async (req, res, next) => {
	try {
		res.json('TEST login');
	} catch (error) {
		next(error);
	}
};
