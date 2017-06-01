let express = require('express');
let db = require('../db/mongo')

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
    

module.exports = router;