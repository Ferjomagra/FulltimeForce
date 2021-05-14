const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/github_project',{
	useUnifiedTopology: true,
	useNewUrlParser: true
})
/*mongoose.connect('mongodb+srv://1FulltimeForce:0dSgm2q95L4ntIOq@cluster0.mlxkw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{
	useUnifiedTopology: true,
	useNewUrlParser: true
})*/

.then(db=> console.log('Db conectada'))
.catch((err) => console.error(err)); 