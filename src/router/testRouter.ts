//This is Used for Client UT
import * as express from "express";
import * as path from "path";

let router = express.Router();
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"../public/page/testPage.html"));
});

export = router;