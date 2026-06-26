import express from 'express';
import cors from 'cors';
import notesObj from './db.js';
import 'dotenv/config' // require('dotenv').config()
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.json());
app.use(express.static('dist'));
app.use(cors());
app.get("/api/notes",(request,response) => {
    response.send(notesObj);
})
app.post("/api/addNotes",(request,response) => {
    const body = request.body;
    response.status(201).send(body);

});

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})


