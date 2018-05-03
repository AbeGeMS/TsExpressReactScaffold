
/// <reference path="../../node_modules/@types/express/index.d.ts"/>
/// <reference path="./../Service/sampleService.ts"/>

import * as express from "express";
import * as path from "path";
import * as __ from "./../Service/sampleService";
let router = express.Router();
router.get('/',(req,res)=>{
    console.log("come to here!");
    res.sendfile(path.join(__dirname,"../public/page/index.html"));
});

router.get('/hi', (req, res) => {
    console.log("SampleRouter.hi");
    let hi = new __.Abe.Service.SampleService();
    res.json(hi.SayHi(req.query.id));
});

export = router;