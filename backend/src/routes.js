const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DisikeController = require('./controllers/LikeController');
const routes = express.Router();
routes.get('/devs',DevController.index);

routes.get('/', (req,res)=>{
    //return res.send(`Hello ${req.query.name}`);
    return res.json({ mensage: `ola ${req.query.name}`});
});

routes.post('/devs1',(req,res)=>{
    console.log(req.body);
    return res.json(req.body);
});

routes.post('/devs',DevController.store);
routes.post('/devs/:devId/likes',LikeController.store);
routes.post('/devs/:devId/dislikes',DisikeController.store);

module.exports = routes;