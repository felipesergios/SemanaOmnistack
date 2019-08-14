const Dev = require ('../model/Dev');
module.exports = {
   async store(req,res){
        console.log(req.params.devId);
        const {devId}=req.params;
        const {user}=req.headers;
        const loggedDev = await Dev.findById(user);
        const targetDev = await Dev.findById(devId);
    if(!targetDev){
        return res.status(400).json({error:'Dev is not exist'});
    }
    if(targetDev.likes.includes(loggedDev._id)){
        console.log('DEU MATH');

    }
        loggedDev.likes.push(targetDev._id);
        await loggedDev.save();    

        return res.json(loggedDev);

    }

};