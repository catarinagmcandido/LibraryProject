const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bookRoutes = require('./api/routes/books.js')
const userRoutes = require('./api/routes/user.js')



// Run the `main` function, catch any errors and finally close the connection when the main function is done
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/books', bookRoutes)
app.use('/user', userRoutes)


// responsible for solving CORS privacy problems
app.use((req, res) => {

    res.header("Access-Control-Allow-Origin", '*')
    res.header("Access-Control-Allow-Headers", 
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"  
    )

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, PATCH")
        return res.status(200).json({})
    }
})

app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})

app.use ((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error: {
            message: error.message
        }
    })
})




module.exports = app;