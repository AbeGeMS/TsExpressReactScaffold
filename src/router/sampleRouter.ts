
/// <reference path="../../node_modules/@types/express/index.d.ts"/>

import * as express from "express";
import * as path from "path";

let router = express.Router();
router.get('/',(req,res)=>{
    console.log("come to here!");
    res.sendfile(path.join(__dirname,"../public/page/index.html"));
});

export = router;