const express = require("express")
const router = express.Router()


//route root : /admin/seller

router.get("/",(req,res)=>{
    res.render("admin/sellerList")
})


router.get("/addSeller",(req,res)=>{
    res.render("admin/addSeller")
})
router.get("/edit",(req,res)=>{
    res.render("admin/editSeller")
})



module.exports = router;