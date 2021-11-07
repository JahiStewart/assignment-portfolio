// Used express to get the file to display
var express = require('express')
var app = express()
const expressHandlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

var hbs = expressHandlebars.create({
    defaultLayout: 'main'
    //helpers: 
})

app.engine('handlebars', hbs.engine)

app.set('view engine', 'handlebars')
// Gets the current directory, and adds the "public" file
// This will display the html in the root directory of public. (no need to put it in the views folder)
app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())

//HandleBar Helpers
var hbs = expressHandlebars.create({
    defaultLayout: 'main'
    //helpers:
})

app.engine('handlebars', hbs.engine)

app.get('/',(req,res)=>{
    res.render('home', {
        assignments: [
                    {title: "Health Risk Calculator: ",
                     link: "http://localhost" 
                    },
                    {title: "Health Risk Calculator: ",
                     link: ""
                    }],

    })
})

app.listen(port, ()=>console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
))
