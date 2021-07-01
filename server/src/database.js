const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/github_project',{
	useUnifiedTopology: true,
	useNewUrlParser: true
})
/*mongoose.connect('',{
	useUnifiedTopology: true,
	useNewUrlParser: true
})*/

.then(db=> console.log('Db conectada'))
.catch((err) => console.error(err)); 
