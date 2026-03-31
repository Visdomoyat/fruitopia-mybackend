const Fruit = require('../models/fruit.js');
const express = require('express')
const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const createdFruit = await Fruit.create(req.body);
        res.status(200).json(createdFruit);
    } catch(err) {
        res.status(500).json({err: err.message});
    }
});

router.get('/', async (req, res) => {
   try {
    const foundFruits = await Fruit.find();
    res.status(200).json(foundFruits);
   } catch (err) {
    res.status(501).json({err: err.message});
   }
})

router.get('/:fruitId', async (req, res) => {
    
    try {
        const foundFruit = await Fruit.findById(req.params.fruitId)

        if(!foundFruit) {
            res.status(404);
            throw new Error('pet not found')
        }
        res.status(200).json(foundFruit);
    } catch(err){
        if (res.statusCode === 404) {
            res.status(501).json({err: err.message});
        } else {
            res.status(501).json({err:err.message});
        }
        
    }
       
})

router.delete('/:fruitId', async (req, res) => {
    try{
        const  deleteFruit = await Fruit.findByIdAndDelete(req.params.fruitId)

        if(!deleteFruit) {
            res.status(404);
            throw new Error('Fruit not found')
        }
        res.status(200).json(deleteFruit)
    }catch(err){
if(res.statusCode === 404) {
    res.status(502).json({err:err.message})
} else {
    res.status(502).json({err:err.message})
}
    }
})

router.put('/:fruitId', async (req, res) => {
    try{
        const updateFruit = await Fruit.findByIdAndUpdate(req.params.fruitId, req.body)

        if(!updateFruit) {
            res.status(404)
            throw new Error('Fruit not found')
        }
        res.status(200).json(updateFruit)
    }catch(err) {
        if(res.statusCode === 404) {
            res.status(502).json({err:err.message})
        } else {
            res.status(502).json({err:err.message})
        }
    }
})

module.exports = router