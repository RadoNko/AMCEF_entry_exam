// import mongoose from 'mongoose';
// import {mongo, env} from './vars';
//
// // set mongoose Promise to Bluebird
// mongoose.Promise = Promise;
//
// // Exit application on error
// mongoose.connection.on('error', (err) => {
// 	logger.error(`MongoDB connection error: ${err}`);
// 	process.exit(-1);
// });
//
// /**
//  * Connect to mongo db
//  *
//  * @returns {object} Mongoose connection
//  * @public
//  */
// exports.connect = () => {
// 	mongoose
// 		.connect(mongo.uri, {
// 			useCreateIndex: true,
// 			keepAlive: 1,
// 			useNewUrlParser: true,
// 			useUnifiedTopology: true,
// 			useFindAndModify: false,
// 			socketTimeoutMS: 4 * 30000,
// 		})
// 		.then(() => console.log('mongoDB connected...'));
// 	return mongoose.connection;
// };
