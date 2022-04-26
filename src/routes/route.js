const express = require('express');
const router = express.Router();

const cowinController=require("../controllers/cowinController")
const weatherMapController=require("../controllers/weathermapController")
const memeController=require("../controllers/memeController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


// router.get("/cowin/states", CowinController.getStates)
// router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
// router.get("/cowin/getByPin", CowinController.getByPin)

// router.post("/cowin/getOtp", CowinController.getOtp)

 router.get("/getDistrict",cowinController.getDistrict);
 router.get("/getWeatherAll",weatherMapController.getWeatherAll);
 router.get("/getWeatherTemp",weatherMapController.getWeatherTemp);
 router.get("/arrangeByTemp",weatherMapController.arrangeByTemp);
 router.get("/getAllMemes",memeController.getAllMemes);
 router.post("/createMeme",memeController.createMeme);
 
module.exports = router;