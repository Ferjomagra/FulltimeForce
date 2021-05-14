const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const commitSchema = new Schema({
	tdata: {type: String},
	name: {type: String},
	id_repo: {type:String},
	html_url: {type:String},
	api_url: {type: String},
	created_at: {type: String},
	date: {type: String},
	current_date: {type: String}
})

module.exports = mongoose.model('Commit', commitSchema)