exports.addItem = async (req, res, next) => {
	try {
		res.json('TEST addItem');
	} catch (error) {
		next(error);
	}
};
exports.flagItem = async (req, res, next) => {
	try {
		res.json('TEST flagItem');
	} catch (error) {
		next(error);
	}
};
