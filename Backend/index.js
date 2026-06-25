import express from 'express';
import cors from 'cors';
import notesObj from './db.js';
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(express.static('dist'));
app.use(cors());
app.get("/api/notes",(request,response) => {
    response.send(notesObj);
})

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`)
})


