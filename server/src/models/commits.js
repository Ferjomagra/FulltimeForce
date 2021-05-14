const mongoose = require('mongoose')
const { Schema, model } = require('mongoose')

const commitSchema = new Schema({
	tdata: {type: String, required: true},
	name: {type: String, required: true},
	id_repo: {type:String, required: true},
	html_url: {type:String, required: true},
	api_url: {type: String, required: true},
	created_at: {type: String, required: true},
	date: {type: String, required: true}

})

module.exports = mongoose.model('Commit', commitSchema)