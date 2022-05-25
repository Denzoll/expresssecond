const Router = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const router = Router();

router.get('/brands', (req,res) => {
    res.json('Бренд')
});
router.post('/brands', (req,res) =>{
res.json('Бренд добавлен')
});
router.delete('/brands',(req,res) => {
    res.json('Бренд удален')

});
module.exports = router;