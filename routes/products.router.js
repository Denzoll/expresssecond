const Router = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = Router();

router.get('/products', (req,res) => {
    res.json('Продукты')
});
router.get('/products:id', (req,res) => {
    res.json(`Продукт с ID: ${req.params.id}`)
});
router.post('/products', (req,res) =>{
 res.json ('Добавлен продукт')
});
router.delete('/products:id', (req,res) =>{
    res.json(`Продукт с ID: ${req.params.id} удален`)
});
module.exports = router;
