//Function that handles the reading of files and merge in value
  // read from file and get a string
    // merge values into string

var fs = require('fs');

function mergeValues(values, content) {
	//cycle over the keys
	for(var key in values){
		//replace all {{key}} with the values from the values object
		content = content.replace("{{" + key + "}}", values[key]);
	}

	//return merged content
	return content;
}

function view(templateName, values, response){
	//read from the template file
	var fileContents = fs.readFileSync('./views/' + templateName + ".html", {encoding: "utf8"});
	//insert values in to the content
	fileContents = mergeValues(values, fileContents);
	//write out the response
  	response.write(fileContents);


}

module.exports.view = view;