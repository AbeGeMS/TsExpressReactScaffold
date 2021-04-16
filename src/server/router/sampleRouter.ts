import * as express from "express";
import * as path from "path";
import * as querystring from "querystring";
import { Request, Response } from "express";
import { SampleService } from "../sample/sampleService";

let router = express.Router();
router.get('/',(req,res)=>{
    console.log("come to here!");
    res.sendFile(path.join(__dirname,"../public/page/index.html"));
});

router.get('/hi', (req: Request, res: Response) => {
    console.log("SampleRouter.hi");
    let hi = new SampleService();
    res.json(hi.SayHi(req.query.id as string));
});

export = router;