const router = require("express").Router();

const store = require("../db/store")

//make a GET requestwith all notes from the database

router.get("/notes", (req,res)=>{
    store
    .getNotes()
    .then( (notes)=>{
        return res.json(notes);
    })
    .catch( (err)=>res.status(500).json(err))

})

//post request

//delete request


module.exports = router;