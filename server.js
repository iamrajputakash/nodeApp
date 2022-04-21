// server.js

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello i am Akash Singh from up, currentlu pursuing mca from cu, I have gained my knowlede in Linux, git, Docker, AWS. I have done my projects on aws hosting static website & basic concept of ci/cd.')
})

app.listen(3000, () => {
    console.log('Application start  on 3000')
})
