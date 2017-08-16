//    I somewhat understand the need for this stuff   //
const express = require('express');

const app = express();

const mustEx = require('mustache-express');

const chalk = require('chalk');

const file = require('fs');
//    I somewhat understand the need for this stuff   //

console.log(chalk.cyan("testing... ") + chalk.red("This is the just the begining"));

//    ---   ---   ---   ---   ---   //

file.readFile('user.json', function (err, contents) {
  const user = JSON.parse(contents);
})

//    I don't understand this line    //
app.use(express.static('public'));
//    Ask about this line...    //


//    I do understand this section somewhat   ---   //
app.listen(3000, function () {
  console.log(chalk.inverse("success initializing begining phase of roboStache web app creation"));
});
//    Port stuff, don't need to ask as much as other things...    //



//    I don't know what this section does....   //
app.engine('mustache', mustEx() );
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
//    Nooooo idea... I should ask about this  //


console.log(chalk.white("if it wasn't for " + (chalk.magenta("CHALK") + (" this would be horiblly boring..."))));


//    I kinda get this, but I don't understand the render   //
app.get('/', function (req, res) {
 res.send('whaaaaaat??!')
})

app.get('/', function(req, res){
  res.render("html", );
});
//    Ask about the render...   --    //
