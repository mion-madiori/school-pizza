var mongoose = require('mongoose');

var schema = mongoose.Schema({name: String, price: Number, ingredients: Array, image: String});
var Values = mongoose.model('pizza', schema);

let schemaCommand = mongoose.Schema({firstname: String, lastname: String, phone: String, listPizza: [schema]})
var ValuesCommand = mongoose.model('command', schemaCommand);

let db = {
    connectedDb: () => {
        mongoose.connect('mongodb://localhost/pizza');
    },
    getAll: (res) => {
        this.res = res
        Values.find((err, result)=>{
            if(err){
                console.log(err)
                res.send('database error')
                return
            }
            let pizzas = []
            result.forEach (pizza => {
                pizzas.push(pizza)
            })
            res.status(201).send(pizzas)
        })
    },
    getAllCommand: (res) => {
        this.res = res
        ValuesCommand.find((err, result)=>{
            if(err){
                console.log(err)
                res.send('database error')
                return
            }
            let commands = []
            result.forEach (command => {
                commands.push(command)
            })
            res.status(201).send(commands)
        })
    },
    insert: (val, res) => {
        let request = new Values(val)
        console.log(val)
        request.save((err, result) => {
            if (err){
                console.log(err)
                res.send(JSON.stringify({status: 'error', value: 'Error, request failed'}))
                return
            }
            res.status(201).send(JSON.stringify({status:'ok', value: result, id: result['id']}))
        })
    },
    insertCommand: (val, res) => {
        let request = new ValuesCommand(val)
        console.log(val)
        request.save((err, result) => {
            if (err){
                console.log(err)
                res.send(JSON.stringify({status: 'error', value: 'Error, request failed'}))
                return
            }
            res.status(201).send(JSON.stringify({status:'ok', value: result, id: result['id']}))
        })
    },
    delete: id => {
        Values.remove({_id: id}, err => {
            if (err){
                console.error(err)
                return
            }
        })
    },
    getOne: (id, res) => {
        Values.findById(id, (err, result) => {
            if(err){
                console.log(err)
                return
            }
            res.status(201).send(JSON.stringify({status: 'ok', value: result}))
        })
    },
    update: (id, pizza, res) => {
        Values.findOneAndUpdate({_id: id}, {$set: pizza}, (err, result) => {
            if (err){
                console.log(err)
                return
            }
            res.status(201).send(JSON.stringify({status: 'ok', value: pizza}))
        })
    }
}

module.exports = db; 