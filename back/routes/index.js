let express = require('express');
let db = require('../db/mongo')
// let mv = require('mv');

let router = express.Router();

router.route('/pizzas')
    // GET
    .get(function (req, res) {
        db.getAll(res);
    }) 
    //POST
    .post(function (req, res) {
        res.setHeader('Content-Type', 'application/json')
        db.insert(req.body, res)
    })

router.route('/pizzas/:pizza_id')
    // GET
    .get(function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        let uuid = req.params.pizza_id;
        db.getOne(uuid, res);
    })
    //PUT
    .put(function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        let uuid = req.params.pizza_id;
        db.update(uuid, req.body , res);
    })
    //DELETE
    .delete(function (req, res) {
        res.setHeader('Content-Type', 'application/json');

        let uuid = req.params.pizza_id;
        
        console.log(uuid)
        db.delete(uuid);

        res.send(JSON.stringify({status: "ok", value: uuid}));
    });

router.route('/command')

    //POST
    .post(function (req, res) {
        res.setHeader('Content-Type', 'application/json')
        db.insertCommand(req.body, res)
    })
    //GET
    .get(function (req, res) {
        db.getAllCommand(res);
    }) 

router.route('/upload')

    .post(function(req, res){
        if (!req.files){
            
        console.log('coucoucoucou')
            return res.status(400).send('No files were uploaded.');
        }

        console.log(req.files.image)

        let sampleFile = req.files.image;

        sampleFile.mv('./public/uploadFile/' + sampleFile.name , function(err) {
            if (err){
                // return res.status(500).send(err);
                console.log(err)
                return
            }
        
            res.send('File uploaded!');
        });
    })
    

module.exports = router;