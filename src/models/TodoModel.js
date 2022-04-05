const Schema = require('mongoose').Schema;
const model = require('mongoose').model;
const todoSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim:true
        },
        content: {
            type: String,
            required: true,
            trim:true
        },
        urgent: {
            type: Boolean,
            default: false,
        }
    },
    {
		versionKey: false,
		timestamps: true,
	}
);

module.exports = model("Todo", todoSchema);