var mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	name:{
		type: String,
		required: true,
		minLength: 1,
		trim: true
	},
	description:{
		type: String,
		required: true,
		minLength: 1,
		trim: true,
		default: ''
    },
    price:{
		type: Number,
		required: true,
		minLength: 1,
		trim: true,
		default: ''
	},
	images:{
		type: Array,
		required: true,
		minLength: 1,
		trim: true,
		default: ''
	},
	reservations: { 
		type: Array 
	}
})

const Room = mongoose.model('Room', RoomSchema);
module.exports = { Room };