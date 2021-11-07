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
                    {title: "First SAAS Website:",
                     link: "https://node-first-saas-website.azurewebsites.net" 
                    },
                    {title: "My Getting to Know Eachother:",
                     link: "https://node-getting-to-know-eachother.azurewebsites.net" 
                    },
                    {title: "My Resume:",
                     link: "https://node-web-resume.azurewebsites.net" 
                    },
                    {title: "Dice Roller:",
                     link: "https://node-dice-roller.azurewebsites.net/" 
                    },
                    {title: "RegExp Tester: ",
                     link: "https://node-regexp-tester-rg.azurewebsites.net/" 
                    },
                    {title: "Health Risk Calculator: ",
                     link: "https://se-health-insurance-calculator.azurewebsites.net/" 
                    },
                    {title: "Final Project Proposal:",
                     link: " https://final-project-proposal.azurewebsites.net/" 
                    },
                    {title: "Barber Shop Site: ",
                     link: "https://qualitystudios.azurewebsites.net/" 
                    }
                ],

    })
})

app.listen(port, ()=>console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate.`
))
