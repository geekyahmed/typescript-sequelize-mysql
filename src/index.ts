import express, { Request, Response, NextFunction } from 'express'
import { json, urlencoded } from 'body-parser'

import { connection } from './config'

const app = express()

const PORT = 3000

app.use(json())

app.use(urlencoded({
    extended: true
}))

// Error checkxing middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(500).json({
        message: err.message
    })
})

connection
    .sync()
    .then(() => {
        console.log('Database Is Running Successfully 🚀🚀')
    })
    .catch((err: Error) => {
        console.error(err)
    })

app.listen(PORT, () => {
    console.log(`Server Running At 127.0.0.1:${PORT} 🚀🚀`)
})