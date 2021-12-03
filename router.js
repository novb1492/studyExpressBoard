const router = require("express").Router();
const controller=require("./controllers/controller");
router.get("/", (req,res)=>{
    console.log(req.param("action"));
    res.send("hi");
});


module.exports = router;