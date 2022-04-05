const mongoose = require('mongoose');
async function connectDB() {
	try {
		const mongooseOptions = {
			useUnifiedTopology: true,
			useNewUrlParser: true,
		};
        const connectionString = process.env.MONGO_DB_URI || '';
		const db = await mongoose.connect(connectionString, mongooseOptions);
		console.log("database is connected to: ", db.connection.name);
	} catch (error) {
		console.log(error);
	}
};
module.exports = connectDB;