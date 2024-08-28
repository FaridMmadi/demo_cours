
const http = require('http');
const express = require('express');
let etudiants = require('./data');
let success = require('./helper');
const mongoose= require('mongoose');
const morgan = require('morgan');
const Etudiant=require('./models/etudiant')

/*const logger = function (req, res, next) {
    const date = new Date();
    console.log(`la date est ${date}`);
    next();

}
const togger = function(req, res, next){
    console.log('voici middleware 2')
    next()
}*/






//const server = http.createServer((req, res)=> {
  //  res.end("Hello My name is Abdoul Niang");
//}); 

const app = express();
app.use(morgan('dev'));
app.use(express.json());



mongoose.connect("mongodb://127.0.0.1:27017/etudiants" )
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log(err));
/*app.use(logger);*/




app.get('/etudiants/:id', (req, res) =>{
    const id = req.params.id;
    const etudiant = etudiants.find((et) => et.id == id);
    if(etudiant){
        const message = "Etudiant trouve";
        res.json(success(message, etudiant));
    }else{
        res.send("l etudiant est introuvable");
    }
})

app.get('/etudiants', (req, res) =>{
    const message = "Liste des etudiants";
    res.json(success(message, etudiants));
})

app.post('/etudiants',(req, res, )=>{
    const newEtudiant = new Etudiant({...req.body});
    newEtudiant.save();
    res.json(newEtudiant);
})



app.put('/etdit/:id',(req,res,)=>{
    const id =ParseInt(req.params.id); 
    const name = req.body.name;
    const etudiants= etudiant.find(e=>e.id===id);
    console.log(etudiant);
    res.json(etudiant);
})


app.delete('/etds/:id',(req,res,)=>{
    const id =ParseInt(req.params.id); 
    const etudiants= etudiant.find(e=>e.id===id);
    console.log(etudiant);
    etudiants=etudiants.filter(etudiant=>etudiant.id!==id)
    res.json(etudiant);
});





app.listen(3000, () =>{
    console.log("serveur demare sur le port 3000");
});





