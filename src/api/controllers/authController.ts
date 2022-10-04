exports.register = async (req, res, next) => {
	try {
		res.json('TEST register');
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
