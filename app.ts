import bodyParser from 'body-parser'
import express from 'express'

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// base unsecured routes
app.use('/health', (req: express.Request, res: express.Response) => {
    res.end('<html><h1>E-Commerce</h1></html>')
})

app.use('/', (req: express.Request, res: express.Response) => {
    res.end('<html><h1>Hi there, Welcome</h1></html>')
})

// set up required routes

export default app
