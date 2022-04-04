const fs = require('fs');

const element = {
	"ID": 1,
	"Name": "Air",
	"Parents": [null, null]
}

let data = JSON.stringify(element)

writeFile('element-tree.json', data, (err) => {
	if (err){
		throw err;
	}
	console.log("JSON data is saved")
})