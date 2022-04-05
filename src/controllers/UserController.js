const User = require('../models/UserModel');
const {encryptPassword, validatePassword} = require('../helper/PasswordHandler');
const TokenGenerator = require("../helper/TokenGenerator");


const register = async (req, res) => {
	if(!req.body.email) return res.status(400).json({ ok: false, message: "Email is required" });
	if(!req.body.password) return res.status(400).json({ ok: false, message: "Password is required" });
	if(!req.body.name) return res.status(400).json({ ok: false, message: "Name is required" });
	
	const { email } = req.body;
	//find user
	const findUser = await User.findOne({ email });
	//if user exist send an error
	if (findUser) {
		return res.json({ ok: false, message: "User already exist" });
	}


	const user = await User.create(req.body);
	//encrypt password before saving it on database
	user.password = await encryptPassword(user.password);

	const savedUser = await user.save();
	//token
	const token = await TokenGenerator(savedUser)

	return res.status(201).header("x-token", token).json({
		ok: true,
		user,
		token,
	});
};

const login = async (req, res) => {
	if(!req.body.email) return res.status(400).json({ ok: false, message: "Email is required" });
	if(!req.body.password) return res.status(400).json({ ok: false, message: "Password is required" });

	const user = await User.findOne({ email: req.body.email });

	if (!user) return res.status(400).json({ 
		ok: false, 
		message: "User doesn't exist" 
	});

	const isMatch = await validatePassword(req.body.password, user.password);

	//user not found
	if (!isMatch) {
		return res.status(400).json({
			ok: false,
			message: "Incorrect password",
		});
	}

	//Generate Token
	const token = await TokenGenerator(JSON.stringify(user))

	return res.status(200).header("x-token", token).json({
		ok: true,
		user,
		token,
	});
};

const profile = async (req, res) => {
	const token = req.header("x-token");
	//where does userID come from? TokenValidator middleware
	const user = await User.findById(req.userId);

	if (!user) return res.status(400).json({ 
		ok: false, 
		message: "User doesn't exist" 
	});

	return res.json({
		ok: true,	
		user,
		token
	});
};


module.exports = {
    register,
    login,
    profile
}