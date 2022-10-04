exports.listTODO = async (req, res, next) => {
	try {
		res.json('TEST listTODO');
	} catch (error) {
		next(error);
	}
};
exports.addTODO = async (req, res, next) => {
	try {
		res.json('TEST addTODO');
	} catch (error) {
		next(error);
	}
};
exports.removeTODO = async (req, res, next) => {
	try {
		res.json('TEST removeTODO');
	} catch (error) {
		next(error);
	}
};
exports.shareTODO = async (req, res, next) => {
	try {
		res.json('TEST shareTODO');
	} catch (error) {
		next(error);
	}
};
