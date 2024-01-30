import express from 'express'


import { join } from 'path'
const app = express()



app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html')
app.use('/public', express(join(__dirname, 'public')))
app.set('views', join(__dirname, '/views'))

app.post('/',(req,res)=>{
    res.render('index')
})

app.get('/', (req, res ) => {
    res.render('index')
})

